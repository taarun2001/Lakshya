import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Layers, Compass, FileText, ArrowRight } from 'lucide-react';
import { apiService } from '../../services/api';
import { Question, TopicMetric, Paper } from '../../data/types';
import { PriorityBadge } from '../common/PriorityBadge';
import { cn } from '../../utils/cn';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{
    questions: Question[];
    topics: TopicMetric[];
    papers: Paper[];
  }>({ questions: [], topics: [], papers: [] });
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults({ questions: [], topics: [], papers: [] });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ questions: [], topics: [], papers: [] });
      return;
    }

    const timer = setTimeout(() => {
      setIsSearching(true);
      apiService.globalSearch(query).then((res) => {
        setResults(res);
        setIsSearching(false);
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    results.questions.length + results.topics.length + results.papers.length;

  const handleSelectQuestion = (id: string) => {
    onClose();
    navigate(`/questions/${id}`);
  };

  const handleSelectTopic = (id: string) => {
    onClose();
    navigate(`/topics/${id}`);
  };

  const handleSelectPaper = () => {
    onClose();
    navigate('/papers');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal / Palette Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl border border-[#e8e8e2] shadow-xl overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#e8e8e2] bg-[#fafaf8]">
          <Search className="w-5 h-5 text-[#8b8f9a] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, topics, papers (e.g. 'derivatives', 'capacitance')..."
            className="flex-1 bg-transparent text-sm text-[#121316] placeholder:text-[#8b8f9a] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8b8f9a] hover:text-[#121316] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block font-mono text-[10px] text-[#8b8f9a] bg-white border border-[#e8e8e2] px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#8b8f9a]">
              Type keywords to search across previous examination questions, syllabus topics, and papers.
            </div>
          ) : isSearching ? (
            <div className="py-8 text-center text-xs text-[#8b8f9a] font-mono">
              Searching examination intelligence...
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center">
              <p className="text-xs font-semibold text-[#121316]">No results found for "{query}"</p>
              <p className="text-xs text-[#8b8f9a] mt-1">
                Try searching for 'calculus', 'derivatives', 'optics', or '2024'.
              </p>
            </div>
          ) : (
            <>
              {/* Questions Results */}
              {results.questions.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8b8f9a] mb-2 px-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Questions ({results.questions.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.questions.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleSelectQuestion(q.id)}
                        className="w-full text-left p-3 rounded-lg border border-[#e8e8e2] hover:border-[#d4d4ca] hover:bg-[#fafaf8] transition-colors flex items-start justify-between gap-3 group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <PriorityBadge priority={q.priority} size="sm" />
                            <span className="text-xs font-mono text-[#8b8f9a]">{q.code}</span>
                            <span className="text-xs text-[#5f636e]">{q.topicName}</span>
                          </div>
                          <p className="text-xs text-[#121316] line-clamp-1 font-medium">{q.text}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8b8f9a] group-hover:text-[#121316] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics Results */}
              {results.topics.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8b8f9a] mb-2 px-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Topics ({results.topics.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleSelectTopic(t.id)}
                        className="w-full text-left p-2.5 rounded-lg border border-[#e8e8e2] hover:border-[#d4d4ca] hover:bg-[#fafaf8] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <PriorityBadge priority={t.priority} size="sm" />
                          <div>
                            <span className="text-xs font-semibold text-[#121316] group-hover:text-indigo-600">
                              {t.name}
                            </span>
                            <span className="text-xs text-[#8b8f9a] ml-2">
                              {t.subject} • {t.historicalQuestionsCount} questions
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8b8f9a] group-hover:text-[#121316] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Papers Results */}
              {results.papers.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8b8f9a] mb-2 px-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Papers ({results.papers.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.papers.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={handleSelectPaper}
                        className="w-full text-left p-2.5 rounded-lg border border-[#e8e8e2] hover:border-[#d4d4ca] hover:bg-[#fafaf8] transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#121316]">
                            {p.examName} {p.year}
                          </span>
                          <span className="text-xs text-[#5f636e]">• {p.subject}</span>
                          <span className="text-xs font-mono text-[#8b8f9a]">
                            ({p.questionCount}q)
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                          {p.status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-[#e8e8e2] bg-[#fafaf8] flex items-center justify-between text-[11px] text-[#8b8f9a]">
          <span>Navigation: Select result to jump directly</span>
          <span className="font-mono">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
