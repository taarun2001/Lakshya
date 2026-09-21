import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  FileText,
  Share2,
  HelpCircle,
  PlusCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { apiService } from '../services/api';
import { Question } from '../data/types';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { SignalCard } from '../components/cards/SignalCard';
import { Timeline } from '../components/visuals/Timeline';
import { cn } from '../utils/cn';
import { aiService } from '../services/aiService';

export const QuestionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [question, setQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // AI Question Insight state
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiExpanded, setAiExpanded] = useState(false);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    apiService.getQuestionById(id).then((q) => {
      setQuestion(q);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-20 text-center text-xs font-mono text-[#8b8f9a]">
        Loading question intelligence signals...
      </div>
    );
  }

  if (!question) {
    return (
      <div className="py-16 text-center space-y-3">
        <h2 className="text-base font-bold text-[#121316]">Question not found</h2>
        <p className="text-xs text-[#5f636e]">The requested question does not exist in the active paper dataset.</p>
        <Link
          to="/priorities"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121316] text-white text-xs font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to priorities</span>
        </Link>
      </div>
    );
  }

  const handleToggleSave = async () => {
    if (!question) return;
    await apiService.toggleSavedQuestion(question.id);
    const updated = await apiService.getQuestionById(question.id);
    setQuestion(updated);
  };

  const handleToggleStudied = async () => {
    if (!question) return;
    await apiService.toggleStudiedQuestion(question.id);
    const updated = await apiService.getQuestionById(question.id);
    setQuestion(updated);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handleGetAiInsight = async () => {
    if (!question) return;
    setIsAiLoading(true);
    setAiError(null);
    setAiExpanded(true);
    try {
      const prompt = `Please provide an expert exam analysis for the following question from ${question.subject} (${question.chapter} - ${question.topicName}):

Question: "${question.text}"
Priority Status: ${question.priority}
Statistical Pattern Consistency: ${question.patternConsistencyIndex}%
Signals:
- Historical Recurrence: ${question.signalBreakdown.historicalRecurrence}
- Recent Relevance: ${question.signalBreakdown.recentRelevance}
- Recency Gap: ${question.signalBreakdown.recencyGap}
- Question Variation: ${question.signalBreakdown.questionVariation}
- Topic Relevance: ${question.signalBreakdown.topicRelevance}

Please provide:
1. Core Concept & Formulae tested
2. Recommended Step-by-Step Solving Strategy & Time-saver tips
3. Common Mistakes / Traps students make in this question
4. Why this archetype has high historical value for KCET/JEE preparation`;

      const reply = await aiService.chat([{ role: 'user', content: prompt }]);
      setAiInsight(reply);
    } catch (err: any) {
      setAiError(err.message || 'Failed to get AI insight.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const isInsufficient = question.priority === 'INSUFFICIENT_EVIDENCE';

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e8e8e2]">
        <div className="flex items-center gap-2 text-xs">
          <Link
            to="/priorities"
            className="flex items-center gap-1 text-[#5f636e] hover:text-[#121316] font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Priorities</span>
          </Link>
          <span className="text-[#d0d0c8]">/</span>
          <span className="font-mono text-[#8b8f9a]">{question.code}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleToggleStudied}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              question.studied
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-[#121316] border-[#e8e8e2] hover:bg-[#fafaf8]'
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{question.studied ? 'Studied' : 'Mark as studied'}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleSave}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              question.saved
                ? 'bg-indigo-50 text-indigo-800 border-indigo-300'
                : 'bg-white text-[#121316] border-[#e8e8e2] hover:bg-[#fafaf8]'
            )}
          >
            <Bookmark className={cn('w-3.5 h-3.5', question.saved && 'fill-indigo-600')} />
            <span>{question.saved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="p-1.5 rounded-lg border border-[#e8e8e2] bg-white text-[#5f636e] hover:text-[#121316] text-xs"
            title="Share question link"
          >
            <Share2 className="w-4 h-4" />
          </button>
          {copyFeedback && (
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Copied!
            </span>
          )}
        </div>
      </div>

      {/* SECTION 27: SPECIAL INSUFFICIENT EVIDENCE STATE BANNER */}
      {isInsufficient && (
        <div className="p-5 rounded-xl border border-dashed border-amber-300 bg-amber-50/50">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-amber-950 uppercase font-mono tracking-wider">
                INSUFFICIENT EVIDENCE
              </h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Not enough historical data to confidently prioritize this question.
              </p>
              <div className="text-[11px] font-mono text-amber-800 mt-1">
                Reason: {question.insufficientEvidenceReason || 'Only 1 relevant syllabus paper available in dataset.'}
              </div>
              <div className="pt-2">
                <Link
                  to="/papers"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#121316] text-white text-xs font-semibold hover:bg-[#282a30] transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add more papers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Question Card Display */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-5">
        {/* Classification Tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#f0f0ea]">
          <div className="flex items-center gap-2">
            <PriorityBadge priority={question.priority} size="md" />
            <span className="text-xs font-mono text-[#8b8f9a]">[{question.code}]</span>
          </div>

          <div className="text-xs font-mono text-[#5f636e] flex items-center gap-2">
            <span>Subject: <strong className="text-[#121316]">{question.subject}</strong></span>
            <span>•</span>
            <span>Chapter: <strong className="text-[#121316]">{question.chapter}</strong></span>
          </div>
        </div>

        {/* Topic Title */}
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase font-mono font-semibold tracking-wider text-indigo-700">
            Topic: {question.topicName}
          </div>
          <Link
            to={`/topics/${question.topicId}`}
            className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-medium"
          >
            <span>Topic intelligence</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Question Statement */}
        <div className="text-base sm:text-lg font-medium text-[#121316] leading-relaxed">
          {question.text}
        </div>

        {/* Multiple Choice Options */}
        {question.options && question.options.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono text-[#8b8f9a] uppercase block">
              Official Options (KEA / Exam Pattern)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {question.options.map((opt, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border border-[#e8e8e2] bg-[#fafaf8] text-xs font-mono text-[#121316] flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-white border border-[#d8d8ce] flex items-center justify-center font-bold text-[11px] text-[#5f636e] shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI QUESTION INTELLIGENCE & SOLVING CARD */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl shadow-xs overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#121316]">AI Question Intelligence & Solution Strategy</h2>
              <p className="text-xs text-[#5f636e] mt-0.5">
                AI breakdown of concept archetype, time-saving tricks, and common pitfalls
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!aiInsight && (
              <button
                onClick={handleGetAiInsight}
                disabled={isAiLoading}
                id={`ai-question-btn-${id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {isAiLoading ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Analyzing...</span></>
                ) : (
                  <><Sparkles className="w-3.5 h-3.5" /><span>Get AI Strategy</span></>
                )}
              </button>
            )}
            {aiInsight && (
              <button
                onClick={() => setAiExpanded((v) => !v)}
                className="p-1.5 rounded-md text-[#8b8f9a] hover:text-[#121316] hover:bg-[#f0f0ea] transition-colors cursor-pointer"
              >
                {aiExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {aiExpanded && (
          <div className="px-6 pb-5 border-t border-[#f0f0ea]">
            {isAiLoading && (
              <div className="py-8 flex flex-col items-center gap-3">
                <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
                <span className="text-xs font-mono text-[#5f636e]">Generating exam solving strategy...</span>
              </div>
            )}
            {aiError && (
              <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{aiError}</span>
              </div>
            )}
            {aiInsight && !isAiLoading && (
              <div className="mt-4">
                <div className="text-xs text-[#121316] leading-relaxed whitespace-pre-wrap bg-[#fafaf8] border border-[#e8e8e2] rounded-xl p-4 font-mono">
                  {aiInsight}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[10px] text-[#8b8f9a]">
                    Analysis powered by NVIDIA AI based on Laksha exam intelligence.
                  </p>
                  <button
                    onClick={handleGetAiInsight}
                    className="text-[10px] text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SECTION 17: WHY LAKSHYA PRIORITIZED THIS (SIGNAL CARDS) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-base font-bold text-[#121316]">Why Lakshya prioritized this</h2>
            <p className="text-xs text-[#5f636e]">
              Multi-signal statistical decomposition based on past examination archives.
            </p>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#f4f4f0] border border-[#e8e8e2] text-[#5f636e] self-start sm:self-auto">
            Statistical consistency: ~{question.patternConsistencyIndex}%
          </span>
        </div>

        {/* 5 Analytical Signal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <SignalCard
            label="Historical recurrence"
            strength={question.signalBreakdown.historicalRecurrence}
            description="Multi-year appearance frequency"
            weightLabel="Weight: 25%"
          />
          <SignalCard
            label="Recent relevance"
            strength={question.signalBreakdown.recentRelevance}
            description="Appearance in 2023–2025"
            weightLabel="Weight: 35%"
          />
          <SignalCard
            label="Recency gap"
            strength={question.signalBreakdown.recencyGap}
            description="Alternate cycle periodicity"
            weightLabel="Weight: 15%"
          />
          <SignalCard
            label="Question variation"
            strength={question.signalBreakdown.questionVariation}
            description="Numerical & conceptual shifts"
            weightLabel="Weight: 15%"
          />
          <SignalCard
            label="Topic relevance"
            strength={question.signalBreakdown.topicRelevance}
            description="Chapter syllabus blueprint"
            weightLabel="Weight: 10%"
          />
        </div>

        {/* Transparent Explanation Box */}
        <div className="p-4 rounded-xl border border-[#e8e8e2] bg-[#fafaf8] text-xs text-[#5f636e] leading-relaxed">
          <strong className="text-[#121316] block mb-1">Analytical Rationale:</strong>
          {question.whyPrioritized}
        </div>
      </div>

      {/* SECTION 18: HISTORICAL TIMELINE (2018–2025) */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-[#121316]">Historical appearance timeline</h2>
          <p className="text-xs text-[#5f636e]">
            Tracking exact question formulations and conceptual variations across past papers.
          </p>
        </div>

        <Timeline timeline={question.timeline} />
      </div>

      {/* SECTION 19: QUESTION VARIATIONS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#121316]">Related question variations</h2>
            <p className="text-xs text-[#5f636e]">
              Demonstrating syntactic and conceptual variations of this core syllabus concept.
            </p>
          </div>
          <span className="text-xs font-mono text-[#8b8f9a]">
            {question.variations.length} variations identified
          </span>
        </div>

        {question.variations.length === 0 ? (
          <div className="p-6 rounded-xl border border-dashed border-[#e2e2da] bg-white text-center text-xs text-[#8b8f9a]">
            No verified question variations detected in the available dataset.
          </div>
        ) : (
          <div className="space-y-3">
            {question.variations.map((v) => (
              <div
                key={v.id}
                className="p-4 rounded-xl border border-[#e8e8e2] bg-white hover:border-[#d4d4ca] transition-colors shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#121316]">
                      {v.variationNumber}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                      {v.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8b8f9a]">{v.frequency}</span>
                </div>

                <p className="text-xs font-medium text-[#121316] leading-snug">
                  {v.concept}
                </p>

                <div className="p-2.5 rounded-lg bg-[#fafaf8] border border-[#f0f0eb] text-xs font-mono text-[#5f636e]">
                  <span className="text-[#8b8f9a] block text-[10px] mb-0.5">Archetype Snippet:</span>
                  "{v.snippet}"
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Methodology note */}
      <div className="p-4 rounded-xl border border-[#e8e8e2] bg-white text-[11px] text-[#8b8f9a] flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-[#8b8f9a] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#5f636e]">Statistical Disclaimer:</strong> Priorities reflect the strength of historical signals (~71% pattern consistency). They indicate optimal study allocation rather than a guaranteed appearance prediction.
        </div>
      </div>
    </div>
  );
};
