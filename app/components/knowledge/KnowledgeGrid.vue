<script setup lang="ts">
import { Separator, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
import { ref } from 'vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const visibleItems = knowledge.slice(0, 3)
const hiddenItems = knowledge.slice(3)

const expanded = ref(false)
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-1">Knowledge Base</h2>
      <Separator class="border-[#252a38] mb-8" />

      <!-- First 3 cards always visible -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="item in visibleItems"
          :key="item"
          class="bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 cursor-default group"
        >
          <div class="text-cyan-400 text-xl mb-3">📖</div>
          <p class="text-[#8892a4] text-sm font-mono group-hover:text-[#e8eaf0] transition-colors">{{ item }}</p>
        </div>
      </div>

      <!-- CollapsibleRoot remaining 6 items -->
      <CollapsibleRoot v-model:open="expanded">
        <CollapsibleContent class="animate-in fade-in-0 slide-in-from-top-2 duration-300">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div
              v-for="item in hiddenItems"
              :key="item"
              class="bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 cursor-default group"
            >
              <div class="text-cyan-400 text-xl mb-3">📖</div>
              <p class="text-[#8892a4] text-sm font-mono group-hover:text-[#e8eaf0] transition-colors">{{ item }}</p>
            </div>
          </div>
        </CollapsibleContent>

        <CollapsibleTrigger
          class="mt-4 text-sm font-mono text-[#8892a4] hover:text-cyan-400 flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>{{ expanded ? '▲ Show less' : `▼ Show ${hiddenItems.length} more` }}</span>
        </CollapsibleTrigger>
      </CollapsibleRoot>
    </div>
  </section>
</template>
