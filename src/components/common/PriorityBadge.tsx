import React from 'react';
import { PriorityLevel } from '../../data/types';
import { cn } from '../../utils/cn';

interface PriorityBadgeProps {
  priority: PriorityLevel;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  size = 'md',
  showLabel = true,
  className
}) => {
  const config = {
    HIGH: {
      text: showLabel ? 'HIGH PRIORITY' : 'HIGH',
      classes: 'bg-rose-50 text-rose-800 border-rose-200/90 hover:bg-rose-100/60',
      dot: 'bg-rose-600'
    },
    MEDIUM: {
      text: showLabel ? 'MEDIUM PRIORITY' : 'MEDIUM',
      classes: 'bg-amber-50 text-amber-800 border-amber-200/90 hover:bg-amber-100/60',
      dot: 'bg-amber-600'
    },
    LOW: {
      text: showLabel ? 'LOW PRIORITY' : 'LOW',
      classes: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100/70',
      dot: 'bg-slate-400'
    },
    INSUFFICIENT_EVIDENCE: {
      text: showLabel ? 'INSUFFICIENT EVIDENCE' : 'LIMITED DATA',
      classes: 'bg-zinc-50 text-zinc-600 border-dashed border-zinc-300 hover:bg-zinc-100/60',
      dot: 'bg-zinc-400'
    }
  }[priority];

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 tracking-wider font-semibold',
    md: 'text-[11px] px-2.5 py-1 tracking-wide font-medium',
    lg: 'text-xs px-3 py-1.5 tracking-wide font-medium'
  }[size];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[5px] border select-none transition-colors uppercase font-mono',
        config.classes,
        sizeClasses,
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', config.dot)} />
      <span>{config.text}</span>
    </span>
  );
};
