import React from 'react';
import { SignalStrength } from '../../data/types';
import { cn } from '../../utils/cn';

interface SignalCardProps {
  label: string;
  strength: SignalStrength;
  description?: string;
  weightLabel?: string;
  className?: string;
}

export const SignalCard: React.FC<SignalCardProps> = ({
  label,
  strength,
  description,
  weightLabel,
  className
}) => {
  const strengthConfig = {
    High: {
      color: 'text-emerald-700 bg-emerald-50/80 border-emerald-200/80',
      bar: 'bg-emerald-600',
      width: 'w-full'
    },
    Medium: {
      color: 'text-amber-700 bg-amber-50/80 border-amber-200/80',
      bar: 'bg-amber-600',
      width: 'w-2/3'
    },
    Low: {
      color: 'text-slate-600 bg-slate-50 border-slate-200',
      bar: 'bg-slate-400',
      width: 'w-1/3'
    },
    Insufficient: {
      color: 'text-zinc-500 bg-zinc-50 border-dashed border-zinc-300',
      bar: 'bg-zinc-300',
      width: 'w-1/6'
    }
  }[strength];

  return (
    <div
      className={cn(
        'bg-white border border-[#e8e8e2] rounded-lg p-3.5 flex flex-col justify-between shadow-2xs',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs text-[#5f636e] font-medium">{label}</span>
          {weightLabel && (
            <span className="text-[10px] uppercase font-mono text-[#8b8f9a]">{weightLabel}</span>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-[#121316] font-mono">{strength}</span>
          <span
            className={cn(
              'text-[10px] px-1.5 py-0.5 rounded border font-mono uppercase font-semibold',
              strengthConfig.color
            )}
          >
            {strength}
          </span>
        </div>

        {/* Subtle mini progress indicator */}
        <div className="w-full h-1 bg-[#f0f0ea] rounded-full mt-2 overflow-hidden">
          <div className={cn('h-full rounded-full', strengthConfig.bar, strengthConfig.width)} />
        </div>
      </div>

      {description && (
        <p className="text-[11px] text-[#8b8f9a] mt-2 leading-relaxed border-t border-[#f5f5f0] pt-1.5">
          {description}
        </p>
      )}
    </div>
  );
};
