import React from 'react';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtext,
  badge,
  icon,
  onClick,
  className
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white border border-[#e8e8e2] rounded-lg p-4 transition-all duration-150',
        onClick && 'cursor-pointer hover:border-[#d2d2c8] hover:shadow-xs active:bg-[#fbfbfa]',
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-[#5f636e]">{label}</span>
        <div className="flex items-center gap-1.5">
          {badge}
          {icon && <div className="text-[#8b8f9a]">{icon}</div>}
        </div>
      </div>
      <div className="text-2xl font-bold tracking-tight text-[#121316] font-mono tabular-nums">
        {value}
      </div>
      {subtext && (
        <div className="text-[12px] text-[#8b8f9a] mt-1 font-normal leading-relaxed">
          {subtext}
        </div>
      )}
    </div>
  );
};
