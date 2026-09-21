import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Compass, BookOpen } from 'lucide-react';
import { cn } from '../../utils/cn';

interface HeaderProps {
  onOpenSearch: () => void;
  activeExamShort: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, activeExamShort }) => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Study Overview';
    if (path.startsWith('/priorities')) return 'Study Priorities';
    if (path.startsWith('/questions')) return 'Question Intelligence';
    if (path.startsWith('/topics')) return 'Topic Directory';
    if (path.startsWith('/trends')) return 'Pattern Trends';
    if (path.startsWith('/papers')) return 'Exam Papers';
    if (path.startsWith('/saved')) return 'Saved & Studied';
    if (path.startsWith('/methodology')) return 'Signal Methodology';
    if (path.startsWith('/profile')) return 'Settings & Exam Target';
    return 'Lakshya';
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-[#e8e8e2] px-4 lg:px-8 py-3 select-none">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Mobile Left: Brand Wordmark */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#121316] flex items-center justify-center text-white">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
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
                <line x1="2" y1="12" x2="7" y2="12" />
                <line x1="17" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight text-[#121316]">
              Lakshya
            </span>
          </Link>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#f4f4f0] border border-[#e8e8e2] text-[#5f636e]">
            {activeExamShort}
          </span>
        </div>

        {/* Desktop Left: Current Route Context */}
        <div className="hidden lg:flex items-center gap-3">
          <h1 className="text-sm font-semibold text-[#121316]">{getPageTitle()}</h1>
          <span className="text-[#d0d0c8]">•</span>
          <span className="text-xs text-[#5f636e] font-mono">
            {activeExamShort} • Analysis updated today
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="lg:hidden p-2 rounded-lg text-[#5f636e] hover:text-[#121316] hover:bg-[#fafaf8] border border-[#e8e8e2]"
            aria-label="Open search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Desktop Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#e8e8e2] bg-[#fafaf8] hover:border-[#d4d4ca] text-xs text-[#5f636e] transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#8b8f9a]" />
            <span>Search</span>
            <kbd className="font-mono text-[10px] bg-white border border-[#e8e8e2] px-1 rounded text-[#8b8f9a]">
              ⌘K
            </kbd>
          </button>

          {/* Link to Methodology */}
          <Link
            to="/methodology"
            className="p-2 rounded-lg text-[#5f636e] hover:text-[#121316] hover:bg-[#fafaf8] border border-transparent hover:border-[#e8e8e2] transition-colors"
            title="How Lakshya prioritizes"
          >
            <BookOpen className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
