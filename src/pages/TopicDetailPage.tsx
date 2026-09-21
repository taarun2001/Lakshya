import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, TrendingDown, Minus, Layers, Sparkles, Loader2, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { apiService } from '../services/api';
import { TopicMetric, Question } from '../data/types';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { TrendChart } from '../components/visuals/TrendChart';
import { QuestionCard } from '../components/cards/QuestionCard';
import { aiService } from '../services/aiService';
import { buildSingleTopicSummary } from '../utils/aiDataBuilder';
import { getStudentContext } from '../data/studentContext';

export const TopicDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<TopicMetric | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // AI insight state
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiExpanded, setAiExpanded] = useState(false);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    Promise.all([
      apiService.getTopicById(id),
      apiService.getTopicQuestions(id)
    ]).then(([top, qs]) => {
      setTopic(top);
      setQuestions(qs);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-20 text-center text-xs font-mono text-[#8b8f9a]">
        Loading topic intelligence...
      </div>
    );
  }

  const handleGetAiInsight = async () => {
    if (!topic) return;
    setIsAiLoading(true);
    setAiError(null);
    setAiExpanded(true);
    try {
      const topicSummary = buildSingleTopicSummary(topic, questions);
      const studentCtx = getStudentContext();
      const reply = await aiService.predict({
        topicSummary,
        exam: studentCtx.exam,
        subject: topic.subject,
        studentContext: studentCtx,
      });
      setAiInsight(reply);
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Failed to get AI insight. Please try again.');
    } finally {
      setIsAiLoading(false);
    }
  };

  if (!topic) {
    return (
      <div className="py-16 text-center space-y-3">
        <h2 className="text-base font-bold text-[#121316]">Topic not found</h2>
        <Link
          to="/topics"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121316] text-white text-xs font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to topics</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs pb-2 border-b border-[#e8e8e2]">
        <Link to="/topics" className="flex items-center gap-1 text-[#5f636e] hover:text-[#121316]">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Topics</span>
        </Link>
        <span className="text-[#d0d0c8]">/</span>
        <span className="text-[#8b8f9a]">{topic.subject}</span>
        <span className="text-[#d0d0c8]">/</span>
        <span className="font-semibold text-[#121316]">{topic.name}</span>
      </div>

      {/* Header & Priority */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#5f636e]">
              {topic.subject} • {topic.chapter}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight mt-1">
              {topic.name}
            </h1>
          </div>
          <PriorityBadge priority={topic.priority} size="lg" />
        </div>

        {/* SECTION 21: KEY METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#f0f0ea]">
          <div className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e2]">
            <span className="text-[11px] font-mono text-[#5f636e] uppercase block mb-1">
              Historical questions
            </span>
            <div className="text-2xl font-bold font-mono text-[#121316]">
              {topic.historicalQuestionsCount}
            </div>
            <span className="text-[11px] text-[#8b8f9a]">Across 2018–2025 papers</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e2]">
            <span className="text-[11px] font-mono text-[#5f636e] uppercase block mb-1">
              Recent questions (3y)
            </span>
            <div className="text-2xl font-bold font-mono text-[#121316]">
              {topic.recentQuestionsCount}
            </div>
            <span className="text-[11px] text-[#8b8f9a]">Appeared in 2023–2025</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e8e8e2]">
            <span className="text-[11px] font-mono text-[#5f636e] uppercase block mb-1">
              Last active
            </span>
            <div className="text-2xl font-bold font-mono text-[#121316]">
              {topic.lastActiveYear}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">Recent exam cycle</span>
          </div>
        </div>
      </div>

      {/* SECTION 21: TOPIC ACTIVITY VISUALIZATION */}
      <div>
        <h2 className="text-base font-bold text-[#121316] mb-3">Topic activity</h2>
        <TrendChart data={topic.annualActivity} title="Annual Question Frequency" />
      </div>

      {/* SECTION 21: PRIORITY BREAKDOWN */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-[#121316]">Priority breakdown</h2>
          <p className="text-xs text-[#5f636e]">
            Subtopic archetypes within {topic.name} categorized by recurrence weighting.
          </p>
        </div>

        <div className="divide-y divide-[#f0f0ea]">
          {topic.subtopicPriorities.map((sub, index) => (
            <div
              key={index}
              className="py-3 flex items-center justify-between gap-3 text-xs font-medium"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[#8b8f9a] text-[11px]">0{index + 1}</span>
                <span className="text-[#121316]">{sub.name}</span>
                <span className="font-mono text-[11px] text-[#8b8f9a]">
                  ({sub.questionCount} questions)
                </span>
              </div>
              <PriorityBadge priority={sub.priority} size="sm" />
            </div>
          ))}
        </div>
      </div>

      {/* AI ANALYSIS SECTION */}
      <div className="bg-white border border-[#e8e8e2] rounded-2xl shadow-xs overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#121316]">AI Analysis</h2>
              <p className="text-[11px] text-[#8b8f9a]">NVIDIA-powered pattern interpretation</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!aiInsight && (
              <button
                onClick={handleGetAiInsight}
                disabled={isAiLoading}
                id={`ai-insight-btn-${id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-xs font-semibold transition-colors"
              >
                {isAiLoading ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Analyzing...</span></>
                ) : (
                  <><Sparkles className="w-3.5 h-3.5" /><span>Get AI Insight</span></>
                )}
              </button>
            )}
            {aiInsight && (
              <button
                onClick={() => setAiExpanded(v => !v)}
                className="p-1.5 rounded-md text-[#8b8f9a] hover:text-[#121316] hover:bg-[#f0f0ea] transition-colors"
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
                <span className="text-xs font-mono text-[#5f636e]">Interpreting historical patterns...</span>
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
                    Analysis based on Laksha historical data. Not a guarantee of exam appearance.
                  </p>
                  <button
                    onClick={handleGetAiInsight}
                    className="text-[10px] text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Prioritized Questions for this Topic */}
      {questions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#121316]">
              Calibrated Questions in this Topic ({questions.length})
            </h2>
          </div>

          <div className="space-y-3">
            {questions.map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
