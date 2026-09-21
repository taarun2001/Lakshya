import { Question, TopicMetric, StudyProgress } from '../data/types';
import { StudentContext } from '../data/studentContext';

/**
 * Build a compact topic summary for the AI prediction endpoint.
 * Instead of sending all raw data, we send structured summaries.
 */
export function buildTopicSummaryForAI(topics: TopicMetric[]): string {
  if (topics.length === 0) return 'No topic data available.';

  const lines: string[] = [];

  // Group by subject
  const bySubject = topics.reduce<Record<string, TopicMetric[]>>((acc, t) => {
    if (!acc[t.subject]) acc[t.subject] = [];
    acc[t.subject].push(t);
    return acc;
  }, {});

  for (const [subject, subjectTopics] of Object.entries(bySubject)) {
    lines.push(`\n## ${subject}`);
    for (const topic of subjectTopics) {
      lines.push(
        `- **${topic.name}** (${topic.chapter}): Priority=${topic.priority}, ` +
        `Historical questions=${topic.historicalQuestionsCount}, ` +
        `Recent questions=${topic.recentQuestionsCount}, ` +
        `Last active=${topic.lastActiveYear}, ` +
        `Trend=${topic.trend} (${topic.trendPercentage > 0 ? '+' : ''}${topic.trendPercentage}%)`
      );
    }
  }

  return lines.join('\n');
}

/**
 * Build a compact question pattern summary for AI prediction.
 * Aggregates by chapter to avoid sending thousands of questions.
 */
export function buildQuestionSummaryForAI(questions: Question[], limit = 60): string {
  if (questions.length === 0) return 'No question data available.';

  // Aggregate by chapter + priority
  const byChapter: Record<string, {
    chapter: string;
    subject: string;
    high: number;
    medium: number;
    low: number;
    topics: Set<string>;
    avgLastYear: number;
    count: number;
  }> = {};

  for (const q of questions) {
    const key = `${q.subject}::${q.chapter}`;
    if (!byChapter[key]) {
      byChapter[key] = { chapter: q.chapter, subject: q.subject, high: 0, medium: 0, low: 0, topics: new Set(), avgLastYear: 0, count: 0 };
    }
    const entry = byChapter[key];
    entry.count++;
    entry.topics.add(q.topicName);
    entry.avgLastYear = ((entry.avgLastYear * (entry.count - 1)) + q.lastAppearanceYear) / entry.count;
    if (q.priority === 'HIGH') entry.high++;
    else if (q.priority === 'MEDIUM') entry.medium++;
    else entry.low++;
  }

  // Also include top HIGH-priority individual questions
  const highQ = questions
    .filter(q => q.priority === 'HIGH')
    .sort((a, b) => b.historicalAppearancesCount - a.historicalAppearancesCount)
    .slice(0, limit);

  const lines: string[] = ['### Chapter-level aggregation:'];
  for (const entry of Object.values(byChapter)) {
    lines.push(
      `- **${entry.chapter}** (${entry.subject}): ` +
      `HIGH=${entry.high}, MEDIUM=${entry.medium}, LOW=${entry.low}, ` +
      `avg last year=${Math.round(entry.avgLastYear)}, ` +
      `topics: ${[...entry.topics].slice(0, 4).join(', ')}`
    );
  }

  if (highQ.length > 0) {
    lines.push('\n### Top HIGH-priority questions:');
    for (const q of highQ) {
      lines.push(
        `- [${q.code}] ${q.topicName} (${q.chapter}): ` +
        `appeared ${q.historicalAppearancesCount}x, last ${q.lastAppearanceYear}, ` +
        `pattern consistency ~${q.patternConsistencyIndex}%`
      );
    }
  }

  return lines.join('\n');
}

/**
 * Build a single-topic detail summary for AI analysis on TopicDetailPage.
 */
export function buildSingleTopicSummary(topic: TopicMetric, questions: Question[]): string {
  const lines: string[] = [
    `Topic: ${topic.name}`,
    `Subject: ${topic.subject} | Chapter: ${topic.chapter}`,
    `Priority: ${topic.priority}`,
    `Historical questions: ${topic.historicalQuestionsCount}`,
    `Recent questions (last 3 years): ${topic.recentQuestionsCount}`,
    `Last active year: ${topic.lastActiveYear}`,
    `Trend: ${topic.trend} (${topic.trendPercentage}%)`,
    '',
    'Annual activity:',
  ];

  for (const yr of topic.annualActivity) {
    lines.push(`  ${yr.year}: ${yr.questionCount} question(s)`);
  }

  if (topic.subtopicPriorities.length > 0) {
    lines.push('', 'Subtopics:');
    for (const sub of topic.subtopicPriorities) {
      lines.push(`  - ${sub.name}: ${sub.priority} (${sub.questionCount} questions)`);
    }
  }

  if (questions.length > 0) {
    lines.push('', `Related questions (${questions.length} total):`);
    for (const q of questions.slice(0, 8)) {
      lines.push(
        `  [${q.priority}] ${q.text.slice(0, 80)}... ` +
        `(appeared ${q.historicalAppearancesCount}x, last ${q.lastAppearanceYear})`
      );
    }
  }

  return lines.join('\n');
}

/**
 * Build a progress summary string for the study plan prompt.
 */
export function buildProgressSummary(progress: StudyProgress): string {
  return [
    `Target exam: ${progress.targetExam}`,
    `Total priority questions: ${progress.totalPriorityQuestions}`,
    `Studied: ${progress.studiedCount} (${Math.round((progress.studiedCount / Math.max(1, progress.totalPriorityQuestions)) * 100)}%)`,
    `Remaining: ${progress.remainingCount}`,
    `Weekly velocity: ${progress.weeklyStudiedCount} questions/week`,
    `Pattern confidence: ~${progress.patternConfidencePct}%`,
  ].join('\n');
}

/**
 * Build a compact priority summary for study plan (top HIGH topics only).
 */
export function buildPrioritySummaryForPlan(questions: Question[], topics: TopicMetric[]): string {
  const highTopics = topics
    .filter(t => t.priority === 'HIGH')
    .sort((a, b) => b.recentQuestionsCount - a.recentQuestionsCount)
    .slice(0, 12);

  const lines = ['High-priority topics from Laksha analysis:'];
  for (const t of highTopics) {
    lines.push(`- ${t.name} (${t.subject}/${t.chapter}): trend=${t.trend}, last active=${t.lastActiveYear}`);
  }

  const highQCount = questions.filter(q => q.priority === 'HIGH').length;
  const medQCount = questions.filter(q => q.priority === 'MEDIUM').length;
  lines.push(`\nTotal HIGH priority questions: ${highQCount}`);
  lines.push(`Total MEDIUM priority questions: ${medQCount}`);

  return lines.join('\n');
}

/**
 * Build a student context string for inclusion in chat prompts.
 */
export function buildStudentContextString(ctx: StudentContext): string {
  const parts: string[] = [];
  if (ctx.exam) parts.push(`Exam: ${ctx.exam}`);
  if (ctx.examDate) {
    const daysLeft = Math.max(0, Math.ceil((new Date(ctx.examDate).getTime() - Date.now()) / 86400000));
    parts.push(`Exam date: ${ctx.examDate} (${daysLeft} days away)`);
  }
  parts.push(`Daily study hours: ${ctx.dailyStudyHours}h`);
  if (ctx.subjects.length > 0) parts.push(`Subjects: ${ctx.subjects.join(', ')}`);
  if (ctx.strongTopics.length > 0) parts.push(`Strong topics: ${ctx.strongTopics.join(', ')}`);
  if (ctx.weakTopics.length > 0) parts.push(`Weak topics: ${ctx.weakTopics.join(', ')}`);
  if (ctx.completedTopics.length > 0) parts.push(`Completed: ${ctx.completedTopics.slice(0, 8).join(', ')}`);
  if (ctx.targetScore) parts.push(`Target score: ${ctx.targetScore}`);
  return parts.join('\n');
}
