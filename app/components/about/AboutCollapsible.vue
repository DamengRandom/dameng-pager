<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
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
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[740px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">About</p>
      <Separator class="border-[#333] mb-8" />

      <p v-reveal:1="'fade-up'" class="text-white text-base leading-relaxed tracking-tight mb-8">{{ copy.bio }}</p>

      <!-- What I'm building now -->
      <CollapsibleRoot v-model:open="openWork">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-[#333] cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-orange-500 transition-colors duration-200">
            <Icon icon="lucide:hammer" class="w-4 h-4 text-orange-500" />
            What I'm building now
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-[#6e6e73] transition-transform duration-200" :class="{ 'rotate-180': openWork }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4 text-[#6e6e73] text-sm leading-relaxed tracking-tight">
          {{ copy.focus }}
        </CollapsibleContent>
      </CollapsibleRoot>

      <!-- Currently learning -->
      <CollapsibleRoot v-model:open="openLearning">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-[#333] cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-violet-500 transition-colors duration-200">
            <Icon icon="lucide:book-open" class="w-4 h-4 text-violet-500" />
            Currently learning
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-[#6e6e73] transition-transform duration-200" :class="{ 'rotate-180': openLearning }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-[#222] text-[#ccc] text-xs px-3 py-1.5 rounded-full shadow-[rgba(0,0,0,0.04)_0px_2px_8px_0px] tracking-tight"
            >
              {{ item }}
            </span>
          </div>
        </CollapsibleContent>
      </CollapsibleRoot>

      <!-- Open to collaborate -->
      <CollapsibleRoot v-model:open="openCollab">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-4 border-b border-[#333] cursor-pointer group"
        >
          <span class="flex items-center gap-2 text-white text-sm font-medium tracking-tight group-hover:text-emerald-500 transition-colors duration-200">
            <Icon icon="lucide:users" class="w-4 h-4 text-emerald-500" />
            Open to collaborate on
          </span>
          <Icon icon="lucide:chevron-up" class="w-4 h-4 text-[#6e6e73] transition-transform duration-200" :class="{ 'rotate-180': openCollab }" />
        </CollapsibleTrigger>
        <CollapsibleContent class="py-4 text-[#6e6e73] text-sm leading-relaxed tracking-tight">
          {{ about.collaboration }}
        </CollapsibleContent>
      </CollapsibleRoot>
    </div>
  </section>
</template>
