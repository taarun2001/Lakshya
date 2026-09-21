import React from 'react';
import { FileText, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Paper } from '../../data/types';
import { cn } from '../../utils/cn';

interface PaperCardProps {
  paper: Paper;
  className?: string;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper, className }) => {
  const isProcessed = paper.status === 'Processed';
  const isProcessing = paper.status === 'Processing';

  return (
    <div
      className={cn(
        'bg-white border border-[#e8e8e2] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs hover:border-[#d4d4ca] transition-colors',
        className
      )}
    >
      <div className="flex items-start sm:items-center gap-3.5">
        <div
          className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border',
            isProcessed ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 'bg-amber-50 border-amber-100 text-amber-700'
          )}
        >
          <FileText className="w-5 h-5" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-[#121316]">
              {paper.examName} {paper.year}
            </h4>
            <span className="text-xs text-[#5f636e] font-medium">• {paper.subject}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#8b8f9a] mt-1 font-mono">
            <span>{paper.questionCount} questions extracted</span>
            <span>•</span>
            <span>{paper.fileSize}</span>
            <span>•</span>
            <span>Uploaded {paper.uploadedAt}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f0f0ea]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] text-xs font-mono font-medium border uppercase tracking-wider',
            isProcessed && 'bg-emerald-50 text-emerald-800 border-emerald-200',
            isProcessing && 'bg-amber-50 text-amber-800 border-amber-200 animate-pulse',
            paper.status === 'Failed' && 'bg-rose-50 text-rose-800 border-rose-200'
          )}
        >
          {isProcessed && <CheckCircle2 className="w-3.5 h-3.5" />}
          {isProcessing && <Clock className="w-3.5 h-3.5" />}
          {paper.status === 'Failed' && <AlertCircle className="w-3.5 h-3.5" />}
          <span>{paper.status}</span>
        </span>
      </div>
    </div>
  );
};
