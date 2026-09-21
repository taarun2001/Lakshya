import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { PrioritiesPage } from './pages/PrioritiesPage';
import { QuestionDetailPage } from './pages/QuestionDetailPage';
import { TopicsPage } from './pages/TopicsPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { TrendsPage } from './pages/TrendsPage';
import { PapersPage } from './pages/PapersPage';
import { SavedPage } from './pages/SavedPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ProfilePage } from './pages/ProfilePage';
import { AIChatPage } from './pages/AIChatPage';
import { AppShell } from './components/layout/AppShell';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing & Onboarding */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Authenticated Application Shell */}
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/priorities" element={<PrioritiesPage />} />
          <Route path="/questions/:id" element={<QuestionDetailPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:id" element={<TopicDetailPage />} />
          <Route path="/trends" element={<TrendsPage />} />
          <Route path="/papers" element={<PapersPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ai-chat" element={<AIChatPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
