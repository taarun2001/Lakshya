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
  let response: Response;
  try {
    response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new Error(
      'Unable to connect to the backend server. Please verify the Express API server is running on http://localhost:3001 (run "npm run dev").'
    );
  }

  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    let data: any;
    try {
      data = await response.json();
    } catch {
      throw new Error(`Failed to parse response JSON from server (HTTP ${response.status}).`);
    }

    if (!response.ok) {
      throw new Error(data?.error ?? `Request failed with status ${response.status}`);
    }

    return data as T;
  }

  // Response is not JSON (e.g. HTML from Vite SPA fallback or error page)
  const rawText = await response.text();
  if (rawText.toLowerCase().includes('<!doctype') || rawText.toLowerCase().includes('<html')) {
    throw new Error(
      'Backend AI server is offline or unreachable on http://localhost:3001 (received HTML instead of API JSON). Please start the backend using "npm run dev".'
    );
  }

  throw new Error(`Unexpected server response (HTTP ${response.status}): ${rawText.slice(0, 100)}`);
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
  async healthCheck(): Promise<{ ok: boolean; keyConfigured: boolean; provider?: string; model?: string }> {
    try {
      const response = await fetch(`${API_BASE}/health`);
      if (!response.ok) return { ok: false, keyConfigured: false };
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        return { ok: false, keyConfigured: false };
      }
      const data = await response.json();
      return { ok: true, keyConfigured: !!data.keyConfigured, provider: data.provider, model: data.model };
    } catch {
      return { ok: false, keyConfigured: false };
    }
  },
};
