<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ProgressRoot, ProgressIndicator, ToggleGroupRoot, ToggleGroupItem } from 'reka-ui'
import { computed, ref } from 'vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

const categories: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'Vue.js', 'Next.js'],
  Infra: ['Kubernetes', 'Docker', 'AWS'],
  AI: ['LangchainJS', 'Vector Database', 'AI Agent Design'],
}

const activeFilter = ref<string>('All')

const skillColors: Record<string, string> = {
  React: 'bg-purple-500',
  TypeScript: 'bg-indigo-500',
  'Vue.js': 'bg-fuchsia-500',
  'Next.js': 'bg-violet-500',
  Kubernetes: 'bg-purple-400',
  Docker: 'bg-pink-500',
  'LangchainJS': 'bg-amber-500',
}

const skillIcons: Record<string, string> = {
  React: 'simple-icons:react',
  TypeScript: 'simple-icons:typescript',
  'Vue.js': 'simple-icons:vuedotjs',
  'Next.js': 'simple-icons:nextdotjs',
  Kubernetes: 'simple-icons:kubernetes',
  Docker: 'simple-icons:docker',
  'LangchainJS': 'lucide:brain',
}

const filterIcons: Record<string, string> = {
  All: 'lucide:layers',
  Frontend: 'lucide:monitor',
  Infra: 'lucide:server',
  AI: 'lucide:brain',
}

const filteredSkills = computed(() => {
  if (activeFilter.value === 'All') return skills.proficiency
  const cats = categories[activeFilter.value] ?? []
  return skills.proficiency.filter((s) => cats.includes(s.name))
})
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[980px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1] mb-8">Skills</h2>

      <!-- Filter -->
      <ToggleGroupRoot
        type="single"
        :model-value="activeFilter"
        class="flex gap-2 mb-8 flex-wrap"
        @update:model-value="(v) => { if (v) activeFilter = String(v) }"
      >
        <ToggleGroupItem
          v-for="cat in ['All', 'Frontend', 'Infra', 'AI']"
          :key="cat"
          :value="cat"
          class="px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 bg-white/5 border border-white/10 data-[state=on]:bg-purple-500 data-[state=on]:text-white data-[state=on]:border-purple-500 hover:text-white transition-all duration-200 tracking-tight"
        >
          <Icon :icon="filterIcons[cat] || 'lucide:layers'" class="w-3.5 h-3.5" />
          {{ cat }}
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <!-- Skill Cards -->
      <div v-reveal:1="'fade-up'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="glass-card rounded-2xl p-5"
        >
          <p class="text-sm text-white mb-4 tracking-tight flex items-center gap-2">
            <Icon :icon="skillIcons[skill.name] || 'lucide:code'" class="w-4 h-4" />
            {{ skill.name }}
          </p>
          <ProgressRoot :model-value="skill.level" class="relative h-1 rounded-full bg-white/5 overflow-hidden">
            <ProgressIndicator
              :class="['h-full rounded-full transition-all duration-700', skillColors[skill.name] || 'bg-purple-500']"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>
          <p class="text-xs text-gray-600 mt-2 text-right tracking-tight">{{ skill.level }}%</p>
        </div>
      </div>

      <!-- Tech Stack -->
      <div v-reveal="'fade-up'" class="mt-12">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-5">Tech Stack</p>
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
