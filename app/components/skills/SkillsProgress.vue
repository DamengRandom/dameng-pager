<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, ProgressRoot, ProgressIndicator } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

function levelLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 70) return 'Proficient'
  if (level >= 50) return 'Intermediate'
  return 'Learning'
}

const skillColors: Record<string, string> = {
  React: 'bg-sky-500',
  TypeScript: 'bg-blue-600',
  'Vue.js': 'bg-emerald-500',
  'Next.js': 'bg-purple-500',
  Kubernetes: 'bg-indigo-500',
  GraphQL: 'bg-pink-500',
  'LangchainJS': 'bg-amber-500',
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
    <div class="max-w-[740px] mx-auto">
      <h2 class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">Skills</h2>
      <Separator class="border-[#1d1d1f] mb-10" />

      <div class="space-y-5">
        <div
          v-for="skill in skills.proficiency"
          :key="skill.name"
          class="grid grid-cols-[140px_1fr_44px] items-center gap-5"
        >
          <span class="text-sm text-[#a1a1a6] tracking-tight flex items-center gap-2" :title="levelLabel(skill.level)">
            <Icon :icon="skillIcons[skill.name] || 'lucide:code'" class="w-4 h-4" />
            {{ skill.name }}
          </span>

          <ProgressRoot :model-value="skill.level" class="relative h-1 rounded-full bg-[#272729] overflow-hidden">
            <ProgressIndicator
              :class="['h-full rounded-full transition-all duration-700', skillColors[skill.name] || 'bg-[#0071e3]']"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>

          <span class="text-xs text-[#424245] text-right tracking-tight">{{ skill.level }}%</span>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mt-12">
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
