<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ProgressRoot, ProgressIndicator } from 'reka-ui'
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
  React: 'bg-purple-500',
  TypeScript: 'bg-indigo-500',
  'Vue.js': 'bg-fuchsia-500',
  'Next.js': 'bg-violet-500',
  Kubernetes: 'bg-purple-400',
  GraphQL: 'bg-pink-500',
  'LangchainJS': 'bg-amber-500',
  'Nuxt.js': 'bg-indigo-400',
  'NodeJS': 'bg-purple-300',
}

const skillIcons: Record<string, string> = {
  React: 'simple-icons:react',
  TypeScript: 'simple-icons:typescript',
  'Vue.js': 'simple-icons:vuedotjs',
  'Next.js': 'simple-icons:nextdotjs',
  Kubernetes: 'simple-icons:kubernetes',
  GraphQL: 'simple-icons:graphql',
  'LangchainJS': 'lucide:brain',
  'Nuxt.js': 'simple-icons:nuxtdotjs',
  'NodeJS': 'simple-icons:nodedotjs',
}
</script>

<template>
  <section class="py-28 px-6 bg-black/40 relative">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50" />
    <div class="max-w-[740px] mx-auto">
      <div class="mb-10">
        <h2 v-reveal="'fade-up'" class="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Technical Arsenal</h2>
        <p class="text-gray-500">Tools and technologies I use to build the future.</p>
      </div>

      <div v-reveal:1="'fade-up'" class="space-y-5">
        <div
          v-for="skill in skills.proficiency"
          :key="skill.name"
          class="grid grid-cols-[140px_1fr_44px] items-center gap-5"
        >
          <span class="text-sm text-gray-400 tracking-tight flex items-center gap-2" :title="levelLabel(skill.level)">
            <Icon :icon="skillIcons[skill.name] || 'lucide:code'" class="w-4 h-4" />
            {{ skill.name }}
          </span>

          <ProgressRoot :model-value="skill.level" class="relative h-1 rounded-full bg-white/5 overflow-hidden">
            <ProgressIndicator
              :class="['h-full rounded-full transition-all duration-700', skillColors[skill.name] || 'bg-purple-500']"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>

          <span class="text-xs text-gray-600 text-right tracking-tight">{{ skill.level }}%</span>
        </div>
      </div>

      <!-- Technologies -->
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
