import React from 'react';
import { cn } from '../../utils/cn';

interface ProgressBarProps {
  value: number; // e.g. 4
  max: number; // e.g. 12
  label?: string;
  showNumbers?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  showNumbers = true,
  className
}) => {
  const percentage = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

  return (
    <div className={cn('w-full', className)}>
      {(label || showNumbers) && (
        <div className="flex items-center justify-between text-xs mb-2">
          {label && <span className="font-medium text-[#121316]">{label}</span>}
          {showNumbers && (
            <span className="font-mono text-[#5f636e] tabular-nums">
              <span className="text-[#121316] font-semibold">{value}</span>
              <span className="text-[#8b8f9a]"> / {max}</span>
              <span className="ml-1.5 text-[11px] text-[#8b8f9a]">({percentage}%)</span>
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-[#f0f0ea] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4338ca] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
