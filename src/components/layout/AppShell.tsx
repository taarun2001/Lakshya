import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileBottomNav } from './MobileBottomNav';
import { GlobalSearchModal } from '../modals/GlobalSearchModal';
import { apiService } from '../../services/api';

export const AppShell: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeExamShort, setActiveExamShort] = useState('KCET 2026');
  const location = useLocation();

  // Load active exam
  useEffect(() => {
    apiService.getActiveExam().then((exam) => {
      setActiveExamShort(exam.shortCode);
    });
  }, [location.pathname]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#fbfbfa]">
      {/* Desktop Sidebar */}
      <Sidebar
        onOpenSearch={() => setSearchOpen(true)}
        activeExamShort={activeExamShort}
      />

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-10">
        <Header
          onOpenSearch={() => setSearchOpen(true)}
          activeExamShort={activeExamShort}
        />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Global Search Modal / Command Palette */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
};
