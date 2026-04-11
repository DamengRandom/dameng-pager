<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { aiExplore } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl" />

    <div class="max-w-[740px] mx-auto relative">
      <p v-reveal="'fade-up'" class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-2">AI Explore</p>
      <h2 v-reveal:1="'fade-up'" class="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1] mb-2">AI Journey</h2>
      <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent mb-12" />

      <div class="relative">
        <div class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-transparent" />

        <div
          v-for="project in aiExplore.projects"
          :key="project.name"
          v-reveal="'fade-left'"
          class="relative pl-14 pb-10 group"
        >
          <div class="absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#050505]/80 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-300" />
          <a :href="project.url" target="_blank" rel="noopener noreferrer" class="block no-underline">
            <div class="flex items-center gap-3 mb-2">
              <Icon :icon="project.icon" class="w-5 h-5 text-purple-400" />
              <h3 class="text-white text-lg font-medium tracking-tight group-hover:text-purple-300 transition-colors duration-200">{{ project.name }}</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 tracking-tight">Active</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed tracking-tight mb-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 tracking-tight"
              >
                {{ tag }}
              </span>
            </div>
          </a>
        </div>

        <div
          v-for="item in aiExplore.comingSoon"
          :key="item"
          v-reveal="'fade-left'"
          class="relative pl-14 pb-8 group"
        >
          <div class="absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-dashed border-white/10 bg-[#050505]/80" />
          <div class="flex items-center gap-3">
            <span class="text-gray-500 text-sm tracking-tight group-hover:text-gray-300 transition-colors duration-200">{{ item }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-600 tracking-tight">Planned</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
