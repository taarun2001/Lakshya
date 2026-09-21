import React from 'react';
import { cn } from '../../utils/cn';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction,
  className
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 border border-dashed border-[#e2e2da] rounded-xl bg-[#fafaf8]',
        className
      )}
    >
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-white border border-[#e8e8e2] flex items-center justify-center text-[#5f636e] mb-3 shadow-2xs">
          {icon}
        </div>
      )}
      <h3 className="text-sm font-semibold text-[#121316] mb-1">{title}</h3>
      <p className="text-xs text-[#5f636e] max-w-sm mb-4 leading-relaxed">{description}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center justify-center text-xs font-medium px-3.5 py-2 rounded-md bg-[#121316] text-white hover:bg-[#25272c] active:bg-black transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
