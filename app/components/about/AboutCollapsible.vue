<script setup lang="ts">
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
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-3xl mx-auto">
      <p class="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-1">// about</p>
      <Separator class="border-[#252a38] mb-6" />

      <p class="text-[#8892a4] text-base leading-relaxed mb-6">{{ copy.bio }}</p>

      <!-- What I'm building now -->
      <CollapsibleRoot v-model:open="openWork">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-3 border-b border-[#252a38] cursor-pointer group"
        >
          <span class="text-[#e8eaf0] text-sm font-mono group-hover:text-cyan-400 transition-colors">
            What I'm building now
          </span>
          <span
            class="text-[#4a5568] group-hover:text-cyan-400 transition-transform duration-200 font-mono text-xs"
            :class="{ 'rotate-180': openWork }"
          >
            ▼
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent class="py-3 pl-4 text-[#8892a4] text-sm leading-relaxed">
          {{ copy.focus }}
        </CollapsibleContent>
      </CollapsibleRoot>

      <!-- Currently learning -->
      <CollapsibleRoot v-model:open="openLearning">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-3 border-b border-[#252a38] cursor-pointer group"
        >
          <span class="text-[#e8eaf0] text-sm font-mono group-hover:text-cyan-400 transition-colors">
            Currently learning
          </span>
          <span
            class="text-[#4a5568] group-hover:text-cyan-400 transition-transform duration-200 font-mono text-xs"
            :class="{ 'rotate-180': openLearning }"
          >
            ▼
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent class="py-3 pl-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-[#1c2030] border border-[#252a38] text-cyan-400 text-xs font-mono px-2 py-1 rounded"
            >
              {{ item }}
            </span>
          </div>
        </CollapsibleContent>
      </CollapsibleRoot>

      <!-- Open to collaborate -->
      <CollapsibleRoot v-model:open="openCollab">
        <CollapsibleTrigger
          class="w-full flex items-center justify-between py-3 border-b border-[#252a38] cursor-pointer group"
        >
          <span class="text-[#e8eaf0] text-sm font-mono group-hover:text-cyan-400 transition-colors">
            Open to collaborate on
          </span>
          <span
            class="text-[#4a5568] group-hover:text-cyan-400 transition-transform duration-200 font-mono text-xs"
            :class="{ 'rotate-180': openCollab }"
          >
            ▼
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent class="py-3 pl-4 text-[#8892a4] text-sm leading-relaxed">
          {{ about.collaboration }}
        </CollapsibleContent>
      </CollapsibleRoot>
    </div>
  </section>
</template>
