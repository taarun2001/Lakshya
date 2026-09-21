import React, { useState, useEffect } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { apiService } from '../services/api';
import { TopicMetric, SubjectName } from '../data/types';
import { TopicCard } from '../components/cards/TopicCard';
import { EmptyState } from '../components/common/EmptyState';

export const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<TopicMetric[]>([]);
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'ALL'>('ALL');
  const [isLoading, setIsLoading] = useState(true);

  const subjects: (SubjectName | 'ALL')[] = [
    'ALL',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology'
  ];

  const fetchTopics = async () => {
    setIsLoading(true);
    const data = await apiService.getTopics(search, selectedSubject);
    setTopics(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTopics();
  }, [search, selectedSubject]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e8e8e2]">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#121316]">Topics</h1>
          <p className="text-xs text-[#5f636e] mt-1">
            Syllabus chapters ranked by aggregate historical appearances and recent paper frequency.
          </p>
        </div>
      </div>

      {/* Search & Subject Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-white border border-[#e8e8e2] rounded-xl">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#8b8f9a] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics (e.g. 'Calculus', 'Electrostatics')..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg text-[#121316] placeholder:text-[#8b8f9a] outline-none focus:border-indigo-600"
          />
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {subjects.map((sub) => (
            <button
              key={sub}
              type="button"
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border shrink-0 ${
                selectedSubject === sub
                  ? 'bg-[#121316] text-white border-[#121316]'
                  : 'bg-[#fafaf8] text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
              }`}
            >
              {sub === 'ALL' ? 'All Subjects' : sub}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Cards Grid */}
      {isLoading ? (
        <div className="py-16 text-center text-xs font-mono text-[#8b8f9a]">
          Loading topic intelligence...
        </div>
      ) : topics.length === 0 ? (
        <EmptyState
          title="No topics found"
          description="No examination topics match your query. Try resetting your search."
          actionText="Reset search"
          onAction={() => {
            setSearch('');
            setSelectedSubject('ALL');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};
