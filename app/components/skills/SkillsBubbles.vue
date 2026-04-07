<script setup lang="ts">
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

function bubbleSize(level: number): number {
  return 40 + level * 0.7
}
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-4xl mx-auto">
      <p class="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-2">// skills</p>
      <Separator class="border-[#252a38] mb-8" />

      <TooltipProvider>
        <div class="flex flex-wrap gap-4 items-end">
          <TooltipRoot v-for="skill in skills.proficiency" :key="skill.name">
            <TooltipTrigger as-child>
              <div
                class="rounded-full flex flex-col items-center justify-center bg-[#00d4ff26] border border-cyan-400/30 hover:border-cyan-400 hover:bg-[#00d4ff40] hover:shadow-[0_0_20px_#00d4ff40] transition-all duration-[250ms] cursor-default text-center p-2"
                :style="{
                  width: `${bubbleSize(skill.level)}px`,
                  height: `${bubbleSize(skill.level)}px`,
                }"
              >
                <span class="text-xs font-mono text-[#e8eaf0] leading-tight block truncate max-w-full px-1">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] font-mono text-cyan-400">{{ skill.level }}%</span>
              </div>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ skill.name }} — level: {{ skill.level }}%
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>

      <!-- Technologies -->
      <div class="mt-10">
        <p class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">Technologies</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in skills.technologies"
            :key="tech"
            class="bg-[#1c2030] border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-150 cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
