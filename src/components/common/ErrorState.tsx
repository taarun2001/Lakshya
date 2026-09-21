import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ErrorStateProps {
  type?: 'upload_failed' | 'invalid_pdf' | 'analysis_unavailable' | 'no_questions' | 'insufficient_data';
  title?: string;
  description?: string;
  retryAction?: () => void;
  actionText?: string;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  type = 'analysis_unavailable',
  title,
  description,
  retryAction,
  actionText = 'Retry analysis',
  className
}) => {
  const defaults = {
    upload_failed: {
      title: 'Paper upload failed',
      desc: 'Network interruption or unreadable file format encountered. The question parser could not process the stream.'
    },
    invalid_pdf: {
      title: 'Invalid PDF format',
      desc: 'The document appears to be encrypted, scanned as low-resolution images, or corrupted. Please provide clean text-searchable PDFs.'
    },
    analysis_unavailable: {
      title: 'Analysis temporarily unavailable',
      desc: 'Unable to calibrate historical frequency vectors for the requested filter selection.'
    },
    no_questions: {
      title: 'No questions detected',
      desc: 'No matching examination questions met the selected filter threshold.'
    },
    insufficient_data: {
      title: 'Insufficient historical data',
      desc: 'At least 3 consecutive examination papers are required to compute statistical recurrence signals.'
    }
  }[type];

  return (
    <div
      className={cn(
        'p-5 rounded-lg border border-rose-200 bg-rose-50/40 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-md bg-rose-100/80 text-rose-700 shrink-0 mt-0.5">
          <AlertCircle className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-rose-900">{title || defaults.title}</h4>
          <p className="text-xs text-rose-700/90 mt-0.5 max-w-md leading-relaxed">
            {description || defaults.desc}
          </p>
        </div>
      </div>
      {retryAction && (
        <button
          onClick={retryAction}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-rose-900 border border-rose-300 rounded-md hover:bg-rose-50 transition-colors shrink-0 self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};
