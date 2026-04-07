<script setup lang="ts">
import { Separator, ProgressRoot, ProgressIndicator, ToggleGroupRoot, ToggleGroupItem } from 'reka-ui'
import { computed, ref } from 'vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { skills } = props.data

const categories: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'Vue.js', 'Next.js'],
  Infra: ['Kubernetes', 'Docker', 'AWS'],
  AI: ['AI/ML', 'GraphQL'],
}

const activeFilter = ref<string>('All')

const filteredSkills = computed(() => {
  if (activeFilter.value === 'All') return skills.proficiency
  const cats = categories[activeFilter.value] ?? []
  return skills.proficiency.filter((s) => cats.includes(s.name))
})
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-6">Skills</h2>

      <!-- Filter -->
      <ToggleGroupRoot
        type="single"
        :model-value="activeFilter"
        class="flex gap-2 mb-6 flex-wrap"
        @update:model-value="(v) => { if (v) activeFilter = String(v) }"
      >
        <ToggleGroupItem
          v-for="cat in ['All', 'Frontend', 'Infra', 'AI']"
          :key="cat"
          :value="cat"
          class="px-3 py-1 rounded-full text-xs font-mono border border-[#252a38] text-[#8892a4] data-[state=on]:bg-[#00d4ff26] data-[state=on]:border-cyan-400 data-[state=on]:text-cyan-400 hover:border-[#353d55] transition-all duration-150"
        >
          {{ cat }}
        </ToggleGroupItem>
      </ToggleGroupRoot>

      <!-- Skill Cards -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bg-[#13161d] border border-[#252a38] rounded-xl p-4 hover:border-[#353d55] transition-colors"
        >
          <p class="text-sm font-mono text-[#e8eaf0] mb-3">{{ skill.name }}</p>
          <ProgressRoot :model-value="skill.level" class="relative h-1 rounded-full bg-[#1c2030] overflow-hidden">
            <ProgressIndicator
              class="h-full rounded-full bg-cyan-400 transition-all duration-700"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>
          <p class="text-xs font-mono text-[#4a5568] mt-1 text-right">{{ skill.level }}%</p>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mt-10">
        <p class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">Tech Stack</p>
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
