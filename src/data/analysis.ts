import { StudyProgress } from './types';

export interface AnalysisStage {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'completed';
  durationMs: number;
}

export const PIPELINE_STAGES: { id: string; label: string }[] = [
  { id: 'stage-1', label: 'Reading question papers' },
  { id: 'stage-2', label: 'Identifying questions' },
  { id: 'stage-3', label: 'Grouping similar questions' },
  { id: 'stage-4', label: 'Mapping topics' },
  { id: 'stage-5', label: 'Measuring recent relevance' },
  { id: 'stage-6', label: 'Calculating priorities' }
];

export const INITIAL_STUDY_PROGRESS: StudyProgress = {
  targetExam: 'KCET 2026',
  totalPriorityQuestions: 24,
  studiedCount: 8,
  remainingCount: 16,
  weeklyStudiedCount: 23,
  weeklyTopicsCovered: 14,
  lastUpdated: 'Today at 08:30 AM',
  patternConfidencePct: 71 // Realistic ~70% historical pattern alignment, strictly never 100%
};

export const METHODOLOGY_SIGNALS = [
  {
    number: '01',
    title: 'Historical Recurrence',
    weight: 'High Weight',
    description: 'Measures how consistently a question concept or problem archetype has appeared over an 8-year examination window. Replaces raw frequency with multi-cycle consistency.',
    indicator: 'Evaluated across 8 exam cycles'
  },
  {
    number: '02',
    title: 'Recent Relevance',
    weight: 'Highest Weight',
    description: 'Weighting given to appearances in the last 1–3 examination years. Questions appearing recently reflect the active syllabus emphasis of current examination boards.',
    indicator: 'Heavy weighting on 2023–2025'
  },
  {
    number: '03',
    title: 'Recency Gap',
    weight: 'Pattern Signal',
    description: 'Tracks the time elapsed since a recurring concept last appeared. Topics that recur on alternate cycles (every 2–3 years) receive an adjusted priority boost.',
    indicator: 'Cycle interval detection'
  },
  {
    number: '04',
    title: 'Question Similarity & Variations',
    weight: 'Structural Signal',
    description: 'Identifies whether past papers used exact text, numerical variants, or conceptual application shifts. Multi-variation concepts indicate foundational syllabus status.',
    indicator: 'Syntactic & semantic clustering'
  },
  {
    number: '05',
    title: 'Topic & Chapter Importance',
    weight: 'Contextual Signal',
    description: 'Contextualizes individual questions within total chapter weightage. A question in a high-weight chapter (e.g. Calculus or Electrodynamics) carries higher study leverage.',
    indicator: 'Subject blueprint alignment'
  },
  {
    number: '06',
    title: 'Pattern Consistency',
    weight: 'Reliability Index (~71%)',
    description: 'Quantifies how reliably past examination papers followed predictable distribution rules. Never claimed as absolute certainty, historical patterns average ~71% alignment.',
    indicator: 'Statistical stability index'
  }
];
