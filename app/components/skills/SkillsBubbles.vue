<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

function bubbleSize(level: number): number {
  return 56 + level * 0.8
}

const bubbleColors: Record<string, string> = {
  React: 'hover:bg-purple-500',
  TypeScript: 'hover:bg-indigo-500',
  'Vue.js': 'hover:bg-fuchsia-500',
  'Next.js': 'hover:bg-violet-500',
  Kubernetes: 'hover:bg-purple-400',
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
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[980px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-2">Skills</p>
      <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent mb-10" />

      <TooltipProvider>
        <div v-reveal:1="'scale'" class="flex flex-wrap gap-4 items-end">
          <TooltipRoot v-for="skill in skills.proficiency" :key="skill.name">
            <TooltipTrigger as-child>
              <div
                :class="['rounded-full flex flex-col items-center justify-center bg-white/5 border border-white/5 transition-all duration-300 cursor-default text-center p-2', bubbleColors[skill.name] || 'hover:bg-purple-500']"
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
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ skill.name }} — {{ skill.level }}%
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>

      <div v-reveal="'fade-up'" class="mt-12">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-5">Technologies</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in skills.technologies"
            :key="tech"
            class="bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30 text-xs px-4 py-1.5 rounded-full transition-all duration-200 cursor-default tracking-tight"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
