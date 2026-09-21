import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, RotateCcw, Filter } from 'lucide-react';
import { apiService } from '../services/api';
import { Question, PriorityLevel, SubjectName } from '../data/types';
import { QuestionCard } from '../components/cards/QuestionCard';
import { FilterSheet } from '../components/modals/FilterSheet';
import { EmptyState } from '../components/common/EmptyState';
import { cn } from '../utils/cn';

export const PrioritiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [counts, setCounts] = useState<{
    ALL: number;
    HIGH: number;
    MEDIUM: number;
    LOW: number;
    INSUFFICIENT_EVIDENCE: number;
  }>({ ALL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, INSUFFICIENT_EVIDENCE: 0 });
  const [subjectCounts, setSubjectCounts] = useState<Record<string, number>>({});

  // Filter & Sort State
  const initialTier = (searchParams.get('tier') as PriorityLevel) || 'ALL';
  const [selectedPriority, setSelectedPriority] = useState<PriorityLevel | 'ALL'>(initialTier);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'priority' | 'recent' | 'historical'>('priority');

  const tabs: { id: PriorityLevel | 'ALL'; label: string }[] = [
    { id: 'ALL', label: 'All' },
    { id: 'HIGH', label: 'High' },
    { id: 'MEDIUM', label: 'Medium' },
    { id: 'LOW', label: 'Low' },
    { id: 'INSUFFICIENT_EVIDENCE', label: 'Insufficient Evidence' }
  ];

  const subjects: (SubjectName | 'ALL')[] = [
    'ALL',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology'
  ];

  const fetchCounts = async () => {
    const all = await apiService.getPriorities({});
    setCounts({
      ALL: all.length,
      HIGH: all.filter((q) => q.priority === 'HIGH').length,
      MEDIUM: all.filter((q) => q.priority === 'MEDIUM').length,
      LOW: all.filter((q) => q.priority === 'LOW').length,
      INSUFFICIENT_EVIDENCE: all.filter((q) => q.priority === 'INSUFFICIENT_EVIDENCE').length
    });
    setSubjectCounts({
      ALL: all.length,
      Mathematics: all.filter((q) => q.subject === 'Mathematics').length,
      Physics: all.filter((q) => q.subject === 'Physics').length,
      Chemistry: all.filter((q) => q.subject === 'Chemistry').length,
      Biology: all.filter((q) => q.subject === 'Biology').length
    });
  };

  const fetchQuestions = async () => {
    setIsLoading(true);
    const data = await apiService.getPriorities({
      priority: selectedPriority,
      subject: selectedSubject,
      searchQuery,
      sortBy
    });
    setQuestions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [selectedPriority, selectedSubject, searchQuery, sortBy]);

  const handleToggleSave = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleSavedQuestion(id);
    fetchQuestions();
  };

  const handleToggleStudied = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleStudiedQuestion(id);
    fetchQuestions();
  };

  const handleResetFilters = () => {
    setSelectedPriority('ALL');
    setSelectedSubject('ALL');
    setSearchQuery('');
    setSortBy('priority');
    setSearchParams({});
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e8e8e2]">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#121316]">Priorities</h1>
          <p className="text-xs text-[#5f636e] mt-1">
            Questions categorized by multi-signal recurrence, recency, and chapter weighting (~71% pattern consistency).
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFilterSheetOpen(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#e8e8e2] bg-white text-xs font-semibold text-[#121316] shadow-2xs"
          >
            <Filter className="w-4 h-4 text-[#5f636e]" />
            <span>Filters & Sort</span>
            {(selectedPriority !== 'ALL' || selectedSubject !== 'ALL' || sortBy !== 'priority') && (
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
            )}
          </button>
        </div>
      </div>

      {/* Horizontal Tabs (Touch-friendly & Horizontal Scrolling) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-2 px-2 no-scrollbar">
        {tabs.map((tab) => {
          const isActive = selectedPriority === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setSelectedPriority(tab.id);
                if (tab.id !== 'ALL') {
                  setSearchParams({ tier: tab.id });
                } else {
                  setSearchParams({});
                }
              }}
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border shrink-0',
                isActive
                  ? 'bg-[#121316] text-white border-[#121316] shadow-2xs'
                  : 'bg-white text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca] hover:text-[#121316]'
              )}
            >
              <span>{tab.label}</span>
              {counts[tab.id] > 0 && (
                <span
                  className={cn(
                    'px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none',
                    isActive ? 'bg-white/20 text-white' : 'bg-[#f0f0eb] text-[#5f636e]'
                  )}
                >
                  {counts[tab.id]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop Filter & Search Controls */}
      <div className="hidden sm:flex flex-wrap items-center justify-between gap-3 p-3 bg-white border border-[#e8e8e2] rounded-xl">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-[#8b8f9a] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or chapters..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg text-[#121316] placeholder:text-[#8b8f9a] outline-none focus:border-indigo-600"
          />
        </div>

        {/* Subject Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#5f636e]">Subject:</span>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value as any)}
            className="text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg px-2.5 py-1.5 text-[#121316] outline-none focus:border-indigo-600 font-medium"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s === 'ALL'
                  ? `All Subjects (${subjectCounts.ALL || 0})`
                  : `${s} (${subjectCounts[s] || 0})`}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Order */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#5f636e]">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg px-2.5 py-1.5 text-[#121316] outline-none focus:border-indigo-600 font-medium"
          >
            <option value="priority">Priority tier</option>
            <option value="recent">Recent relevance</option>
            <option value="historical">Historical recurrence</option>
          </select>
        </div>

        {/* Reset */}
        {(selectedPriority !== 'ALL' || selectedSubject !== 'ALL' || searchQuery || sortBy !== 'priority') && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-xs text-[#5f636e] hover:text-[#121316] px-2 py-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div>
        {isLoading ? (
          <div className="py-16 text-center text-xs font-mono text-[#8b8f9a]">
            Loading prioritized examination questions...
          </div>
        ) : questions.length === 0 ? (
          <EmptyState
            title="No questions match these filters"
            description="Try changing your subject or priority selection to view more questions from the dataset."
            actionText="Reset all filters"
            onAction={handleResetFilters}
          />
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8b8f9a] px-1">
              <span>Showing {questions.length} prioritized questions</span>
              <span>Click question to view detailed signals</span>
            </div>

            {questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onToggleSave={handleToggleSave}
                onToggleStudied={handleToggleStudied}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filter Bottom Sheet */}
      <FilterSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        selectedPriority={selectedPriority}
        onChangePriority={setSelectedPriority}
        selectedSubject={selectedSubject}
        onChangeSubject={setSelectedSubject}
        sortBy={sortBy}
        onChangeSort={setSortBy}
        onReset={handleResetFilters}
      />
    </div>
  );
};
