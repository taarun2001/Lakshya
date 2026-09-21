export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW' | 'INSUFFICIENT_EVIDENCE';

export type SignalStrength = 'High' | 'Medium' | 'Low' | 'Insufficient';

export type SubjectName = 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology';

export interface Exam {
  id: string;
  name: string;
  shortCode: string;
  year: number;
  availablePapersCount: number;
  patternConfidence: number; // e.g. 71% historical pattern consistency (NEVER claim 100%)
  subjects: SubjectName[];
  description: string;
}

export interface Paper {
  id: string;
  examId: string;
  examName: string;
  year: number;
  subject: SubjectName;
  status: 'Processed' | 'Processing' | 'Failed';
  questionCount: number;
  uploadedAt: string;
  fileSize: string;
}

export interface PrioritySignal {
  id: string;
  name: string;
  strength: SignalStrength;
  description: string;
  score: number; // relative weight 0-100
}

export interface HistoricalAppearance {
  year: number;
  type: 'EXACT' | 'SIMILAR' | 'NONE';
  paperSession?: string;
  questionRef?: string;
}

export interface QuestionVariation {
  id: string;
  variationNumber: string;
  label: string; // e.g. "Direct calculation", "Conceptual application", "Graph-based variation"
  concept: string;
  snippet: string;
  frequency: string;
}

export interface Question {
  id: string;
  code: string;
  priority: PriorityLevel;
  subject: SubjectName;
  chapter: string;
  topicId: string;
  topicName: string;
  text: string;
  options?: string[];
  historicalAppearancesCount: number;
  lastAppearanceYear: number;
  recentActivity: 'High' | 'Medium' | 'Low';
  variationsCount: number;
  whyPrioritized: string;
  studied?: boolean;
  saved?: boolean;
  signalBreakdown: {
    historicalRecurrence: SignalStrength;
    recentRelevance: SignalStrength;
    recencyGap: SignalStrength;
    questionVariation: SignalStrength;
    topicRelevance: SignalStrength;
  };
  patternConsistencyIndex: number; // e.g. 72% pattern consistency (strictly not 100%)
  timeline: HistoricalAppearance[];
  variations: QuestionVariation[];
  insufficientEvidenceReason?: string;
}

export interface TopicMetric {
  id: string;
  name: string;
  subject: SubjectName;
  priority: PriorityLevel;
  chapter: string;
  historicalQuestionsCount: number;
  recentQuestionsCount: number;
  lastActiveYear: number;
  trend: 'INCREASING' | 'STABLE' | 'DECREASING';
  trendPercentage: number;
  subtopicPriorities: {
    name: string;
    priority: PriorityLevel;
    questionCount: number;
  }[];
  annualActivity: {
    year: number;
    questionCount: number;
  }[];
}

export interface StudyProgress {
  targetExam: string;
  totalPriorityQuestions: number;
  studiedCount: number;
  remainingCount: number;
  weeklyStudiedCount: number;
  weeklyTopicsCovered: number;
  lastUpdated: string;
  patternConfidencePct: number; // e.g. 70%
}
