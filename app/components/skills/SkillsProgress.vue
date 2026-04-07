<script setup lang="ts">
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
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-1">Skills</h2>
      <Separator class="border-[#252a38] mb-8" />

      <div class="space-y-4">
        <div
          v-for="skill in skills.proficiency"
          :key="skill.name"
          class="grid grid-cols-[120px_1fr_40px] items-center gap-4 py-2"
        >
          <span class="text-sm font-mono text-[#8892a4]" :title="levelLabel(skill.level)">
            {{ skill.name }}
          </span>

          <ProgressRoot :model-value="skill.level" class="relative h-1.5 rounded-full bg-[#1c2030] overflow-hidden">
            <ProgressIndicator
              class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
              :style="{ width: `${skill.level}%` }"
            />
          </ProgressRoot>

          <span class="text-xs font-mono text-[#4a5568] text-right">{{ skill.level }}%</span>
        </div>
      </div>

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
