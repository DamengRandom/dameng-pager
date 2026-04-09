<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { aiExplore } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-black relative overflow-hidden">
    <!-- Dot matrix background -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px); background-size: 24px 24px;" />

    <div class="max-w-[980px] mx-auto relative">
      <div v-reveal="'fade-up'" class="text-center mb-14">
        <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-3">AI Explore</p>
        <h2 class="text-4xl font-semibold text-white tracking-tighter leading-[1.1]">Exploring the AI frontier</h2>
      </div>

      <!-- Project grid (variant.com/community inspired) -->
      <div v-reveal:1="'scale'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          v-for="project in aiExplore.projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative rounded-2xl border border-[#1d1d1f] hover:border-[#333] bg-[#0a0a0a] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-0.5"
        >
          <!-- Top gradient bar -->
          <div class="h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="p-7">
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/15 to-blue-500/15 flex items-center justify-center">
                <Icon :icon="project.icon" class="w-5 h-5 text-violet-400" />
              </div>
              <Icon icon="lucide:arrow-up-right" class="w-4 h-4 text-[#333] group-hover:text-[#6e6e73] transition-colors duration-200" />
            </div>
            <h3 class="text-white text-base font-medium tracking-tight mb-2">{{ project.name }}</h3>
            <p class="text-[#6e6e73] text-sm leading-relaxed tracking-tight mb-5">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-full bg-[#1d1d1f] text-[#6e6e73] tracking-tight"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>

        <!-- Coming soon placeholder cards -->
        <div
          v-for="item in aiExplore.comingSoon"
          :key="item"
          class="group rounded-2xl border border-dashed border-[#1d1d1f] hover:border-[#333] bg-transparent overflow-hidden transition-all duration-300"
        >
          <div class="h-1 bg-gradient-to-r from-[#1d1d1f] to-[#1d1d1f]" />
          <div class="p-7 flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-lg bg-[#111] flex items-center justify-center mb-4">
                <Icon icon="lucide:sparkles" class="w-5 h-5 text-[#333] group-hover:text-[#6e6e73] transition-colors duration-200" />
              </div>
              <p class="text-[#6e6e73] text-sm tracking-tight group-hover:text-[#a1a1a6] transition-colors duration-200">{{ item }}</p>
            </div>
            <span class="text-[10px] text-[#333] uppercase tracking-widest mt-4">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
