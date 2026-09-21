import dns from 'node:dns';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Force IPv4 first for Node fetch on Windows
dns.setDefaultResultOrder('ipv4first');

const app = express();
const PORT = process.env.PORT || 3001;

// API configuration — supports both Gemini and NVIDIA
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || process.env['NVIDIABuild-Autogen-46_API_KEY'];
const NVIDIA_BASE_URL = 'https://integrate.api.nvidia.com/v1';
const DEFAULT_NVIDIA_MODEL = process.env.NVIDIA_MODEL || 'meta/llama-3.2-11b-vision-instruct';

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  const provider = GEMINI_API_KEY ? 'gemini' : (NVIDIA_API_KEY ? 'nvidia' : 'none');
  const activeModel = GEMINI_API_KEY ? GEMINI_MODEL : DEFAULT_NVIDIA_MODEL;

  res.json({
    status: 'ok',
    provider,
    model: activeModel,
    keyConfigured: !!(GEMINI_API_KEY || NVIDIA_API_KEY),
  });
});

// ── Shared: call Gemini API ───────────────────────────────────
async function callGeminiAPI(messages, systemPrompt, maxTokens = 1500) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const payload = {
    contents,
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: maxTokens,
    },
  };

  if (systemPrompt) {
    payload.system_instruction = {
      parts: [{ text: systemPrompt }],
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const status = response.status;
    if (status === 400 || status === 401 || status === 403) {
      throw new Error(`API_AUTH_ERROR: ${errorText}`);
    }
    if (status === 429) throw new Error('API_RATE_LIMIT');
    throw new Error(`GEMINI_ERROR_${status}: ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('AI returned an empty response.');
  }
  return text;
}

// ── Shared: call NVIDIA API ───────────────────────────────────
async function callNvidiaAPI(messages, systemPrompt, maxTokens = 1024) {
  if (!NVIDIA_API_KEY) {
    throw new Error('NVIDIA API key is not configured on the server.');
  }

  const payload = {
    model: DEFAULT_NVIDIA_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    temperature: 0.6,
    top_p: 0.95,
    max_tokens: maxTokens,
    stream: false,
  };

  const response = await fetch(`${NVIDIA_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NVIDIA_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const status = response.status;
    if (status === 401) throw new Error('API_AUTH_ERROR');
    if (status === 429) throw new Error('API_RATE_LIMIT');
    if (status === 400) throw new Error('API_BAD_REQUEST');
    throw new Error(`API_ERROR_${status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? '';
}

// ── Unified AI Dispatcher ─────────────────────────────────────
async function callAI(messages, systemPrompt, maxTokens = 1500) {
  if (GEMINI_API_KEY) {
    return await callGeminiAPI(messages, systemPrompt, maxTokens);
  }
  if (NVIDIA_API_KEY) {
    return await callNvidiaAPI(messages, systemPrompt, maxTokens);
  }
  throw new Error('API key is not configured on the server. Please add GEMINI_API_KEY or NVIDIA_API_KEY to your .env file.');
}

// ── Route: General AI Chat ────────────────────────────────────
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, studentContext, appSummary } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const systemPrompt = buildChatSystemPrompt(studentContext, appSummary);
    const reply = await callAI(messages, systemPrompt, 1500);

    res.json({ reply });
  } catch (err) {
    handleError(err, res);
  }
});

// ── Route: Exam Prediction Analysis ──────────────────────────
app.post('/api/ai/predict', async (req, res) => {
  try {
    const { topicSummary, questionSummary, exam, subject, studentContext } = req.body;

    if (!topicSummary && !questionSummary) {
      return res.status(400).json({ error: 'topicSummary or questionSummary is required' });
    }

    const systemPrompt = `You are Laksha's AI exam analysis engine. You provide honest, data-driven predictions for Indian competitive exams.
IMPORTANT RULES:
- Never guarantee a question WILL appear. Use language like "High historical relevance", "Strong pattern", "Moderate relevance".
- Only use data provided to you. Never invent statistics or frequencies.
- If data is insufficient, say so clearly.
- Be concise and student-friendly.
- Always end with a "Recommended preparation order" list.`;

    const userMessage = buildPredictionPrompt(topicSummary, questionSummary, exam, subject, studentContext);
    const reply = await callAI([{ role: 'user', content: userMessage }], systemPrompt, 1500);

    res.json({ reply });
  } catch (err) {
    handleError(err, res);
  }
});

// ── Route: Personalized Study Plan ───────────────────────────
app.post('/api/ai/study-plan', async (req, res) => {
  try {
    const { studentContext, prioritySummary, progressSummary } = req.body;

    if (!studentContext) {
      return res.status(400).json({ error: 'studentContext is required' });
    }

    const systemPrompt = `You are Laksha's AI study planner. You create realistic, personalized daily study plans for competitive exam students.
IMPORTANT RULES:
- Never exceed the student's available daily study hours.
- Be specific: include topic, time allocation, task type, number of questions.
- Prioritize HIGH-relevance topics from the analysis data.
- If the student has weak topics, schedule those earlier in the plan.
- Format your plan as a clear day-by-day schedule.
- Avoid vague advice like "study regularly". Be actionable.`;

    const userMessage = buildStudyPlanPrompt(studentContext, prioritySummary, progressSummary);
    const reply = await callAI([{ role: 'user', content: userMessage }], systemPrompt, 1800);

    res.json({ reply });
  } catch (err) {
    handleError(err, res);
  }
});

// ── Prompt Builders ───────────────────────────────────────────
function buildChatSystemPrompt(studentContext, appSummary) {
  let prompt = `You are Laksha's AI study assistant — an intelligent, focused exam preparation guide for Indian competitive exams (KCET, JEE, NEET, GATE, etc.).

Your role:
- Help students prepare smarter using historical exam data analysis
- Answer study-related questions with specific, actionable guidance
- Create study plans, explain topics, and analyze patterns
- Keep responses concise and student-friendly

You must NOT:
- Give vague motivational advice ("you can do it!", "stay consistent")
- Guarantee questions will appear in the exam
- Invent statistics or facts not provided to you
- Go off-topic from exam preparation`;

  if (studentContext) {
    prompt += `\n\nSTUDENT PROFILE:\n${JSON.stringify(studentContext, null, 2)}`;
  }
  if (appSummary) {
    prompt += `\n\nLAKSHA ANALYSIS DATA:\n${appSummary}`;
  }

  return prompt;
}

function buildPredictionPrompt(topicSummary, questionSummary, exam, subject, studentContext) {
  let prompt = `Analyze the following historical exam data for ${exam || 'the exam'}${subject ? ` — ${subject}` : ''} and provide AI-driven study priority insights.\n\n`;

  if (topicSummary) {
    prompt += `TOPIC ANALYSIS DATA:\n${topicSummary}\n\n`;
  }
  if (questionSummary) {
    prompt += `QUESTION PATTERN DATA:\n${questionSummary}\n\n`;
  }
  if (studentContext) {
    prompt += `STUDENT CONTEXT:\nExam date: ${studentContext.examDate || 'not set'}, Daily hours: ${studentContext.dailyStudyHours || 'unknown'}, Weak topics: ${studentContext.weakTopics?.join(', ') || 'none specified'}\n\n`;
  }

  prompt += `Provide a structured analysis with:
1. HIGH relevance topics/questions (strong historical pattern + recent appearance)
2. MEDIUM relevance topics (some evidence, less consistency)
3. LOWER relevance topics (weaker or declining evidence)
4. Recommended preparation order based on the data and student context

Remember: Use language like "High historical relevance" not "This WILL appear".`;

  return prompt;
}

function buildStudyPlanPrompt(studentContext, prioritySummary, progressSummary) {
  const {
    exam = 'the exam',
    examDate,
    dailyStudyHours = 2,
    strongTopics = [],
    weakTopics = [],
    completedTopics = [],
    subjects = [],
    targetScore,
  } = studentContext;

  const daysLeft = examDate
    ? Math.max(0, Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24)))
    : null;

  let prompt = `Create a personalized study plan for a student preparing for ${exam}.\n\n`;
  prompt += `STUDENT DETAILS:\n`;
  prompt += `- Daily study hours available: ${dailyStudyHours} hours\n`;
  if (daysLeft !== null) prompt += `- Days until exam: ${daysLeft} days\n`;
  if (examDate) prompt += `- Exam date: ${examDate}\n`;
  if (subjects.length > 0) prompt += `- Subjects: ${subjects.join(', ')}\n`;
  if (strongTopics.length > 0) prompt += `- Strong topics: ${strongTopics.join(', ')}\n`;
  if (weakTopics.length > 0) prompt += `- Weak topics (needs more time): ${weakTopics.join(', ')}\n`;
  if (completedTopics.length > 0) prompt += `- Already completed: ${completedTopics.join(', ')}\n`;
  if (targetScore) prompt += `- Target score: ${targetScore}\n`;

  if (prioritySummary) {
    prompt += `\nHIGH-PRIORITY TOPICS FROM LAKSHA ANALYSIS:\n${prioritySummary}\n`;
  }
  if (progressSummary) {
    prompt += `\nCURRENT PROGRESS:\n${progressSummary}\n`;
  }

  prompt += `\nCreate a realistic ${daysLeft ? Math.min(daysLeft, 7) : 7}-day study plan. 
Each day must stay within ${dailyStudyHours} hours total.
Format as a table with: Day | Subject | Topic | Time | Task
After the table, briefly explain why this order was chosen based on the student's data.`;

  return prompt;
}

// ── Error Handler ─────────────────────────────────────────────
function handleError(err, res) {
  console.error('[Laksha API Error]', err.message);

  const message = err.message || '';
  if (message.includes('API_AUTH_ERROR') || message.includes('401')) {
    return res.status(502).json({
      error: 'NVIDIA AI authentication failed. Please verify your API key in .env (keys from build.nvidia.com begin with "nvapi-").',
    });
  }
  if (message.includes('API_RATE_LIMIT') || message.includes('429')) {
    return res.status(429).json({ error: 'NVIDIA AI rate limit reached. Please wait a moment and try again.' });
  }
  if (message.includes('API_BAD_REQUEST') || message.includes('400')) {
    return res.status(400).json({ error: 'Invalid request to NVIDIA AI. Please try again.' });
  }
  if (message.includes('API key is not configured')) {
    return res.status(503).json({ error: 'NVIDIA API key is not configured in .env.' });
  }
  if (message.includes('ENOTFOUND') || message.includes('fetch failed')) {
    return res.status(503).json({ error: 'Unable to reach AI services. Please check network connection.' });
  }

  return res.status(500).json({ error: `AI error: ${message || 'An unexpected error occurred.'}` });
}

// ── Start Server ──────────────────────────────────────────────
app.listen(PORT, () => {
  if (GEMINI_API_KEY) {
    console.log(`[Laksha API] ✓ Google Gemini API key loaded (${GEMINI_MODEL})`);
  } else if (NVIDIA_API_KEY) {
    console.log(`[Laksha API] ✓ NVIDIA API key loaded (${DEFAULT_NVIDIA_MODEL})`);
  } else {
    console.warn('[Laksha API] ⚠️  WARNING: No AI API key found in .env (set GEMINI_API_KEY or NVIDIA_API_KEY)');
  }
  console.log(`[Laksha API] ✓ Server running on http://localhost:${PORT}`);
});
