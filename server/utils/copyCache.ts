/**
 * Server-side in-memory cache for AI-generated copy.
 * One LLM call per day — all visitors share the same result.
 */

const TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

export interface GeneratedCopy {
  taglines: string[]   // 3 tagline variants for hero
  bios: string[]       // 3 bio variants for about
  focuses: string[]    // 3 "current focus" variants
  generatedAt: number  // unix ms timestamp
}

interface Cache {
  data: GeneratedCopy | null
  expiresAt: number
}

// Module-level singleton — persists for the lifetime of the Nitro server process
const cache: Cache = {
  data: null,
  expiresAt: 0,
}

export function getCachedCopy(): GeneratedCopy | null {
  if (cache.data && Date.now() < cache.expiresAt) {
    return cache.data
  }
  return null
}

export function setCachedCopy(copy: GeneratedCopy, ttl = TTL_MS): void {
  cache.data = copy
  cache.expiresAt = Date.now() + ttl
}

export function getCacheAge(): { fresh: boolean; expiresInMs: number } {
  return {
    fresh: Date.now() < cache.expiresAt,
    expiresInMs: Math.max(0, cache.expiresAt - Date.now()),
  }
}
