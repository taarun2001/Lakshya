import { Exam } from './types';

export const MOCK_EXAMS: Exam[] = [
  {
    id: 'kcet-2026',
    name: 'Karnataka Common Entrance Test (KCET)',
    shortCode: 'KCET 2026',
    year: 2026,
    availablePapersCount: 16,
    patternConfidence: 71, // ~71% historical signal consistency (never 100%)
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    description: 'State-level engineering & pharmacy entrance examination administered by KEA. 60 questions per subject, 80 minutes per paper.'
  },
  {
    id: 'jee-main-2026',
    name: 'Joint Entrance Examination (JEE Main)',
    shortCode: 'JEE Main 2026',
    year: 2026,
    availablePapersCount: 28,
    patternConfidence: 68,
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    description: 'National-level engineering entrance conducted by NTA across multiple shifts with deep conceptual recurrence.'
  },
  {
    id: 'neet-2026',
    name: 'National Eligibility cum Entrance Test (NEET UG)',
    shortCode: 'NEET 2026',
    year: 2026,
    availablePapersCount: 18,
    patternConfidence: 73,
    subjects: ['Physics', 'Chemistry', 'Biology'],
    description: 'Single national undergraduate medical entrance with high NCERT-aligned recurrence across biological processes and chemical bonding.'
  },
  {
    id: 'gate-2026',
    name: 'Graduate Aptitude Test in Engineering (GATE)',
    shortCode: 'GATE 2026',
    year: 2026,
    availablePapersCount: 12,
    patternConfidence: 67,
    subjects: ['Mathematics', 'Physics'],
    description: 'Technical postgraduate qualification emphasizing analytical problem solving and multi-step derivations.'
  },
  {
    id: 'cat-2026',
    name: 'Common Admission Test (CAT)',
    shortCode: 'CAT 2026',
    year: 2026,
    availablePapersCount: 14,
    patternConfidence: 65,
    subjects: ['Mathematics'],
    description: 'Management entrance focusing on Quantitative Aptitude, Data Interpretation, and Logical Reasoning.'
  },
  {
    id: 'upsc-2026',
    name: 'UPSC Civil Services Preliminary (CSAT & GS)',
    shortCode: 'UPSC 2026',
    year: 2026,
    availablePapersCount: 15,
    patternConfidence: 62,
    subjects: ['Physics', 'Chemistry', 'Biology'],
    description: 'Broad syllabus civil services exam where historical theme recurrence guides priority weightings.'
  }
];
