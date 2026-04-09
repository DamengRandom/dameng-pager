<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { aiExplore } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-[#0a0a0a] relative overflow-hidden">
    <!-- Radial gradient backdrop -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-violet-600/8 to-transparent rounded-full blur-3xl" />

    <div class="max-w-[740px] mx-auto relative">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">AI Explore</p>
      <h2 v-reveal:1="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">AI Journey</h2>
      <Separator class="border-[#1d1d1f] mb-12" />

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent" />

        <!-- Active projects -->
        <div
          v-for="(project, idx) in aiExplore.projects"
          :key="project.name"
          v-reveal="'fade-left'"
          class="relative pl-14 pb-10 group"
        >
          <div class="absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-violet-500 bg-black group-hover:bg-violet-500/20 transition-colors duration-300" />
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block no-underline"
          >
            <div class="flex items-center gap-3 mb-2">
              <Icon :icon="project.icon" class="w-5 h-5 text-violet-400" />
              <h3 class="text-white text-lg font-medium tracking-tight group-hover:text-violet-300 transition-colors duration-200">{{ project.name }}</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 tracking-tight">Active</span>
            </div>
            <p class="text-[#a1a1a6] text-sm leading-relaxed tracking-tight mb-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2.5 py-1 rounded-full bg-[#1d1d1f] text-[#6e6e73] tracking-tight"
              >
                {{ tag }}
              </span>
            </div>
          </a>
        </div>

        <!-- Coming soon items -->
        <div
          v-for="(item, idx) in aiExplore.comingSoon"
          :key="item"
          v-reveal="'fade-left'"
          class="relative pl-14 pb-8 group"
        >
          <div class="absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-dashed border-[#333] bg-black" />
          <div class="flex items-center gap-3">
            <span class="text-[#6e6e73] text-sm tracking-tight group-hover:text-[#a1a1a6] transition-colors duration-200">{{ item }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[#1d1d1f] text-[#6e6e73] tracking-tight">Planned</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
