import { ref, onMounted } from 'vue'
import type { RandomLayout, LayoutVariant } from '~/types/portfolio'

function randomVariant(): LayoutVariant {
  return (Math.floor(Math.random() * 3) + 1) as LayoutVariant
}

export function useRandomLayout() {
  const layout = ref<RandomLayout>({
    hero: 1,
    about: 1,
    skills: 1,
    knowledge: 1,
    aiExplore: 1,
    contact: 1,
  })

  const mounted = ref(false)

  onMounted(() => {
    layout.value = {
      hero: randomVariant(),
      about: randomVariant(),
      skills: randomVariant(),
      knowledge: randomVariant(),
      aiExplore: randomVariant(),
      contact: randomVariant(),
    }
    mounted.value = true
  })

  return { layout, mounted }
}
