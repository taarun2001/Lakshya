import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, CheckCircle2 } from 'lucide-react';
import { Question } from '../../data/types';
import { PriorityBadge } from '../common/PriorityBadge';
import { cn } from '../../utils/cn';

interface QuestionCardProps {
  question: Question;
  onToggleSave?: (id: string, e: React.MouseEvent) => void;
  onToggleStudied?: (id: string, e: React.MouseEvent) => void;
  showWhyPrioritized?: boolean;
  className?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onToggleSave,
  onToggleStudied,
  showWhyPrioritized = true,
  className
}) => {
  return (
    <div
      className={cn(
        'group bg-white border border-[#e8e8e2] rounded-xl p-5 hover:border-[#d4d4ca] transition-all duration-150 shadow-2xs relative flex flex-col justify-between',
        question.studied && 'bg-[#fcfcfa]/80 opacity-90',
        className
      )}
    >
      <div>
        {/* Header: Priority Badge + Subject/Chapter + Actions */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <PriorityBadge priority={question.priority} size="sm" />
            <span className="text-xs font-mono text-[#8b8f9a]">{question.code}</span>
            <span className="text-xs text-[#5f636e] font-medium">• {question.subject}</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {onToggleStudied && (
              <button
                type="button"
                onClick={(e) => onToggleStudied(question.id, e)}
                title={question.studied ? 'Marked as studied' : 'Mark as studied'}
                className={cn(
                  'p-1.5 rounded-md transition-colors text-xs font-medium inline-flex items-center gap-1 border',
                  question.studied
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'text-[#8b8f9a] hover:text-[#121316] border-transparent hover:border-[#e8e8e2] bg-[#fafaf8]'
                )}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">
                  {question.studied ? 'Studied' : 'Mark studied'}
                </span>
              </button>
            )}

            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => onToggleSave(question.id, e)}
                title={question.saved ? 'Saved' : 'Save question'}
                className={cn(
                  'p-1.5 rounded-md transition-colors border',
                  question.saved
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'text-[#8b8f9a] hover:text-[#121316] border-transparent hover:border-[#e8e8e2] bg-[#fafaf8]'
                )}
              >
                <Bookmark className={cn('w-3.5 h-3.5', question.saved && 'fill-indigo-600')} />
              </button>
            )}
          </div>
        </div>

        {/* Topic Title */}
        <div className="text-xs font-medium text-[#4338ca] uppercase tracking-wider mb-1.5">
          {question.topicName}
        </div>

        {/* Question Text Excerpt */}
        <Link to={`/questions/${question.id}`} className="block group-hover:text-[#121316]">
          <h4 className="text-sm sm:text-[15px] font-medium text-[#121316] leading-snug line-clamp-3 mb-4">
            {question.text}
          </h4>
        </Link>

        {/* Dense Analytical Signals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 border-y border-[#f0f0eb] mb-3.5 text-xs bg-[#fafaf8]/60 px-3 rounded-lg">
          <div>
            <span className="text-[#8b8f9a] block text-[11px]">Historical appearances</span>
            <span className="font-mono font-bold text-[#121316] text-[13px]">
              {question.historicalAppearancesCount}×
            </span>
          </div>

          <div>
            <span className="text-[#8b8f9a] block text-[11px]">Last appearance</span>
            <span className="font-mono font-semibold text-[#121316] text-[13px]">
              {question.lastAppearanceYear}
            </span>
          </div>

          <div>
            <span className="text-[#8b8f9a] block text-[11px]">Recent activity</span>
            <span className="font-semibold text-[#121316] text-[13px]">
              {question.recentActivity}
            </span>
          </div>

          <div>
            <span className="text-[#8b8f9a] block text-[11px]">Similar variations</span>
            <span className="font-mono font-semibold text-[#121316] text-[13px]">
              {question.variationsCount}
            </span>
          </div>
        </div>

        {/* "Why prioritized?" Section */}
        {showWhyPrioritized && (
          <div className="mb-4">
            <div className="text-[11px] font-semibold text-[#5f636e] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>Why prioritized?</span>
              <span className="text-[10px] text-[#8b8f9a] font-mono">
                (~{question.patternConsistencyIndex}% signal consistency)
              </span>
            </div>
            <p className="text-xs text-[#5f636e] leading-relaxed line-clamp-2">
              {question.whyPrioritized}
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA: View Analysis */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-[#8b8f9a]">
          Chapter: <span className="text-[#5f636e]">{question.chapter}</span>
        </span>
        <Link
          to={`/questions/${question.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#121316] hover:text-[#4338ca] transition-colors py-1 pl-2"
        >
          <span>View analysis</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};
