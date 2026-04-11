<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
import { ref } from 'vue'
import { useDynamicCopy } from '~/composables/useDynamicCopy'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { about } = props.data

const { copy } = useDynamicCopy({
  tagline: '',
  bio: about.bio,
  focus: about.currentWork,
})

const openWork = ref(false)
const openLearning = ref(false)
const openCollab = ref(false)
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[740px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-2">About</p>
      <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent mb-8" />

      <p v-reveal:1="'fade-up'" class="text-white text-base leading-relaxed tracking-tight mb-8">{{ copy.bio }}</p>

      <CollapsibleRoot v-model:open="openWork">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-purple-400 transition-colors duration-200">
            <Icon icon="lucide:hammer" class="w-4 h-4 text-purple-400" />
            What I'm building now
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-gray-500 transition-transform duration-200" :class="{ 'rotate-180': openWork }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4 text-gray-500 text-sm leading-relaxed tracking-tight">
          {{ copy.focus }}
        </CollapsibleContent>
      </CollapsibleRoot>

      <CollapsibleRoot v-model:open="openLearning">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-indigo-400 transition-colors duration-200">
            <Icon icon="lucide:book-open" class="w-4 h-4 text-indigo-400" />
            Currently learning
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-gray-500 transition-transform duration-200" :class="{ 'rotate-180': openLearning }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full tracking-tight"
            >
              {{ item }}
            </span>
          </div>
        </CollapsibleContent>
      </CollapsibleRoot>

      <CollapsibleRoot v-model:open="openCollab">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-white/5 cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-fuchsia-400 transition-colors duration-200">
            <Icon icon="lucide:users" class="w-4 h-4 text-fuchsia-400" />
            Open to collaborate on
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-gray-500 transition-transform duration-200" :class="{ 'rotate-180': openCollab }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4 text-gray-500 text-sm leading-relaxed tracking-tight">
          {{ about.collaboration }}
        </CollapsibleContent>
      </CollapsibleRoot>
    </div>
  </section>
</template>
