import React from 'react';
import { HistoricalAppearance } from '../../data/types';
import { Check, Dot, Minus, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TimelineProps {
  timeline: HistoricalAppearance[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ timeline, className }) => {
  return (
    <div className={cn('w-full', className)}>
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#5f636e] mb-4 pb-2 border-b border-[#f0f0ea]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0" />
          <span className="font-medium text-[#121316]">Exact question</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <span className="font-medium text-[#121316]">Similar concept/variation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d0d0c8] shrink-0" />
          <span className="text-[#8b8f9a]">No appearance</span>
        </div>
      </div>

      {/* Horizontal scroll on mobile / responsive grid on desktop */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2">
        <div className="flex items-center justify-between min-w-[540px] relative">
          {/* Background track line */}
          <div className="absolute left-6 right-6 top-[22px] h-[2px] bg-[#e8e8e2] z-0" />

          {timeline.map((item) => {
            const isExact = item.type === 'EXACT';
            const isSimilar = item.type === 'SIMILAR';
            const isNone = item.type === 'NONE';

            return (
              <div
                key={item.year}
                className="relative z-10 flex flex-col items-center group cursor-pointer text-center"
              >
                {/* Year Label */}
                <span className="font-mono text-xs font-semibold text-[#121316] mb-2">
                  {item.year}
                </span>

                {/* Node Icon */}
                <div
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 border-2',
                    isExact && 'bg-indigo-600 border-indigo-200 text-white shadow-xs group-hover:scale-110',
                    isSimilar && 'bg-amber-500 border-amber-200 text-white group-hover:scale-110',
                    isNone && 'bg-white border-[#d8d8ce] text-[#8b8f9a] group-hover:border-[#b0b0a4]'
                  )}
                >
                  {isExact && <Check className="w-4 h-4 stroke-[2.5]" />}
                  {isSimilar && <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />}
                  {isNone && <Minus className="w-3.5 h-3.5 stroke-[2]" />}
                </div>

                {/* Status Text & Paper Reference */}
                <div className="mt-2 min-h-[36px]">
                  <span
                    className={cn(
                      'text-[11px] font-medium block leading-tight',
                      isExact && 'text-indigo-900 font-semibold',
                      isSimilar && 'text-amber-800 font-semibold',
                      isNone && 'text-[#8b8f9a]'
                    )}
                  >
                    {isExact ? 'Appeared' : isSimilar ? 'Similar' : '—'}
                  </span>
                  {item.questionRef && (
                    <span className="text-[10px] font-mono text-[#8b8f9a] block">
                      {item.questionRef}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
