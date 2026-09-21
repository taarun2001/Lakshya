import React, { useState, useEffect } from 'react';
import { Bookmark, CheckCircle2, Trash2, ArrowRight, Layers, Compass } from 'lucide-react';
import { apiService } from '../services/api';
import { Question, TopicMetric } from '../data/types';
import { QuestionCard } from '../components/cards/QuestionCard';
import { TopicCard } from '../components/cards/TopicCard';
import { EmptyState } from '../components/common/EmptyState';
import { useNavigate } from 'react-router-dom';

export const SavedPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'questions' | 'studied' | 'topics'>('questions');
  const [savedQuestions, setSavedQuestions] = useState<Question[]>([]);
  const [studiedQuestions, setStudiedQuestions] = useState<Question[]>([]);
  const [savedTopics, setSavedTopics] = useState<TopicMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const [savedQs, studiedQs, allTopics] = await Promise.all([
      apiService.getSavedQuestions(),
      apiService.getStudiedQuestions(),
      apiService.getTopics()
    ]);
    setSavedQuestions(savedQs);
    setStudiedQuestions(studiedQs);
    // Saved topics preview top 2 high priority topics
    setSavedTopics(allTopics.filter((t) => t.priority === 'HIGH').slice(0, 2));
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleSave = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleSavedQuestion(id);
    loadData();
  };

  const handleToggleStudied = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleStudiedQuestion(id);
    loadData();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Header */}
      <div className="pb-2 border-b border-[#e8e8e2]">
        <h1 className="text-2xl font-bold tracking-tight text-[#121316]">Saved</h1>
        <p className="text-xs text-[#5f636e] mt-1">
          Pinned questions and revision tracking for high-priority study sessions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('questions')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5 ${
            activeTab === 'questions'
              ? 'bg-[#121316] text-white border-[#121316]'
              : 'bg-white text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Bookmarked Questions ({savedQuestions.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('studied')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5 ${
            activeTab === 'studied'
              ? 'bg-[#121316] text-white border-[#121316]'
              : 'bg-white text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Studied Questions ({studiedQuestions.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('topics')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5 ${
            activeTab === 'topics'
              ? 'bg-[#121316] text-white border-[#121316]'
              : 'bg-white text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Saved Topics ({savedTopics.length})</span>
        </button>
      </div>

      {/* Tab Contents */}
      {isLoading ? (
        <div className="py-12 text-center text-xs font-mono text-[#8b8f9a]">
          Loading saved revision collection...
        </div>
      ) : activeTab === 'questions' ? (
        savedQuestions.length === 0 ? (
          <EmptyState
            icon={<Bookmark className="w-5 h-5" />}
            title="No saved questions"
            description="Save questions you want to revisit later during revision cycles."
            actionText="Explore priorities"
            onAction={() => navigate('/priorities')}
          />
        ) : (
          <div className="space-y-4">
            {savedQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onToggleSave={handleToggleSave}
                onToggleStudied={handleToggleStudied}
              />
            ))}
          </div>
        )
      ) : activeTab === 'studied' ? (
        studiedQuestions.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-5 h-5" />}
            title="No studied questions yet"
            description="Mark high-priority questions as studied as you work through them to track progress."
            actionText="Start with High Priority"
            onAction={() => navigate('/priorities?tier=HIGH')}
          />
        ) : (
          <div className="space-y-4">
            {studiedQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onToggleSave={handleToggleSave}
                onToggleStudied={handleToggleStudied}
              />
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {savedTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};
