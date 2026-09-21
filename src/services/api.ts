import { Exam, Paper, Question, TopicMetric, StudyProgress, PriorityLevel, SubjectName } from '../data/types';
import { MOCK_EXAMS } from '../data/exams';
import { MOCK_PAPERS } from '../data/papers';
import { MOCK_TOPICS } from '../data/topics';
import { MOCK_QUESTIONS } from '../data/questions';
import { INITIAL_STUDY_PROGRESS } from '../data/analysis';

// Local storage keys for state persistence
const STORAGE_KEYS = {
  QUESTIONS: 'laksha_questions_v2',
  PAPERS: 'laksha_papers_v1',
  PROGRESS: 'laksha_progress_v2',
  ACTIVE_EXAM: 'laksha_active_exam_v1'
};

// State initialization from local storage or defaults
function getStoredQuestions(): Question[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    if (raw) {
      const parsed: Question[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length >= MOCK_QUESTIONS.length) {
        return parsed;
      }
      // Migrate and preserve user saved/studied state
      const savedMap = new Map(parsed.map((q) => [q.id, { saved: q.saved, studied: q.studied }]));
      const merged = MOCK_QUESTIONS.map((q) => {
        const prev = savedMap.get(q.id);
        return prev ? { ...q, saved: prev.saved ?? q.saved, studied: prev.studied ?? q.studied } : q;
      });
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(merged));
      return merged;
    }
  } catch (e) {
    console.error('Failed to read questions from localStorage', e);
  }
  return MOCK_QUESTIONS;
}

function saveStoredQuestions(questions: Question[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  } catch (e) {
    console.error('Failed to save questions to localStorage', e);
  }
}

function getStoredPapers(): Paper[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PAPERS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read papers from localStorage', e);
  }
  return MOCK_PAPERS;
}

function saveStoredPapers(papers: Paper[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PAPERS, JSON.stringify(papers));
  } catch (e) {
    console.error('Failed to save papers to localStorage', e);
  }
}

function getStoredProgress(): StudyProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read progress from localStorage', e);
  }
  return INITIAL_STUDY_PROGRESS;
}

function saveStoredProgress(progress: StudyProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

// Simulated network latency
const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export interface PriorityFilterParams {
  priority?: PriorityLevel | 'ALL';
  subject?: SubjectName | 'ALL';
  topicId?: string | 'ALL';
  searchQuery?: string;
  sortBy?: 'priority' | 'recent' | 'historical';
}

export const apiService = {
  // Exams
  async getExams(): Promise<Exam[]> {
    await delay(100);
    return [...MOCK_EXAMS];
  },

  async getActiveExam(): Promise<Exam> {
    await delay(80);
    const activeId = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM) || 'kcet-2026';
    const match = MOCK_EXAMS.find((e) => e.id === activeId);
    return match || MOCK_EXAMS[0];
  },

  async setActiveExam(examId: string): Promise<void> {
    await delay(50);
    localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, examId);
  },

  // Papers
  async getPapers(examId?: string): Promise<Paper[]> {
    await delay(120);
    const papers = getStoredPapers();
    if (!examId) return papers;
    return papers.filter((p) => p.examId === examId);
  },

  async addPaper(newPaper: Omit<Paper, 'id' | 'status' | 'uploadedAt'>): Promise<Paper> {
    await delay(250);
    const papers = getStoredPapers();
    const created: Paper = {
      ...newPaper,
      id: `paper-${Date.now()}`,
      status: 'Processing',
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    papers.unshift(created);
    saveStoredPapers(papers);
    return created;
  },

  // Questions & Priorities
  async getPriorities(filters?: PriorityFilterParams): Promise<Question[]> {
    await delay(140);
    let questions = getStoredQuestions();

    if (filters) {
      const { priority, subject, topicId, searchQuery, sortBy } = filters;

      if (priority && priority !== 'ALL') {
        questions = questions.filter((q) => q.priority === priority);
      }

      if (subject && subject !== 'ALL') {
        questions = questions.filter((q) => q.subject === subject);
      }

      if (topicId && topicId !== 'ALL') {
        questions = questions.filter((q) => q.topicId === topicId);
      }

      if (searchQuery && searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        questions = questions.filter(
          (q) =>
            q.text.toLowerCase().includes(query) ||
            q.topicName.toLowerCase().includes(query) ||
            q.chapter.toLowerCase().includes(query) ||
            q.code.toLowerCase().includes(query)
        );
      }

      if (sortBy === 'recent') {
        questions.sort((a, b) => b.lastAppearanceYear - a.lastAppearanceYear);
      } else if (sortBy === 'historical') {
        questions.sort((a, b) => b.historicalAppearancesCount - a.historicalAppearancesCount);
      } else {
        // Sort by priority weight: HIGH > MEDIUM > LOW > INSUFFICIENT
        const weightMap: Record<PriorityLevel, number> = {
          HIGH: 4,
          MEDIUM: 3,
          LOW: 2,
          INSUFFICIENT_EVIDENCE: 1
        };
        questions.sort((a, b) => weightMap[b.priority] - weightMap[a.priority]);
      }
    }

    return questions;
  },

  async getPriorityCounts(): Promise<{
    high: number;
    medium: number;
    low: number;
    insufficient: number;
  }> {
    const questions = getStoredQuestions();
    return {
      high: questions.filter((q) => q.priority === 'HIGH').length,
      medium: questions.filter((q) => q.priority === 'MEDIUM').length,
      low: questions.filter((q) => q.priority === 'LOW').length,
      insufficient: questions.filter((q) => q.priority === 'INSUFFICIENT_EVIDENCE').length
    };
  },

  async getQuestionById(id: string): Promise<Question | null> {
    await delay(120);
    const questions = getStoredQuestions();
    return questions.find((q) => q.id === id) || null;
  },

  async toggleSavedQuestion(id: string): Promise<boolean> {
    await delay(80);
    const questions = getStoredQuestions();
    const target = questions.find((q) => q.id === id);
    if (!target) return false;
    target.saved = !target.saved;
    saveStoredQuestions(questions);
    return !!target.saved;
  },

  async toggleStudiedQuestion(id: string): Promise<boolean> {
    await delay(80);
    const questions = getStoredQuestions();
    const target = questions.find((q) => q.id === id);
    if (!target) return false;
    target.studied = !target.studied;
    saveStoredQuestions(questions);

    // Update study progress counts
    const progress = getStoredProgress();
    if (target.studied) {
      progress.studiedCount = Math.min(progress.totalPriorityQuestions, progress.studiedCount + 1);
      progress.remainingCount = Math.max(0, progress.totalPriorityQuestions - progress.studiedCount);
      progress.weeklyStudiedCount += 1;
    } else {
      progress.studiedCount = Math.max(0, progress.studiedCount - 1);
      progress.remainingCount = Math.max(0, progress.totalPriorityQuestions - progress.studiedCount);
      progress.weeklyStudiedCount = Math.max(0, progress.weeklyStudiedCount - 1);
    }
    saveStoredProgress(progress);

    return !!target.studied;
  },

  async getSavedQuestions(): Promise<Question[]> {
    await delay(100);
    const questions = getStoredQuestions();
    return questions.filter((q) => q.saved);
  },

  async getStudiedQuestions(): Promise<Question[]> {
    await delay(100);
    const questions = getStoredQuestions();
    return questions.filter((q) => q.studied);
  },

  // Topics
  async getTopics(search?: string, subject?: SubjectName | 'ALL'): Promise<TopicMetric[]> {
    await delay(120);
    let topics = [...MOCK_TOPICS];
    if (subject && subject !== 'ALL') {
      topics = topics.filter((t) => t.subject === subject);
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      topics = topics.filter(
        (t) => t.name.toLowerCase().includes(q) || t.chapter.toLowerCase().includes(q)
      );
    }
    return topics;
  },

  async getTopicById(id: string): Promise<TopicMetric | null> {
    await delay(100);
    return MOCK_TOPICS.find((t) => t.id === id) || null;
  },

  async getTopicQuestions(topicId: string): Promise<Question[]> {
    await delay(120);
    const questions = getStoredQuestions();
    return questions.filter((q) => q.topicId === topicId);
  },

  // Progress
  async getStudyProgress(): Promise<StudyProgress> {
    await delay(100);
    const progress = getStoredProgress();
    const questions = getStoredQuestions();
    const highQuestions = questions.filter((q) => q.priority === 'HIGH');
    const studiedHighCount = highQuestions.filter((q) => q.studied).length;
    return {
      ...progress,
      totalPriorityQuestions: highQuestions.length,
      studiedCount: studiedHighCount,
      remainingCount: Math.max(0, highQuestions.length - studiedHighCount)
    };
  },

  // Global Search across Questions, Topics, Papers
  async globalSearch(query: string): Promise<{
    questions: Question[];
    topics: TopicMetric[];
    papers: Paper[];
  }> {
    if (!query || !query.trim()) {
      return { questions: [], topics: [], papers: [] };
    }
    const q = query.toLowerCase().trim();
    const questions = getStoredQuestions().filter(
      (item) =>
        item.text.toLowerCase().includes(q) ||
        item.topicName.toLowerCase().includes(q) ||
        item.chapter.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q)
    );
    const topics = MOCK_TOPICS.filter(
      (item) => item.name.toLowerCase().includes(q) || item.chapter.toLowerCase().includes(q)
    );
    const papers = getStoredPapers().filter(
      (item) =>
        item.year.toString().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.examName.toLowerCase().includes(q)
    );
    return { questions, topics, papers };
  },

  // Reset Mock Data
  async resetMockData(): Promise<void> {
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.PAPERS);
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM);
  }
};
