import { StudentContext } from '../data/studentContext';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface PredictOptions {
  topicSummary?: string;
  questionSummary?: string;
  exam?: string;
  subject?: string;
  studentContext?: Partial<StudentContext>;
}

export interface StudyPlanOptions {
  studentContext: StudentContext;
  prioritySummary?: string;
  progressSummary?: string;
}

const API_BASE = '/api';

async function postJSON<T>(endpoint: string, body: object): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? `Request failed with status ${response.status}`);
  }

  return data as T;
}

export const aiService = {
  /**
   * Send a chat message to the AI study assistant.
   * The API key is NEVER sent from the browser — it stays on the Express server.
   */
  async chat(
    messages: ChatMessage[],
    studentContext?: Partial<StudentContext>,
    appSummary?: string
  ): Promise<string> {
    const result = await postJSON<{ reply: string }>('/ai/chat', {
      messages,
      studentContext,
      appSummary,
    });
    return result.reply;
  },

  /**
   * Request AI-driven exam prediction analysis for a topic or set of questions.
   */
  async predict(options: PredictOptions): Promise<string> {
    const result = await postJSON<{ reply: string }>('/ai/predict', options);
    return result.reply;
  },

  /**
   * Generate a personalized study plan based on student context and Laksha data.
   */
  async generateStudyPlan(options: StudyPlanOptions): Promise<string> {
    const result = await postJSON<{ reply: string }>('/ai/study-plan', options);
    return result.reply;
  },

  /**
   * Check if the backend is reachable and API key is configured.
   */
  async healthCheck(): Promise<{ ok: boolean; keyConfigured: boolean }> {
    try {
      const response = await fetch(`${API_BASE}/health`);
      const data = await response.json();
      return { ok: true, keyConfigured: !!data.keyConfigured };
    } catch {
      return { ok: false, keyConfigured: false };
    }
  },
};
