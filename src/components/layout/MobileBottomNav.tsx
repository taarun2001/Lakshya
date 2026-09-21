import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  MessageSquare,
  Bookmark,
  User
} from 'lucide-react';
import { cn } from '../../utils/cn';

export const MobileBottomNav: React.FC = () => {
  const navItems = [
    { to: '/dashboard', label: 'Home', icon: LayoutDashboard },
    { to: '/priorities', label: 'Priorities', icon: Layers },
    { to: '/ai-chat', label: 'AI', icon: MessageSquare },
    { to: '/saved', label: 'Saved', icon: Bookmark },
    { to: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e8e8e2] px-2 pb-[env(safe-area-inset-bottom)] select-none">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center w-full h-full min-w-[54px] min-h-[44px] transition-colors relative py-1',
                  isActive ? 'text-[#121316]' : 'text-[#8b8f9a] hover:text-[#5f636e]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={cn(
                      'p-1 rounded-full transition-transform',
                      isActive && 'bg-[#f4f4f0] text-indigo-600 scale-105'
                    )}
                  >
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span
                    className={cn(
                      'text-[10px] tracking-tight mt-0.5 font-medium',
                      isActive ? 'font-semibold text-[#121316]' : 'text-[#8b8f9a]'
                    )}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute top-1 w-1 h-1 rounded-full bg-indigo-600" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
