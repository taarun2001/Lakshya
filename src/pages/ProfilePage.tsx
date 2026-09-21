import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Check, RotateCcw, ShieldCheck, Database, Layers, CheckCircle2 } from 'lucide-react';
import { apiService } from '../services/api';
import { Exam, StudyProgress } from '../data/types';
import { MOCK_EXAMS } from '../data/exams';
import { getStudentContext, saveStudentContext } from '../data/studentContext';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [progress, setProgress] = useState<StudyProgress | null>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  // Student Context / AI settings
  const [examDate, setExamDate] = useState<string>('');
  const [dailyHours, setDailyHours] = useState<number>(3);
  const [strongTopics, setStrongTopics] = useState<string>('');
  const [weakTopics, setWeakTopics] = useState<string>('');
  const [contextSaved, setContextSaved] = useState(false);

  useEffect(() => {
    Promise.all([
      apiService.getActiveExam(),
      apiService.getStudyProgress()
    ]).then(([ex, pr]) => {
      setActiveExam(ex);
      setProgress(pr);
    });

    const ctx = getStudentContext();
    if (ctx.examDate) setExamDate(ctx.examDate);
    if (ctx.dailyStudyHours) setDailyHours(ctx.dailyStudyHours);
    if (ctx.strongTopics) setStrongTopics(ctx.strongTopics.join(', '));
    if (ctx.weakTopics) setWeakTopics(ctx.weakTopics.join(', '));
  }, []);

  const handleSaveContext = () => {
    saveStudentContext({
      examDate: examDate || null,
      dailyStudyHours: Number(dailyHours) || 3,
      strongTopics: strongTopics.split(',').map((s) => s.trim()).filter(Boolean),
      weakTopics: weakTopics.split(',').map((s) => s.trim()).filter(Boolean),
    });
    setContextSaved(true);
    setTimeout(() => setContextSaved(false), 2500);
  };

  const handleSelectExam = async (examId: string) => {
    await apiService.setActiveExam(examId);
    const updated = await apiService.getActiveExam();
    setActiveExam(updated);
  };

  const handleResetData = async () => {
    setIsResetting(true);
    await apiService.resetMockData();
    setIsResetting(false);
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-3xl mx-auto">
      {/* Header */}
      <div className="pb-2 border-b border-[#e8e8e2]">
        <h1 className="text-2xl font-bold tracking-tight text-[#121316]">
          Exam Target & Settings
        </h1>
        <p className="text-xs text-[#5f636e] mt-1">
          Manage your preparation target, active subject blueprint, and study analytics.
        </p>
      </div>

      {/* Target Examination Selection */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-[#121316]">Active Target Examination</h2>
          <p className="text-xs text-[#5f636e] mt-0.5">
            Switching the target updates all priority weights and paper collections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MOCK_EXAMS.map((exam) => {
            const isSelected = activeExam?.id === exam.id;
            return (
              <div
                key={exam.id}
                onClick={() => handleSelectExam(exam.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                    : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#121316]">{exam.shortCode}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#fafaf8] border border-[#e8e8e2] text-[#5f636e]">
                      ~{exam.patternConfidence}% match
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5f636e] mt-1 line-clamp-2 leading-relaxed">
                    {exam.description}
                  </p>
                  <span className="text-[10px] font-mono text-[#8b8f9a] mt-2 block">
                    {exam.availablePapersCount} papers archived
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-[#d0d0c8] bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress & Persistence Overview */}
      {progress && (
        <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-[#121316]">Study Snapshot</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-[#fafaf8] border border-[#e8e8e2]">
              <span className="text-[#8b8f9a] block text-[10px]">Priority Set</span>
              <strong className="text-base text-[#121316] mt-0.5 block">
                {progress.totalPriorityQuestions} questions
              </strong>
            </div>

            <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200">
              <span className="text-emerald-800 block text-[10px]">Studied</span>
              <strong className="text-base text-emerald-950 mt-0.5 block">
                {progress.studiedCount} completed
              </strong>
            </div>

            <div className="p-3 rounded-lg bg-[#fafaf8] border border-[#e8e8e2]">
              <span className="text-[#8b8f9a] block text-[10px]">Weekly Velocity</span>
              <strong className="text-base text-[#121316] mt-0.5 block">
                {progress.weeklyStudiedCount} questions
              </strong>
            </div>

            <div className="p-3 rounded-lg bg-indigo-50/60 border border-indigo-200">
              <span className="text-indigo-800 block text-[10px]">Pattern Confidence</span>
              <strong className="text-base text-indigo-950 mt-0.5 block">
                ~{progress.patternConfidencePct}%
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* Student Profile & AI Context Form */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <h2 className="text-sm font-bold text-[#121316]">AI Study Context</h2>
            </div>
            <p className="text-xs text-[#5f636e] mt-0.5">
              Laksha's AI assistant uses these details to personalize your study plans and advice.
            </p>
          </div>
          {contextSaved && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Saved!</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">Target Exam Date</label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] focus:bg-white focus:outline-hidden focus:border-indigo-600 transition-colors"
            />
            <span className="text-[10px] text-[#8b8f9a] mt-1 block">When is your final examination?</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">Daily Study Hours</label>
            <input
              type="number"
              min={1}
              max={16}
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] focus:bg-white focus:outline-hidden focus:border-indigo-600 transition-colors"
            />
            <span className="text-[10px] text-[#8b8f9a] mt-1 block">Hours per day you dedicate to exam prep</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">Strong Topics</label>
            <input
              type="text"
              placeholder="e.g. Matrices, Thermodynamics, Chemical Bonding"
              value={strongTopics}
              onChange={(e) => setStrongTopics(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] focus:bg-white focus:outline-hidden focus:border-indigo-600 transition-colors"
            />
            <span className="text-[10px] text-[#8b8f9a] mt-1 block">Comma-separated topics you feel confident about</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">Weak / Priority Topics</label>
            <input
              type="text"
              placeholder="e.g. Integration, Ray Optics, Aldehydes"
              value={weakTopics}
              onChange={(e) => setWeakTopics(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] focus:bg-white focus:outline-hidden focus:border-indigo-600 transition-colors"
            />
            <span className="text-[10px] text-[#8b8f9a] mt-1 block">Comma-separated topics needing extra focus</span>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={handleSaveContext}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Save Context
          </button>
        </div>
      </div>

      {/* Reset State Option */}
      <div className="p-6 rounded-2xl border border-[#e8e8e2] bg-white space-y-3 shadow-xs">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#121316]">Reset Demo Data & History</h3>
            <p className="text-xs text-[#5f636e] mt-0.5">
              Clear saved question bookmarks, completed study markers, and restored default KCET 2026 dataset.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetData}
            disabled={isResetting}
            className="px-4 py-2 rounded-lg border border-[#e8e8e2] text-xs font-medium text-rose-700 hover:bg-rose-50 hover:border-rose-200 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isResetting ? 'Resetting...' : 'Reset Data'}</span>
          </button>
        </div>

        {resetSuccess && (
          <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Data successfully reset. Redirecting to dashboard...</span>
          </div>
        )}
      </div>
    </div>
  );
};
