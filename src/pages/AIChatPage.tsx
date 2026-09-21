import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, X, RotateCcw, Sparkles, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { aiService, ChatMessage } from '../services/aiService';
import { getStudentContext } from '../data/studentContext';
import { apiService } from '../services/api';
import { buildTopicSummaryForAI, buildProgressSummary, buildStudentContextString } from '../utils/aiDataBuilder';
import { cn } from '../utils/cn';

const SUGGESTED_PROMPTS = [
  'What should I study today?',
  'Make me a 7-day revision plan',
  "I'm weak in probability — what should I do?",
  'What are the highest-priority topics for my exam?',
  'Quiz me on a high-priority topic',
  'Analyze my current progress',
];

const STORAGE_KEY = 'laksha_chat_history_v1';

function loadHistory(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

function saveHistory(messages: ChatMessage[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
  } catch { /* ignore */ }
}

export const AIChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(loadHistory);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appSummary, setAppSummary] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastUserMessageRef = useRef<string>('');

  // Build app context once on mount
  useEffect(() => {
    async function buildContext() {
      try {
        const [topics, progress] = await Promise.all([
          apiService.getTopics(),
          apiService.getStudyProgress(),
        ]);
        const topicSummary = buildTopicSummaryForAI(topics.slice(0, 30));
        const progressSummary = buildProgressSummary(progress);
        setAppSummary(`PROGRESS:\n${progressSummary}\n\nKEY TOPICS:\n${topicSummary}`);
      } catch { /* non-critical */ }
    }
    buildContext();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    lastUserMessageRef.current = trimmed;
    const userMsg: ChatMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const studentCtx = getStudentContext();
      const ctxString = buildStudentContextString(studentCtx);

      const reply = await aiService.chat(
        updatedMessages,
        studentCtx,
        ctxString ? `STUDENT PROFILE:\n${ctxString}\n\n${appSummary}` : appSummary
      );

      const assistantMsg: ChatMessage = { role: 'assistant', content: reply };
      const finalMessages = [...updatedMessages, assistantMsg];
      setMessages(finalMessages);
      saveHistory(finalMessages);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, appSummary]);

  const handleRetry = useCallback(() => {
    if (!lastUserMessageRef.current) return;
    // Remove the last user message from history so it's not duplicated
    const withoutLast = messages.at(-1)?.role === 'user'
      ? messages.slice(0, -1)
      : messages;
    setMessages(withoutLast);
    setError(null);
    sendMessage(lastUserMessageRef.current);
  }, [messages, sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
    localStorage.removeItem(STORAGE_KEY);
    inputRef.current?.focus();
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] lg:h-[calc(100vh-2rem)] max-w-3xl mx-auto animate-in fade-in duration-200">

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e2] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-[#121316] tracking-tight">AI Study Assistant</h1>
            <p className="text-[11px] text-[#8b8f9a] font-mono">Powered by Laksha analysis data</p>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e8e8e2] text-xs text-[#5f636e] hover:text-[#121316] hover:bg-[#fafaf8] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 min-h-0">

        {/* Empty state with suggested prompts */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-sm font-bold text-[#121316]">Ask your study assistant</h2>
              <p className="text-xs text-[#5f636e] max-w-sm">
                I have access to your Laksha analysis data, study progress, and topic patterns. Ask me anything about your exam prep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="text-left px-3.5 py-2.5 rounded-xl border border-[#e8e8e2] bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-xs text-[#5f636e] hover:text-[#121316] transition-all duration-150"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat messages */}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-3',
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Avatar */}
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            )}

            {/* Bubble */}
            <div
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-wrap',
                msg.role === 'user'
                  ? 'bg-[#121316] text-white rounded-tr-sm'
                  : 'bg-white border border-[#e8e8e2] text-[#121316] rounded-tl-sm shadow-xs'
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-white border border-[#e8e8e2] rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs">
              <div className="flex items-center gap-1.5">
                <Loader2 className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
                <span className="text-xs text-[#5f636e] font-mono">Analyzing your data...</span>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 mx-1">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="font-semibold block">Error</span>
              <span>{error}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {lastUserMessageRef.current && (
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-rose-100 hover:bg-rose-200 text-rose-700 font-medium transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Retry
                </button>
              )}
              <button onClick={() => setError(null)} className="text-rose-500 hover:text-rose-700">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="shrink-0 pt-3 border-t border-[#e8e8e2]">
        <div className="flex items-end gap-2 bg-white border border-[#e8e8e2] rounded-xl p-2 shadow-xs focus-within:border-indigo-400 transition-colors">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your study plan, topics, or exam patterns..."
            rows={1}
            className="flex-1 resize-none text-xs text-[#121316] placeholder:text-[#8b8f9a] outline-none bg-transparent leading-relaxed py-1 px-1 max-h-32 overflow-y-auto"
            style={{ minHeight: '2rem' }}
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            id="chat-send-button"
            className="shrink-0 w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-[#e8e8e2] disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <p className="text-[10px] text-[#8b8f9a] mt-1.5 px-1 font-mono">
          Enter to send • Shift+Enter for new line • Responses use your Laksha analysis data
        </p>
      </div>
    </div>
  );
};
