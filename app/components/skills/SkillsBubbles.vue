<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

function bubbleSize(level: number): number {
  return 56 + level * 0.8
}

const bubbleColors: Record<string, string> = {
  React: 'hover:bg-sky-500',
  TypeScript: 'hover:bg-blue-600',
  'Vue.js': 'hover:bg-emerald-500',
  'Next.js': 'hover:bg-purple-500',
  Kubernetes: 'hover:bg-indigo-500',
  GraphQL: 'hover:bg-pink-500',
  'LangchainJS': 'hover:bg-amber-500',
}

const skillIcons: Record<string, string> = {
  React: 'simple-icons:react',
  TypeScript: 'simple-icons:typescript',
  'Vue.js': 'simple-icons:vuedotjs',
  'Next.js': 'simple-icons:nextdotjs',
  Kubernetes: 'simple-icons:kubernetes',
  GraphQL: 'simple-icons:graphql',
  'LangchainJS': 'lucide:brain',
}
</script>

<template>
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[980px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">Skills</p>
      <Separator class="border-[#1d1d1f] mb-10" />

      <TooltipProvider>
        <div v-reveal:1="'scale'" class="flex flex-wrap gap-4 items-end">
          <TooltipRoot v-for="skill in skills.proficiency" :key="skill.name">
            <TooltipTrigger as-child>
              <div
                :class="['rounded-full flex flex-col items-center justify-center bg-[#1d1d1f] transition-all duration-250 cursor-default text-center p-2', bubbleColors[skill.name] || 'hover:bg-[#0071e3]']"
                :style="{
                  width: `${bubbleSize(skill.level)}px`,
                  height: `${bubbleSize(skill.level)}px`,
                }"
              >
                <Icon :icon="skillIcons[skill.name] || 'lucide:code'" class="w-4 h-4 text-white mb-0.5" />
                <span class="text-[10px] text-white leading-tight block truncate max-w-full px-1 tracking-tight">
                  {{ skill.name }}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ skill.name }} — {{ skill.level }}%
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>

      <!-- Technologies -->
      <div v-reveal="'fade-up'" class="mt-12">
        <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-5">Technologies</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in skills.technologies"
            :key="tech"
            class="bg-[#1d1d1f] hover:bg-[#272729] text-[#a1a1a6] hover:text-white text-xs px-4 py-1.5 rounded-full transition-all duration-200 cursor-default tracking-tight"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
