import { SubjectName } from './types';

export interface StudentContext {
  exam: string;
  examDate: string | null;
  dailyStudyHours: number;
  subjects: SubjectName[];
  strongTopics: string[];
  weakTopics: string[];
  completedTopics: string[];
  targetScore: number | null;
  recentActivity: string[];
}

const STORAGE_KEY = 'laksha_student_context_v1';

export const DEFAULT_STUDENT_CONTEXT: StudentContext = {
  exam: 'KCET 2026',
  examDate: null,
  dailyStudyHours: 3,
  subjects: ['Mathematics', 'Physics', 'Chemistry'],
  strongTopics: [],
  weakTopics: [],
  completedTopics: [],
  targetScore: null,
  recentActivity: [],
};

export function getStudentContext(): StudentContext {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_STUDENT_CONTEXT, ...JSON.parse(raw) };
  } catch {
    // ignore
  }
  return { ...DEFAULT_STUDENT_CONTEXT };
}

export function saveStudentContext(ctx: Partial<StudentContext>): StudentContext {
  const current = getStudentContext();
  const updated = { ...current, ...ctx };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}

export function addRecentActivity(entry: string): void {
  const ctx = getStudentContext();
  const updated = [entry, ...ctx.recentActivity].slice(0, 20);
  saveStudentContext({ recentActivity: updated });
}
