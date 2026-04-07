import { ref, onMounted } from 'vue'

export interface DynamicCopy {
  tagline: string
  bio: string
  focus: string
}

/**
 * Fetches AI-generated copy from the server (cached 24h server-side).
 * Randomly picks one of the 3 variants per section on each page load.
 * Falls back silently to static portfolio data if the API is unavailable.
 */
export function useDynamicCopy(fallback: { tagline: string; bio: string; focus: string }) {
  const copy = ref<DynamicCopy>({ ...fallback })
  const loading = ref(true)

  function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  onMounted(async () => {
    try {
      const data = await $fetch<{
        taglines: string[]
        bios: string[]
        focuses: string[]
      }>('/api/copy', {
        // Explicit base URL so client-side fetch always resolves correctly
        baseURL: window.location.origin,
        timeout: 8000,
      })

      if (data?.taglines?.length && data?.bios?.length && data?.focuses?.length) {
        copy.value = {
          tagline: pick(data.taglines),
          bio: pick(data.bios),
          focus: pick(data.focuses),
        }
      }
    } catch (err) {
      // Silently keep fallback — static copy is always acceptable
      console.warn('[useDynamicCopy] Using fallback copy:', err)
    } finally {
      loading.value = false
    }
  })

  return { copy, loading }
}
