import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, ArrowRight } from 'lucide-react';
import { TopicMetric } from '../../data/types';
import { PriorityBadge } from '../common/PriorityBadge';
import { cn } from '../../utils/cn';

interface TopicCardProps {
  topic: TopicMetric;
  className?: string;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, className }) => {
  const trendConfig = {
    INCREASING: {
      icon: TrendingUp,
      label: 'Increasing',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    STABLE: {
      icon: Minus,
      label: 'Stable',
      color: 'text-slate-700 bg-slate-50 border-slate-200'
    },
    DECREASING: {
      icon: TrendingDown,
      label: 'Decreasing',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    }
  }[topic.trend];

  const TrendIcon = trendConfig.icon;

  return (
    <Link
      to={`/topics/${topic.id}`}
      className={cn(
        'group bg-white border border-[#e8e8e2] rounded-xl p-5 hover:border-[#d4d4ca] transition-all duration-150 shadow-2xs block',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-[11px] font-medium text-[#5f636e] uppercase tracking-wider block mb-1">
            {topic.subject} • {topic.chapter}
          </span>
          <h3 className="text-base font-semibold text-[#121316] group-hover:text-indigo-600 transition-colors">
            {topic.name}
          </h3>
        </div>
        <PriorityBadge priority={topic.priority} size="sm" />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#f0f0eb] mb-3 text-xs bg-[#fafaf8]/70 px-3 rounded-lg">
        <div>
          <span className="text-[#8b8f9a] block text-[11px]">Historical</span>
          <span className="font-mono font-bold text-[#121316] text-[13px]">
            {topic.historicalQuestionsCount} q
          </span>
        </div>
        <div>
          <span className="text-[#8b8f9a] block text-[11px]">Recent (3y)</span>
          <span className="font-mono font-semibold text-[#121316] text-[13px]">
            {topic.recentQuestionsCount} q
          </span>
        </div>
        <div>
          <span className="text-[#8b8f9a] block text-[11px]">Last active</span>
          <span className="font-mono font-semibold text-[#121316] text-[13px]">
            {topic.lastActiveYear}
          </span>
        </div>
      </div>

      {/* Footer: Trend badge & View breakdown */}
      <div className="flex items-center justify-between pt-1">
        <span
          className={cn(
            'inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border',
            trendConfig.color
          )}
        >
          <TrendIcon className="w-3 h-3 stroke-[2.2]" />
          <span>{trendConfig.label}</span>
          {topic.trendPercentage !== 0 && (
            <span className="font-mono">
              {topic.trendPercentage > 0 ? `+${topic.trendPercentage}%` : `${topic.trendPercentage}%`}
            </span>
          )}
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#121316] group-hover:text-indigo-600">
          <span>Explore topic</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};
