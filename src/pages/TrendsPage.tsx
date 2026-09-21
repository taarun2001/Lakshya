import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus, ArrowRight, Activity, Calendar } from 'lucide-react';
import { apiService } from '../services/api';
import { TopicMetric } from '../data/types';
import { Link } from 'react-router-dom';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { TrendChart } from '../components/visuals/TrendChart';
import { cn } from '../utils/cn';

export const TrendsPage: React.FC = () => {
  const [topics, setTopics] = useState<TopicMetric[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<TopicMetric | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiService.getTopics().then((data) => {
      setTopics(data);
      if (data.length > 0) setSelectedTopic(data[0]);
      setIsLoading(false);
    });
  }, []);

  const increasingTopics = topics.filter((t) => t.trend === 'INCREASING');
  const stableTopics = topics.filter((t) => t.trend === 'STABLE');
  const decreasingTopics = topics.filter((t) => t.trend === 'DECREASING');

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-5xl mx-auto">
      {/* Header */}
      <div className="pb-2 border-b border-[#e8e8e2]">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="w-4 h-4 text-indigo-700" />
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold">
            Pattern Shifts (2018–2025)
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121316]">
          What's changing?
        </h1>
        <p className="text-xs text-[#5f636e] mt-1">
          Tracking which topics examination boards are accelerating, maintaining, or phasing out.
        </p>
      </div>

      {/* SECTION 22: RECENT TOPIC ACTIVITY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Increasing Topics */}
        <div className="bg-white border border-[#e8e8e2] rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#f0f0ea]">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-emerald-50 text-emerald-700">
                <TrendingUp className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                Increasing Frequency
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-700 font-semibold">
              {increasingTopics.length}
            </span>
          </div>

          <div className="space-y-2">
            {increasingTopics.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelectedTopic(t)}
                className={cn(
                  'p-3 rounded-xl border text-xs cursor-pointer transition-colors flex items-center justify-between',
                  selectedTopic?.id === t.id
                    ? 'border-indigo-600 bg-indigo-50/40'
                    : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-[#fafaf8]'
                )}
              >
                <div>
                  <span className="font-semibold text-[#121316] block">{t.name}</span>
                  <span className="text-[11px] text-[#8b8f9a] font-mono">{t.subject}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-700 block">
                    +{t.trendPercentage}%
                  </span>
                  <span className="text-[10px] text-[#8b8f9a]">vs older cycles</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stable Topics */}
        <div className="bg-white border border-[#e8e8e2] rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#f0f0ea]">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-slate-100 text-slate-700">
                <Minus className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                Stable Frequency
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-700 font-semibold">
              {stableTopics.length}
            </span>
          </div>

          <div className="space-y-2">
            {stableTopics.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelectedTopic(t)}
                className={cn(
                  'p-3 rounded-xl border text-xs cursor-pointer transition-colors flex items-center justify-between',
                  selectedTopic?.id === t.id
                    ? 'border-indigo-600 bg-indigo-50/40'
                    : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-[#fafaf8]'
                )}
              >
                <div>
                  <span className="font-semibold text-[#121316] block">{t.name}</span>
                  <span className="text-[11px] text-[#8b8f9a] font-mono">{t.subject}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold text-slate-700 block">
                    Constant
                  </span>
                  <span className="text-[10px] text-[#8b8f9a]">Periodic rhythm</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decreasing Topics */}
        <div className="bg-white border border-[#e8e8e2] rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#f0f0ea]">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-rose-50 text-rose-700">
                <TrendingDown className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-900 font-mono">
                Decreasing Frequency
              </h2>
            </div>
            <span className="text-xs font-mono text-rose-700 font-semibold">
              {decreasingTopics.length}
            </span>
          </div>

          <div className="space-y-2">
            {decreasingTopics.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelectedTopic(t)}
                className={cn(
                  'p-3 rounded-xl border text-xs cursor-pointer transition-colors flex items-center justify-between',
                  selectedTopic?.id === t.id
                    ? 'border-indigo-600 bg-indigo-50/40'
                    : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-[#fafaf8]'
                )}
              >
                <div>
                  <span className="font-semibold text-[#121316] block">{t.name}</span>
                  <span className="text-[11px] text-[#8b8f9a] font-mono">{t.subject}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-rose-700 block">
                    {t.trendPercentage}%
                  </span>
                  <span className="text-[10px] text-[#8b8f9a]">declining share</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Topic Visual Comparison */}
      {selectedTopic && (
        <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#121316]">
                  {selectedTopic.name} Trend Analysis
                </h3>
                <PriorityBadge priority={selectedTopic.priority} size="sm" />
              </div>
              <p className="text-xs text-[#5f636e] mt-0.5">
                Annual question count across 8 examination cycles (2018–2025).
              </p>
            </div>
            <Link
              to={`/topics/${selectedTopic.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <span>Topic full breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <TrendChart data={selectedTopic.annualActivity} height={160} />
        </div>
      )}
    </div>
  );
};
