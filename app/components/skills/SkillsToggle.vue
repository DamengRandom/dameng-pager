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
  React: 'bg-sky-500',
  TypeScript: 'bg-blue-600',
  'Vue.js': 'bg-emerald-500',
  'Next.js': 'bg-purple-500',
  Kubernetes: 'bg-indigo-500',
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
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[980px] mx-auto">
      <h2 class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">Skills</h2>

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
          class="px-4 py-1.5 rounded-full text-xs font-medium text-[#6e6e73] bg-[#1d1d1f] data-[state=on]:bg-[#0071e3] data-[state=on]:text-white hover:bg-[#272729] hover:text-white transition-all duration-200 tracking-tight"
        >
          <Icon :icon="filterIcons[cat] || 'lucide:layers'" class="w-3.5 h-3.5" />
          {{ cat }}
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <!-- Skill Cards -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bg-[#1d1d1f] rounded-2xl p-5 hover:bg-[#272729] transition-colors duration-200"
        >
          <p class="text-sm text-white mb-4 tracking-tight flex items-center gap-2">
            <Icon :icon="skillIcons[skill.name] || 'lucide:code'" class="w-4 h-4" />
            {{ skill.name }}
          </p>
          <ProgressRoot :model-value="skill.level" class="relative h-1 rounded-full bg-[#272729] overflow-hidden">
            <ProgressIndicator
              :class="['h-full rounded-full transition-all duration-700', skillColors[skill.name] || 'bg-[#0071e3]']"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>
          <p class="text-xs text-[#424245] mt-2 text-right tracking-tight">{{ skill.level }}%</p>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mt-12">
        <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-5">Tech Stack</p>
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
