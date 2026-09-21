import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  Compass,
  TrendingUp,
  FileText,
  Bookmark,
  BookOpen,
  User,
  Search,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  onOpenSearch: () => void;
  activeExamShort: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenSearch, activeExamShort }) => {
  const mainNavItems = [
    { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/priorities', label: 'Priorities', icon: Layers, badge: '12 High' },
    { to: '/topics', label: 'Topics', icon: Compass },
    { to: '/trends', label: 'Trends', icon: TrendingUp },
    { to: '/papers', label: 'Papers', icon: FileText },
    { to: '/saved', label: 'Saved', icon: Bookmark },
    { to: '/ai-chat', label: 'AI Assistant', icon: MessageSquare },
  ];

  const secondaryNavItems = [
    { to: '/methodology', label: 'Methodology', icon: BookOpen },
    { to: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-[#e8e8e2] bg-white h-screen sticky top-0 shrink-0 z-30 select-none">
      {/* Brand & Target Logo */}
      <div className="p-5 border-b border-[#f0f0ea]">
        <Link to="/dashboard" className="flex items-center gap-2.5 group">
          {/* Target geometric direction logo */}
          <div className="w-8 h-8 rounded-lg bg-[#121316] flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-white"
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
          <div>
            <span className="text-xl font-bold tracking-tight text-[#121316] font-sans">
              Lakshya
            </span>
            <span className="block text-[10px] uppercase font-mono tracking-wider text-[#8b8f9a]">
              Exam Intelligence
            </span>
          </div>
        </Link>

        {/* Active Exam Selector Pill */}
        <Link
          to="/profile"
          className="mt-4 flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#fafaf8] border border-[#e8e8e2] hover:border-[#d4d4ca] text-xs transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-[#121316]">{activeExamShort}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[#8b8f9a]" />
        </Link>
      </div>

      {/* Global Search Shortcut Button */}
      <div className="p-3">
        <button
          onClick={onOpenSearch}
          type="button"
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] text-xs text-[#5f636e] hover:border-[#d4d4ca] hover:text-[#121316] transition-colors shadow-2xs group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#8b8f9a] group-hover:text-[#121316]" />
            <span>Search questions, topics...</span>
          </div>
          <kbd className="font-mono text-[10px] bg-white border border-[#e8e8e2] px-1.5 py-0.5 rounded text-[#8b8f9a]">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Primary Navigation Links */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        <div className="px-2 pb-1.5 text-[10px] font-semibold font-mono uppercase tracking-wider text-[#8b8f9a]">
          Analysis
        </div>
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-[#121316] text-white'
                    : 'text-[#5f636e] hover:text-[#121316] hover:bg-[#fafaf8]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-2.5">
                    <Icon className={cn('w-4 h-4', isActive ? 'text-white' : 'text-[#8b8f9a]')} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        'text-[10px] font-mono px-1.5 py-0.5 rounded',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}

        <div className="px-2 pt-5 pb-1.5 text-[10px] font-semibold font-mono uppercase tracking-wider text-[#8b8f9a]">
          System
        </div>
        {secondaryNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-[#121316] text-white'
                    : 'text-[#5f636e] hover:text-[#121316] hover:bg-[#fafaf8]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn('w-4 h-4', isActive ? 'text-white' : 'text-[#8b8f9a]')} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer: Pattern consistency note */}
      <div className="p-4 border-t border-[#f0f0ea] bg-[#fafaf8]">
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span className="text-[#5f636e] font-medium">Historical Pattern</span>
          <span className="font-mono font-semibold text-[#121316]">~71% match</span>
        </div>
        <div className="w-full h-1.5 bg-[#e8e8e2] rounded-full overflow-hidden">
          <div className="w-[71%] h-full bg-indigo-600 rounded-full" />
        </div>
        <p className="text-[10px] text-[#8b8f9a] mt-1.5 leading-tight">
          Past 8-year paper recurrence. Not a guarantee of exam appearances.
        </p>
      </div>
    </aside>
  );
};
