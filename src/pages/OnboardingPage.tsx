import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Check, ArrowRight, ArrowLeft, Upload, FileText, Sparkles } from 'lucide-react';
import { apiService } from '../services/api';
import { SubjectName } from '../data/types';
import { PipelineLoadingModal } from '../components/modals/PipelineLoadingModal';
import { cn } from '../utils/cn';

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [examSearch, setExamSearch] = useState('');
  const [selectedExamId, setSelectedExamId] = useState('kcet-2026');
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectName[]>([
    'Mathematics',
    'Physics',
    'Chemistry'
  ]);
  const [selectedPaperScope, setSelectedPaperScope] = useState<'5years' | '10years' | 'all' | 'upload'>('5years');
  const [showPipelineModal, setShowPipelineModal] = useState(false);

  const exams = [
    { id: 'kcet-2026', name: 'KCET 2026', desc: 'Karnataka Common Entrance Test (KEA)', papers: '16 papers available' },
    { id: 'jee-main-2026', name: 'JEE Main 2026', desc: 'Joint Entrance Exam (NTA Shifts)', papers: '28 papers available' },
    { id: 'neet-2026', name: 'NEET UG 2026', desc: 'National Eligibility cum Entrance Test', papers: '18 papers available' },
    { id: 'gate-2026', name: 'GATE 2026', desc: 'Graduate Aptitude Test in Engineering', papers: '12 papers available' },
    { id: 'cat-2026', name: 'CAT 2026', desc: 'Common Admission Test (IIM)', papers: '14 papers available' },
    { id: 'upsc-2026', name: 'UPSC 2026', desc: 'Civil Services Preliminary (CSAT & GS)', papers: '15 papers available' },
    { id: 'other', name: 'Other State / National Exam', desc: 'Custom syllabus and uploaded papers', papers: 'Custom ingestion' }
  ];

  const subjectsList: { name: SubjectName; desc: string }[] = [
    { name: 'Mathematics', desc: 'Calculus, Vectors, Algebra, Probability' },
    { name: 'Physics', desc: 'Electromagnetism, Optics, Modern Physics' },
    { name: 'Chemistry', desc: 'Coordination, Organic Mechanisms, Physical' },
    { name: 'Biology', desc: 'Genetics, Molecular Biology, Physiology' }
  ];

  const filteredExams = exams.filter((e) =>
    e.name.toLowerCase().includes(examSearch.toLowerCase()) ||
    e.desc.toLowerCase().includes(examSearch.toLowerCase())
  );

  const handleToggleSubject = (sub: SubjectName) => {
    if (selectedSubjects.includes(sub)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
      }
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const handleFinishStep3 = async () => {
    await apiService.setActiveExam(selectedExamId);
    setShowPipelineModal(true);
  };

  const handlePipelineCompleted = () => {
    setShowPipelineModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Header */}
      <header className="px-6 py-4 border-b border-[#e8e8e2] bg-white flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#121316] flex items-center justify-center text-white">
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-tight text-[#121316]">
            Lakshya
          </span>
        </Link>
        <span className="text-xs font-mono text-[#8b8f9a]">
          Step {step} of 3
        </span>
      </header>

      {/* Main Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl bg-white border border-[#e8e8e2] rounded-2xl shadow-sm p-6 sm:p-8">
          {/* Step 1: Exam Selection */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold block mb-1">
                  Step 01
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                  What are you preparing for?
                </h1>
                <p className="text-xs text-[#5f636e] mt-1">
                  Select your target entrance examination to load calibrated paper archives.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-[#8b8f9a] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={examSearch}
                  onChange={(e) => setExamSearch(e.target.value)}
                  placeholder="Search exams..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#fafaf8] border border-[#e8e8e2] rounded-lg text-[#121316] placeholder:text-[#8b8f9a] outline-none focus:border-indigo-600"
                />
              </div>

              {/* Compact Selectable Rows */}
              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {filteredExams.map((exam) => {
                  const isSelected = selectedExamId === exam.id;
                  return (
                    <div
                      key={exam.id}
                      onClick={() => setSelectedExamId(exam.id)}
                      className={cn(
                        'flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all duration-150',
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                          : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-white'
                      )}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#121316]">{exam.name}</span>
                          <span className="text-[10px] font-mono text-[#8b8f9a]">
                            {exam.papers}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5f636e] mt-0.5">{exam.desc}</p>
                      </div>

                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3',
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-[#d0d0c8] bg-white'
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0ea] flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121316] text-white text-xs font-semibold hover:bg-[#252830] transition-colors"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Subject Selection */}
          {step === 2 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold block mb-1">
                  Step 02
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                  Choose your subjects
                </h1>
                <p className="text-xs text-[#5f636e] mt-1">
                  Select which papers Lakshya should index and prioritize.
                </p>
              </div>

              <div className="space-y-2.5">
                {subjectsList.map((subject) => {
                  const isSelected = selectedSubjects.includes(subject.name);
                  return (
                    <div
                      key={subject.name}
                      onClick={() => handleToggleSubject(subject.name)}
                      className={cn(
                        'flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-150',
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                          : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-white'
                      )}
                    >
                      <div>
                        <span className="text-xs font-bold text-[#121316]">{subject.name}</span>
                        <p className="text-[11px] text-[#5f636e] mt-0.5">{subject.desc}</p>
                      </div>

                      <div
                        className={cn(
                          'w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ml-3 transition-colors',
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-[#d0d0c8] bg-white'
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0ea] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5f636e] hover:text-[#121316] font-medium px-2 py-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121316] text-white text-xs font-semibold hover:bg-[#252830] transition-colors"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Paper Scope Selection */}
          {step === 3 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold block mb-1">
                  Step 03
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                  Choose your papers
                </h1>
                <p className="text-xs text-[#5f636e] mt-1">
                  Define historical horizon to calculate recency and recurrence curves.
                </p>
              </div>

              <div className="space-y-2.5 mb-5">
                {[
                  {
                    id: '5years',
                    title: 'Last 5 years (2020–2025)',
                    desc: 'Focus primarily on modern paper formats and current syllabus emphasis.'
                  },
                  {
                    id: '10years',
                    title: 'Last 10 years (2015–2025)',
                    desc: 'Balanced window capturing cycle intervals and repeated concept archetypes.'
                  },
                  {
                    id: 'all',
                    title: 'All available papers',
                    desc: 'Deepest statistical foundation spanning all archived official papers.'
                  },
                  {
                    id: 'upload',
                    title: 'Upload custom papers',
                    desc: 'Include your own institutional mock tests or private question sheets.'
                  }
                ].map((opt) => {
                  const isSelected = selectedPaperScope === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedPaperScope(opt.id as any)}
                      className={cn(
                        'p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-start justify-between gap-3',
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/40 shadow-xs'
                          : 'border-[#e8e8e2] hover:border-[#d4d4ca] bg-white'
                      )}
                    >
                      <div>
                        <span className="text-xs font-bold text-[#121316]">{opt.title}</span>
                        <p className="text-[11px] text-[#5f636e] mt-0.5 leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5',
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-[#d0d0c8] bg-white'
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Exact educational quote required by spec */}
              <div className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e2] text-xs text-[#5f636e] leading-relaxed mb-6 font-mono">
                <span className="text-[#121316] font-semibold block mb-0.5">Statistical Horizon Note:</span>
                "Recent papers help identify current patterns. Older papers reveal long-term recurrence."
              </div>

              <div className="pt-4 border-t border-[#f0f0ea] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5f636e] hover:text-[#121316] font-medium px-2 py-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleFinishStep3}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#121316] text-white text-xs font-semibold hover:bg-[#252830] transition-colors"
                >
                  <span>Build Study Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Pipeline Loading Modal */}
      <PipelineLoadingModal
        isOpen={showPipelineModal}
        onComplete={handlePipelineCompleted}
        examName="KCET 2026"
      />

      <footer className="py-4 text-center text-xs text-[#8b8f9a]">
        Lakshya Exam Intelligence • Focused Preparation Engine
      </footer>
    </div>
  );
};
