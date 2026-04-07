<script setup lang="ts">
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-3xl mx-auto">
      <p class="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-2">// knowledge</p>
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-1">Knowledge Base</h2>
      <Separator class="border-[#252a38] mb-8" />

      <TooltipProvider>
        <ul class="space-y-1">
          <li v-for="(item, idx) in knowledge" :key="item">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <div
                  class="flex items-center gap-6 py-3 border-b border-[#252a38] group hover:border-[#353d55] transition-colors cursor-default"
                >
                  <span class="text-xs font-mono text-[#4a5568] w-8 shrink-0">
                    {{ String(idx + 1).padStart(2, '0') }}
                  </span>
                  <span class="text-[#8892a4] text-sm font-mono group-hover:text-[#e8eaf0] transition-colors duration-150 flex-1">
                    {{ item }}
                  </span>
                  <span class="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity duration-150 text-xs font-mono">
                    →
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
                personal study note
              </TooltipContent>
            </TooltipRoot>
          </li>
        </ul>
      </TooltipProvider>
    </div>
  </section>
</template>
