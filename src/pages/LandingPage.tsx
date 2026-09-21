import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Compass, TrendingUp } from 'lucide-react';
import { PriorityBadge } from '../components/common/PriorityBadge';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#121316] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#e8e8e2] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#121316] flex items-center justify-center text-white">
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
            <span className="text-xl font-bold tracking-tight text-[#121316]">
              Lakshya
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#5f636e]">
            <Link to="/methodology" className="hover:text-[#121316] transition-colors">
              How it works
            </Link>
            <Link to="/topics" className="hover:text-[#121316] transition-colors">
              Exams
            </Link>
            <Link to="/methodology" className="hover:text-[#121316] transition-colors">
              Methodology
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="text-xs font-medium text-[#5f636e] hover:text-[#121316] px-3 py-1.5 transition-colors hidden sm:block"
            >
              Sign in
            </Link>
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121316] hover:bg-[#272a31] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f3ee] border border-[#e4e4dc] text-[11px] font-mono font-medium text-[#5f636e] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          <span>Exam Question Intelligence SaaS</span>
          <span className="text-[#a0a096]">•</span>
          <span className="text-indigo-700 font-semibold">~71% Pattern Alignment</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121316] leading-[1.1] mb-5 max-w-3xl mx-auto">
          Study less blindly.<br />
          Study with direction.
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-lg text-[#5f636e] max-w-2xl mx-auto leading-relaxed mb-8">
          Lakshya analyzes previous question papers to identify the topics and questions that deserve
          your attention now.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-14">
          <Link
            to="/onboarding"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#121316] hover:bg-[#252830] active:bg-black text-white text-sm font-semibold shadow-sm transition-all"
          >
            <span>Analyze your exam</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/methodology"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#e8e8e2] hover:border-[#d0d0c6] text-[#121316] text-sm font-medium transition-colors"
          >
            <span>See how it works</span>
          </Link>
        </div>

        {/* REALISTIC PRODUCT PREVIEW (As required by spec, NOT an illustration) */}
        <div className="text-left bg-white border border-[#e2e2da] rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          {/* Window Header */}
          <div className="bg-[#f8f8f6] border-b border-[#e8e8e2] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2dc]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2dc]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2dc]" />
              </div>
              <span className="text-xs font-mono text-[#5f636e] ml-2">
                lakshya.app / dashboard / kcet-2026
              </span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-[#e8e8e2] text-[#5f636e]">
              Live Preview
            </span>
          </div>

          {/* Inner Product Content */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Exam Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f0f0ea]">
              <div>
                <span className="text-xs font-mono text-[#8b8f9a] uppercase">Target Exam</span>
                <h3 className="text-lg font-bold text-[#121316]">KCET 2026</h3>
              </div>
              <div className="text-xs font-mono text-[#5f636e] bg-[#fafaf8] border border-[#e8e8e2] px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>8 years calibrated • ~71% pattern consistency</span>
              </div>
            </div>

            {/* Study Priorities Count Row */}
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5f636e] mb-3">
                Study priorities
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/90">
                  <span className="text-[11px] font-mono uppercase font-semibold text-rose-800">
                    HIGH
                  </span>
                  <div className="text-2xl font-bold font-mono text-rose-900 mt-1">12</div>
                  <span className="text-[11px] text-rose-700/80">Immediate focus</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/90">
                  <span className="text-[11px] font-mono uppercase font-semibold text-amber-800">
                    MEDIUM
                  </span>
                  <div className="text-2xl font-bold font-mono text-amber-900 mt-1">24</div>
                  <span className="text-[11px] text-amber-700/80">Secondary coverage</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-mono uppercase font-semibold text-slate-700">
                    LOW
                  </span>
                  <div className="text-2xl font-bold font-mono text-slate-800 mt-1">38</div>
                  <span className="text-[11px] text-slate-600">Long-tail recurrence</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-dashed border-zinc-300">
                  <span className="text-[11px] font-mono uppercase font-semibold text-zinc-600">
                    LIMITED
                  </span>
                  <div className="text-2xl font-bold font-mono text-zinc-800 mt-1">6</div>
                  <span className="text-[11px] text-zinc-500">Sparse papers</span>
                </div>
              </div>
            </div>

            {/* Realistic Question Cards Preview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5f636e]">
                  Start here (Top recommended questions)
                </span>
                <Link
                  to="/priorities"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>View all 74 questions</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-3">
                {/* Sample Card 1 */}
                <div className="p-4 rounded-xl border border-[#e8e8e2] bg-[#fafaf8] hover:border-[#d4d4ca] transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <PriorityBadge priority="HIGH" size="sm" />
                      <span className="text-xs font-medium text-[#4338ca]">Application of Derivatives</span>
                    </div>
                    <span className="text-xs font-mono text-[#8b8f9a]">MATH-AOD-01</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#121316] mb-3 leading-snug">
                    A cylinder is inscribed in a given right circular cone of height h and semi-vertical angle α. Find the maximum volume of the cylinder...
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5f636e] pt-2 border-t border-[#ebebe6]">
                    <div className="flex items-center gap-3 font-mono">
                      <span>Historical: <strong>5×</strong></span>
                      <span>Last: <strong>2024</strong></span>
                      <span>Variations: <strong>3</strong></span>
                    </div>
                    <Link
                      to="/questions/q-math-aod-max-min"
                      className="font-semibold text-[#121316] hover:text-indigo-600 flex items-center gap-1"
                    >
                      <span>Inspect signals</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Sample Card 2 */}
                <div className="p-4 rounded-xl border border-[#e8e8e2] bg-[#fafaf8] hover:border-[#d4d4ca] transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <PriorityBadge priority="HIGH" size="sm" />
                      <span className="text-xs font-medium text-[#4338ca]">Electrostatics</span>
                    </div>
                    <span className="text-xs font-mono text-[#8b8f9a]">PHY-CAP-02</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#121316] mb-3 leading-snug">
                    A parallel plate capacitor of capacitance C is charged to potential V and then disconnected from battery. A dielectric slab of constant K is inserted...
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5f636e] pt-2 border-t border-[#ebebe6]">
                    <div className="flex items-center gap-3 font-mono">
                      <span>Historical: <strong>6×</strong></span>
                      <span>Last: <strong>2025</strong></span>
                      <span>Variations: <strong>4</strong></span>
                    </div>
                    <Link
                      to="/questions/q-phy-capacitance-dielectric"
                      className="font-semibold text-[#121316] hover:text-indigo-600 flex items-center gap-1"
                    >
                      <span>Inspect signals</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 43: FREQUENCY ISN'T ENOUGH */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-[#e8e8e2]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-semibold mb-2 block">
            Analytical Distinction
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight mb-3">
            Frequency isn't enough.
          </h2>
          <p className="text-sm sm:text-base text-[#5f636e] leading-relaxed">
            A question appearing often in the past doesn't automatically make it important today.
            Lakshya considers recurrence, recency, similarity, and context together.
          </p>
        </div>

        {/* Side by side comparison (BAD vs GOOD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flawed Approach */}
          <div className="p-6 rounded-xl border border-[#e8e8e2] bg-white opacity-80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rose-700 uppercase font-semibold">
                Naive Frequency Model
              </span>
              <span className="text-xs text-[#8b8f9a]">Uncalibrated</span>
            </div>
            <div className="p-4 rounded-lg bg-[#fafaf8] border border-[#f0f0eb] mb-4 space-y-2 font-mono text-xs text-[#5f636e]">
              <div>Question appeared 8 times in 2012–2018</div>
              <div>→ Marked as HIGH PRIORITY</div>
            </div>
            <p className="text-xs text-[#5f636e] leading-relaxed">
              Fails to account for syllabus updates, outdated question patterns, or 6-year recency
              gaps where the board completely retired the archetype.
            </p>
          </div>

          {/* Lakshya Multi-Signal Approach */}
          <div className="p-6 rounded-xl border border-indigo-200 bg-white shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-indigo-800 uppercase font-bold">
                Lakshya Multi-Signal Intelligence
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">
                ~71% Consistent
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-indigo-50/50 border border-indigo-100 mb-4 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-[#5f636e]">Historical recurrence:</span>
                <span className="font-semibold text-emerald-800">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5f636e]">Recent relevance (2024):</span>
                <span className="font-semibold text-emerald-800">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5f636e]">Similar variations:</span>
                <span className="font-semibold text-indigo-800">3 detected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5f636e]">Chapter weighting:</span>
                <span className="font-semibold text-[#121316]">Calculus</span>
              </div>
            </div>
            <p className="text-xs text-[#121316] font-medium leading-relaxed">
              Every priority is grounded in verifiable historical evidence. Never mysterious AI scores.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 bg-[#121316] text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Stop guessing your revision priorities.
          </h2>
          <p className="text-xs sm:text-sm text-[#a8abb6] leading-relaxed max-w-lg mx-auto">
            Get instant priority classifications across KCET, JEE Main, and NEET previous examination papers.
          </p>
          <div className="pt-2">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#121316] hover:bg-[#f0f0ea] text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Analyze your exam</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#e8e8e2] bg-white text-xs text-[#8b8f9a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#121316]">Lakshya</span>
            <span>•</span>
            <span>Mobile-first exam question intelligence SaaS</span>
          </div>
          <div className="text-[11px] text-[#5f636e]">
            Priorities reflect historical signal strength (~71% consistency). Does not guarantee exam appearances.
          </div>
        </div>
      </footer>
    </div>
  );
};
