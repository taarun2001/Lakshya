import React from 'react';
import { cn } from '../../utils/cn';

interface AnnualDataPoint {
  year: number;
  questionCount: number;
}

interface TrendChartProps {
  data: AnnualDataPoint[];
  title?: string;
  height?: number;
  className?: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  data,
  title,
  height = 140,
  className
}) => {
  if (!data || data.length === 0) return null;

  const maxCount = Math.max(...data.map((d) => d.questionCount), 1);

  return (
    <div className={cn('w-full bg-white border border-[#e8e8e2] rounded-xl p-4', className)}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5f636e]">{title}</h4>
          <span className="text-[11px] text-[#8b8f9a] font-mono">2018–2025 Paper distribution</span>
        </div>
      )}

      {/* Bar Distribution */}
      <div className="flex items-end justify-between gap-2 pt-4" style={{ height: `${height}px` }}>
        {data.map((item) => {
          const heightPercent = Math.max(12, Math.round((item.questionCount / maxCount) * 100));
          const isLatest = item.year === 2025;

          return (
            <div key={item.year} className="flex-1 flex flex-col items-center h-full justify-end group">
              {/* Tooltip on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-[#121316] font-semibold mb-1">
                {item.questionCount}q
              </div>

              {/* Bar */}
              <div className="w-full max-w-[28px] bg-[#f0f0ea] rounded-t-sm flex items-end overflow-hidden h-full">
                <div
                  className={cn(
                    'w-full rounded-t-sm transition-all duration-300',
                    isLatest ? 'bg-indigo-600 group-hover:bg-indigo-700' : 'bg-[#121316] group-hover:bg-[#343741]'
                  )}
                  style={{ height: `${heightPercent}%` }}
                />
              </div>

              {/* Year label */}
              <span
                className={cn(
                  'text-[10px] font-mono mt-2',
                  isLatest ? 'font-bold text-indigo-700' : 'text-[#8b8f9a]'
                )}
              >
                '{item.year.toString().slice(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
