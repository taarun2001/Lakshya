import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  FileText,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Layers,
  AlertCircle,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { apiService } from '../services/api';
import { Question, StudyProgress, Exam } from '../data/types';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { QuestionCard } from '../components/cards/QuestionCard';
import { MetricCard } from '../components/common/MetricCard';
import { ProgressBar } from '../components/common/ProgressBar';
import { aiService } from '../services/aiService';
import { getStudentContext } from '../data/studentContext';
import { buildPrioritySummaryForPlan, buildProgressSummary } from '../utils/aiDataBuilder';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [priorityCounts, setPriorityCounts] = useState({ high: 12, medium: 24, low: 38, insufficient: 6 });
  const [startHereQuestions, setStartHereQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState<StudyProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // AI Study Plan state
  const [studyPlan, setStudyPlan] = useState<string | null>(() => {
    try { return localStorage.getItem('laksha_last_study_plan'); } catch { return null; }
  });
  const [isPlanLoading, setIsPlanLoading] = useState(false);
  const [planError, setPlanError] = useState<string | null>(null);

  const loadDashboardData = async () => {
    setIsLoading(true);
    const [exam, counts, allQuestions, studyProg] = await Promise.all([
      apiService.getActiveExam(),
      apiService.getPriorityCounts(),
      apiService.getPriorities({ priority: 'HIGH' }),
      apiService.getStudyProgress()
    ]);
    setActiveExam(exam);
    setPriorityCounts(counts);
    // Top 5 highest priority questions
    setStartHereQuestions(allQuestions.slice(0, 5));
    setProgress(studyProg);
    setIsLoading(false);
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleToggleSave = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleSavedQuestion(id);
    loadDashboardData();
  };

  const handleToggleStudied = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await apiService.toggleStudiedQuestion(id);
    loadDashboardData();
  };

  const handleGenerateStudyPlan = async () => {
    setIsPlanLoading(true);
    setPlanError(null);
    try {
      const [topics, allQuestions] = await Promise.all([
        apiService.getTopics(),
        apiService.getPriorities(),
      ]);
      const studentCtx = getStudentContext();
      const prioritySummary = buildPrioritySummaryForPlan(allQuestions, topics);
      const progressSummary = progress ? buildProgressSummary(progress) : '';
      const plan = await aiService.generateStudyPlan({
        studentContext: { ...studentCtx, exam: activeExam?.name ?? studentCtx.exam },
        prioritySummary,
        progressSummary,
      });
      setStudyPlan(plan);
      try { localStorage.setItem('laksha_last_study_plan', plan); } catch { /* ignore */ }
    } catch (err) {
      setPlanError(err instanceof Error ? err.message : 'Failed to generate study plan. Please try again.');
    } finally {
      setIsPlanLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Greeting & Active Exam Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e8e8e2]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[#5f636e] uppercase tracking-wider">
              Good morning
            </span>
            <span className="text-[#8b8f9a]">•</span>
            <span className="text-xs font-mono text-indigo-700 font-medium">
              Analysis updated today
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121316]">
            {activeExam ? activeExam.shortCode : 'KCET 2026'}
          </h1>
          <p className="text-xs text-[#5f636e] mt-1">
            Historical signal synthesis across 8 examination cycles (~71% pattern consistency).
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/papers"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#e8e8e2] bg-white hover:bg-[#fafaf8] text-xs font-medium text-[#121316] shadow-2xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#5f636e]" />
            <span>Manage Papers</span>
          </Link>
          <Link
            to="/priorities"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121316] hover:bg-[#272a31] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <span>All Priorities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* SECTION 14: YOUR STUDY PRIORITIES COUNTER GRID */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold uppercase font-mono tracking-wider text-[#5f636e]">
            Your study priorities
          </h2>
          <span className="text-xs text-[#8b8f9a] font-mono">
            Click to filter by priority tier
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* HIGH PRIORITY */}
          <div
            onClick={() => navigate('/priorities?tier=HIGH')}
            className="p-4 rounded-xl border border-rose-200/90 bg-rose-50/50 hover:bg-rose-50/90 cursor-pointer transition-all duration-150 shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-rose-800 uppercase tracking-wider">
                HIGH PRIORITY
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-600" />
            </div>
            <div className="text-3xl font-bold font-mono text-rose-950 tabular-nums">
              {priorityCounts.high}
            </div>
            <div className="flex items-center justify-between text-[11px] text-rose-700/90 mt-2 pt-2 border-t border-rose-200/60">
              <span>Start revision here</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* MEDIUM PRIORITY */}
          <div
            onClick={() => navigate('/priorities?tier=MEDIUM')}
            className="p-4 rounded-xl border border-amber-200/90 bg-amber-50/50 hover:bg-amber-50/90 cursor-pointer transition-all duration-150 shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wider">
                MEDIUM PRIORITY
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-600" />
            </div>
            <div className="text-3xl font-bold font-mono text-amber-950 tabular-nums">
              {priorityCounts.medium}
            </div>
            <div className="flex items-center justify-between text-[11px] text-amber-700/90 mt-2 pt-2 border-t border-amber-200/60">
              <span>Secondary coverage</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* LOW PRIORITY */}
          <div
            onClick={() => navigate('/priorities?tier=LOW')}
            className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-100/70 cursor-pointer transition-all duration-150 shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                LOW PRIORITY
              </span>
              <span className="w-2 h-2 rounded-full bg-slate-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-slate-900 tabular-nums">
              {priorityCounts.low}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600 mt-2 pt-2 border-t border-slate-200">
              <span>Long-tail recurrence</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* INSUFFICIENT EVIDENCE */}
          <div
            onClick={() => navigate('/priorities?tier=INSUFFICIENT_EVIDENCE')}
            className="p-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/60 hover:bg-zinc-100/70 cursor-pointer transition-all duration-150 shadow-2xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wider">
                INSUFFICIENT EVIDENCE
              </span>
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-zinc-800 tabular-nums">
              {priorityCounts.insufficient}
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2 pt-2 border-t border-zinc-200">
              <span>Sparse historical data</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 24: STUDY PROGRESS (ANALYTICAL TRACKING, NO GAMIFICATION/XP) */}
      {progress && (
        <div className="bg-white border border-[#e8e8e2] rounded-xl p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-sm font-bold text-[#121316]">Your focus</h3>
              <p className="text-xs text-[#5f636e] mt-0.5">
                {progress.totalPriorityQuestions} high-priority questions • {progress.studiedCount} studied • {progress.remainingCount} remaining
              </p>
            </div>
            <div className="text-xs font-mono text-[#5f636e] bg-[#fafaf8] border border-[#e8e8e2] px-3 py-1 rounded-md self-start sm:self-auto">
              This week: <strong className="text-[#121316]">{progress.weeklyStudiedCount}</strong> studied • <strong className="text-[#121316]">{progress.weeklyTopicsCovered}</strong> topics covered
            </div>
          </div>

          <ProgressBar
            value={progress.studiedCount}
            max={progress.totalPriorityQuestions}
            showNumbers={false}
          />
        </div>
      )}

      {/* AI STUDY PLAN CARD */}
      <div className="bg-white border border-[#e8e8e2] rounded-xl p-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#121316]">AI Study Plan</h3>
              <p className="text-xs text-[#5f636e] mt-0.5">Personalized daily schedule based on Laksha analysis</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleGenerateStudyPlan}
              disabled={isPlanLoading}
              id="generate-study-plan-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {isPlanLoading ? (
                <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Generating...</span></>
              ) : (
                <><Sparkles className="w-3.5 h-3.5" /><span>{studyPlan ? 'Regenerate Plan' : 'Generate Today\'s Plan'}</span></>
              )}
            </button>
            <Link
              to="/ai-chat"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#e8e8e2] hover:bg-[#fafaf8] text-xs font-medium text-[#5f636e] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open Chat</span>
            </Link>
          </div>
        </div>
        {planError && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 mb-3">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{planError}</span>
          </div>
        )}
        {isPlanLoading && (
          <div className="py-6 flex flex-col items-center gap-3">
            <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
            <span className="text-xs font-mono text-[#5f636e]">Building your personalized study plan...</span>
          </div>
        )}
        {studyPlan && !isPlanLoading && (
          <div className="text-xs text-[#121316] leading-relaxed whitespace-pre-wrap bg-[#fafaf8] border border-[#e8e8e2] rounded-xl p-4 font-mono max-h-64 overflow-y-auto">
            {studyPlan}
          </div>
        )}
        {!studyPlan && !isPlanLoading && (
          <div className="py-4 text-center">
            <p className="text-xs text-[#8b8f9a]">Generate a personalized study plan using your Laksha analysis data and student profile.</p>
            <p className="text-[11px] text-[#8b8f9a] mt-1 font-mono">Set your exam date and study hours in <Link to="/profile" className="text-indigo-600 underline">Profile</Link> for best results.</p>
          </div>
        )}
      </div>

      {/* SECTION 14 & 15: START HERE — TOP 5 HIGHEST-PRIORITY QUESTIONS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-[#121316]">Start here</h2>
            <p className="text-xs text-[#5f636e]">
              Top 5 highest-priority questions identified by multi-signal historical analysis.
            </p>
          </div>
          <Link
            to="/priorities"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
          >
            <span>View all questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {startHereQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onToggleSave={handleToggleSave}
              onToggleStudied={handleToggleStudied}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
