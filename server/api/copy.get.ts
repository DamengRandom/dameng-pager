import OpenAI from 'openai'
import { getCachedCopy, setCachedCopy, type GeneratedCopy } from '../utils/copyCache'
import portfolioData from '../../portfolio-data.json'

const FALLBACK: GeneratedCopy = {
  taglines: [
    portfolioData.meta.tagline,
    `Building the web, one component at a time — from Sydney.`,
    `Freelance JS engineer obsessed with clean code and AI.`,
  ],
  bios: [
    portfolioData.about.bio,
    `I'm Damon, a freelance JavaScript engineer based in Sydney. I specialize in React and Vue ecosystems, and lately I've been deep in AI tooling and agent-driven UIs.`,
    `Sydney-based engineer with a passion for frontend craft. I work across React, Vue, Next.js and Node — and I'm always learning something new on the AI/ML frontier.`,
  ],
  focuses: [
    portfolioData.about.currentWork,
    `Exploring AI-augmented UI patterns and building smarter frontend experiences.`,
    `Vue 3 component systems, Nuxt full-stack apps, and AI integrations.`,
  ],
  generatedAt: Date.now(),
}

function extractJson(raw: string): GeneratedCopy | null {
  // Strip markdown code fences if present
  const stripped = raw
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim()

  // Try parsing the whole thing first
  const candidates = [stripped, raw]

  for (const candidate of candidates) {
    // Find outermost { }
    const start = candidate.indexOf('{')
    const end = candidate.lastIndexOf('}')
    if (start === -1 || end === -1) continue

    try {
      const parsed = JSON.parse(candidate.slice(start, end + 1))
      if (
        Array.isArray(parsed.taglines) && parsed.taglines.length >= 1 &&
        Array.isArray(parsed.bios) && parsed.bios.length >= 1 &&
        Array.isArray(parsed.focuses) && parsed.focuses.length >= 1
      ) {
        // Pad to 3 if model returned fewer variants
        const pad = (arr: string[], fallback: string[]) =>
          [...arr, ...fallback].slice(0, 3)

        return {
          taglines: pad(parsed.taglines, FALLBACK.taglines),
          bios: pad(parsed.bios, FALLBACK.bios),
          focuses: pad(parsed.focuses, FALLBACK.focuses),
          generatedAt: Date.now(),
        }
      }
    } catch {
      continue
    }
  }
  return null
}

export default defineEventHandler(async () => {
  // Always return something — never throw to the client
  try {
    const cached = getCachedCopy()
    if (cached) {
      return { ...cached, cached: true }
    }

    const apiKey = process.env.NVIDIA_API_KEY
    if (!apiKey || apiKey === 'nvapi-your-key-here') {
      setCachedCopy(FALLBACK)
      return { ...FALLBACK, cached: false, fallback: true }
    }

    const client = new OpenAI({
      baseURL: 'https://integrate.api.nvidia.com/v1',
      apiKey,
    })

    const response = await client.chat.completions.create({
      model: 'mistralai/mistral-nemotron',
      messages: [
        {
          role: 'user',
          content: `You are a copywriter. Generate creative portfolio copy for a developer named Damon Wu.
He is a freelance JavaScript Engineer in Sydney. Top skills: React, TypeScript, Vue.js. Currently: ${portfolioData.about.currentWork}.

Write 3 taglines (under 12 words each), 3 bios (2-3 sentences, first person), 3 focus lines (1 sentence).

Reply with ONLY this JSON, no explanation:
{
  "taglines": ["tagline1", "tagline2", "tagline3"],
  "bios": ["bio1", "bio2", "bio3"],
  "focuses": ["focus1", "focus2", "focus3"]
}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 800,
    })

    const raw = response.choices[0]?.message?.content ?? ''
    console.log('[copy.get] Raw LLM response:', raw.slice(0, 300))

    const copy = extractJson(raw)

    if (copy) {
      setCachedCopy(copy)
      return { ...copy, cached: false }
    }

    console.warn('[copy.get] Could not parse JSON from response, using fallback')
    // Cache fallback for only 5 min so we retry the LLM soon
    setCachedCopy(FALLBACK, 5 * 60 * 1000)
    return { ...FALLBACK, cached: false, fallback: true }

  } catch (err: any) {
    console.error('[copy.get] Error:', err?.message ?? err)
    if (!getCachedCopy()) setCachedCopy(FALLBACK, 5 * 60 * 1000)
    return { ...FALLBACK, cached: false, fallback: true }
  }
})
