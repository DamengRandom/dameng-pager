<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { aiExplore } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-black relative overflow-hidden">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;" />

    <div class="max-w-[980px] mx-auto relative">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">AI Explore</p>
      <h2 v-reveal:1="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">Building with AI</h2>
      <Separator class="border-[#1d1d1f] mb-10" />

      <!-- Project cards -->
      <div v-reveal:2="'fade-up'" class="grid grid-cols-1 gap-5">
        <a
          v-for="project in aiExplore.projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-2xl border border-[#1d1d1f] hover:border-[#333] bg-[#0a0a0a] p-8 transition-all duration-300 no-underline hover:-translate-y-0.5"
        >
          <!-- Gradient glow on hover -->
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div class="relative flex items-start gap-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center shrink-0 group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-colors duration-300">
              <Icon :icon="project.icon" class="w-6 h-6 text-violet-400" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-white text-lg font-medium tracking-tight">{{ project.name }}</h3>
                <Icon icon="lucide:arrow-up-right" class="w-4 h-4 text-[#6e6e73] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <p class="text-[#a1a1a6] text-sm leading-relaxed tracking-tight mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] px-2.5 py-1 rounded-full bg-[#1d1d1f] text-[#6e6e73] group-hover:text-[#a1a1a6] transition-colors duration-200 tracking-tight"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Coming soon -->
      <div v-reveal:3="'fade-up'" class="mt-10">
        <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-5">Coming Soon</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            v-for="item in aiExplore.comingSoon"
            :key="item"
            class="rounded-xl border border-dashed border-[#1d1d1f] p-5 group hover:border-[#333] transition-colors duration-200"
          >
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
              <span class="text-[#6e6e73] text-sm tracking-tight group-hover:text-[#a1a1a6] transition-colors duration-200">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
