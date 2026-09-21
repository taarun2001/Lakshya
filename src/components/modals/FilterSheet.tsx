import React from 'react';
import { X, Check, RotateCcw } from 'lucide-react';
import { SubjectName, PriorityLevel } from '../../data/types';
import { PriorityBadge } from '../common/PriorityBadge';
import { cn } from '../../utils/cn';

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPriority: PriorityLevel | 'ALL';
  onChangePriority: (p: PriorityLevel | 'ALL') => void;
  selectedSubject: SubjectName | 'ALL';
  onChangeSubject: (s: SubjectName | 'ALL') => void;
  sortBy: 'priority' | 'recent' | 'historical';
  onChangeSort: (s: 'priority' | 'recent' | 'historical') => void;
  onReset: () => void;
}

export const FilterSheet: React.FC<FilterSheetProps> = ({
  isOpen,
  onClose,
  selectedPriority,
  onChangePriority,
  selectedSubject,
  onChangeSubject,
  sortBy,
  onChangeSort,
  onReset
}) => {
  if (!isOpen) return null;

  const priorities: (PriorityLevel | 'ALL')[] = [
    'ALL',
    'HIGH',
    'MEDIUM',
    'LOW',
    'INSUFFICIENT_EVIDENCE'
  ];

  const subjects: (SubjectName | 'ALL')[] = [
    'ALL',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology'
  ];

  const sortOptions = [
    { id: 'priority', label: 'Priority rank' },
    { id: 'recent', label: 'Recent relevance' },
    { id: 'historical', label: 'Historical recurrence' }
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-xl border border-[#e8e8e2] shadow-xl z-10 max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8e8e2] bg-[#fafaf8]">
          <div>
            <h3 className="text-sm font-bold text-[#121316]">Filter & Sort Priorities</h3>
            <p className="text-[11px] text-[#8b8f9a]">Refine examination questions list</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#8b8f9a] hover:text-[#121316] hover:bg-[#f0f0ea]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-5 overflow-y-auto">
          {/* Priority Filter */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#5f636e] mb-2.5">
              Priority Classification
            </label>
            <div className="flex flex-wrap gap-2">
              {priorities.map((p) => {
                const isSelected = selectedPriority === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => onChangePriority(p)}
                    className={cn(
                      'px-3 py-1.5 rounded-md text-xs font-medium border transition-colors flex items-center gap-1.5',
                      isSelected
                        ? 'bg-[#121316] text-white border-[#121316]'
                        : 'bg-[#fafaf8] text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
                    )}
                  >
                    {p === 'ALL' ? (
                      <span>All Priorities</span>
                    ) : (
                      <PriorityBadge priority={p} size="sm" />
                    )}
                    {isSelected && <Check className="w-3.5 h-3.5 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#5f636e] mb-2.5">
              Subject Filter
            </label>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((s) => {
                const isSelected = selectedSubject === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => onChangeSubject(s)}
                    className={cn(
                      'px-3 py-2 rounded-md text-xs font-medium border text-left flex items-center justify-between transition-colors',
                      isSelected
                        ? 'bg-indigo-50 text-indigo-900 border-indigo-300 font-semibold'
                        : 'bg-[#fafaf8] text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
                    )}
                  >
                    <span>{s === 'ALL' ? 'All Subjects' : s}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-indigo-700" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort Order */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#5f636e] mb-2.5">
              Sort By
            </label>
            <div className="space-y-1.5">
              {sortOptions.map((opt) => {
                const isSelected = sortBy === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onChangeSort(opt.id)}
                    className={cn(
                      'w-full px-3 py-2 rounded-md text-xs font-medium border text-left flex items-center justify-between transition-colors',
                      isSelected
                        ? 'bg-[#121316] text-white border-[#121316]'
                        : 'bg-[#fafaf8] text-[#5f636e] border-[#e8e8e2] hover:border-[#d4d4ca]'
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#e8e8e2] bg-[#fafaf8] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs text-[#5f636e] hover:text-[#121316] font-medium px-2 py-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#121316] text-white text-xs font-semibold hover:bg-[#25272c] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
