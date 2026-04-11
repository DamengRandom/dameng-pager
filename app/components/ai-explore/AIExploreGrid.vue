<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { aiExplore } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, rgba(168,85,247,0.5) 0.5px, transparent 0.5px); background-size: 24px 24px;" />

    <div class="max-w-[980px] mx-auto relative">
      <div v-reveal="'fade-up'" class="text-center mb-14">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-3">AI Explore</p>
        <h2 class="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1]">Exploring the AI frontier</h2>
      </div>

      <div v-reveal:1="'scale'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          v-for="project in aiExplore.projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative rounded-2xl glass-card overflow-hidden no-underline transition-all duration-300 hover:-translate-y-0.5"
        >
          <div class="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="p-7">
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/15 to-indigo-500/15 flex items-center justify-center">
                <Icon :icon="project.icon" class="w-5 h-5 text-purple-400" />
              </div>
              <Icon icon="lucide:arrow-up-right" class="w-4 h-4 text-gray-700 group-hover:text-gray-400 transition-colors duration-200" />
            </div>
            <h3 class="text-white text-base font-medium tracking-tight mb-2">{{ project.name }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed tracking-tight mb-5">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 tracking-tight"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>

        <div
          v-for="item in aiExplore.comingSoon"
          :key="item"
          class="group rounded-2xl border border-dashed border-white/10 hover:border-purple-500/30 bg-transparent overflow-hidden transition-all duration-300"
        >
          <div class="h-1 bg-gradient-to-r from-white/5 to-white/5" />
          <div class="p-7 flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Icon icon="lucide:sparkles" class="w-5 h-5 text-gray-700 group-hover:text-purple-400 transition-colors duration-200" />
              </div>
              <p class="text-gray-500 text-sm tracking-tight group-hover:text-gray-300 transition-colors duration-200">{{ item }}</p>
            </div>
            <span class="text-[10px] text-gray-700 uppercase tracking-widest mt-4">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
