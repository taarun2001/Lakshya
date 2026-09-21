import React, { useState, useEffect } from 'react';
import { Check, Loader2, Circle } from 'lucide-react';
import { PIPELINE_STAGES } from '../../data/analysis';
import { cn } from '../../utils/cn';

interface PipelineLoadingModalProps {
  isOpen: boolean;
  onComplete: () => void;
  examName?: string;
}

export const PipelineLoadingModal: React.FC<PipelineLoadingModalProps> = ({
  isOpen,
  onComplete,
  examName = 'KCET 2026'
}) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStageIndex(0);
      return;
    }

    // Step through each stage sequentially to simulate the real analytical pipeline
    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < PIPELINE_STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 550);

    return () => clearInterval(interval);
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round(((currentStageIndex + 1) / PIPELINE_STAGES.length) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl border border-[#e8e8e2] shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#121316] text-white mb-3 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="2" x2="12" y2="7" />
              <line x1="12" y1="17" x2="12" y2="22" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#121316] tracking-tight">
            Building your study map
          </h2>
          <p className="text-xs text-[#5f636e] mt-1 font-mono">
            Calibrating historical recurrence signals for {examName}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-[11px] font-mono text-[#8b8f9a] mb-1.5">
            <span>Pipeline progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#f0f0ea] rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Analytical Stages List */}
        <div className="space-y-3 bg-[#fafaf8] border border-[#e8e8e2] rounded-xl p-4">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isFinished = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            const isPending = idx > currentStageIndex;

            return (
              <div
                key={stage.id}
                className={cn(
                  'flex items-center gap-3 text-xs transition-opacity duration-200',
                  isFinished && 'text-[#121316]',
                  isCurrent && 'text-indigo-700 font-semibold',
                  isPending && 'text-[#8b8f9a] opacity-60'
                )}
              >
                {/* Stage Indicator Icon */}
                <div className="shrink-0 flex items-center justify-center w-5 h-5">
                  {isFinished && (
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[2.8]" />
                    </div>
                  )}
                  {isCurrent && (
                    <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Loader2 className="w-3 h-3 animate-spin stroke-[2.5]" />
                    </div>
                  )}
                  {isPending && (
                    <Circle className="w-3.5 h-3.5 text-[#d0d0c8] stroke-[1.8]" />
                  )}
                </div>

                {/* Stage Label */}
                <span className="flex-1 font-mono tracking-tight">{stage.label}</span>

                {/* Status tag */}
                {isFinished && (
                  <span className="text-[10px] font-mono uppercase text-emerald-700 font-medium">
                    Done
                  </span>
                )}
                {isCurrent && (
                  <span className="text-[10px] font-mono uppercase text-indigo-700 font-medium animate-pulse">
                    Analyzing
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-[#8b8f9a]">
            Synthesizing 8 examination cycles • ~71% historical consistency
          </p>
        </div>
      </div>
    </div>
  );
};
