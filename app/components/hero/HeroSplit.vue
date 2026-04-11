<script setup lang="ts">
import HeroAsciiBackground from '~/components/hero/HeroAsciiBackground.vue'
import { Icon } from '@iconify/vue'
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import { useDynamicCopy } from '~/composables/useDynamicCopy'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { meta, contact } = props.data

const { copy } = useDynamicCopy({
  tagline: meta.tagline,
  bio: '',
  focus: '',
})
</script>

<template>
  <section class="min-h-screen flex items-center bg-[#050505]/80 px-6 py-20 relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[130px] animate-glow-pulse" />
      <div class="absolute bottom-[-15%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-glow-pulse" style="animation-delay: 2s" />
    </div>
    <HeroAsciiBackground />
    <div class="max-w-[980px] mx-auto grid md:grid-cols-2 gap-20 items-center w-full relative z-10">

      <!-- Left -->
      <div v-reveal="'fade-left'" class="space-y-6">
        <h1 class="text-5xl sm:text-6xl font-semibold text-white tracking-[-0.04em] leading-[1.07]">
          {{ meta.name }}
        </h1>
        <p class="text-gray-400 text-lg tracking-tight">{{ meta.title }}</p>

        <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent" />

        <TooltipProvider>
          <div class="flex gap-4">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="contact.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-purple-400 hover:text-white text-sm tracking-tight transition-colors duration-200"
                >
                  <Icon icon="simple-icons:github" class="w-4 h-4" /> GitHub <Icon icon="lucide:arrow-up-right" class="w-3 h-3" />
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
                {{ contact.github }}
              </TooltipContent>
            </TooltipRoot>

            <span class="text-gray-700 text-sm">·</span>

            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="contact.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-purple-400 hover:text-white text-sm tracking-tight transition-colors duration-200"
                >
                  <Icon icon="simple-icons:linkedin" class="w-4 h-4" /> LinkedIn <Icon icon="lucide:arrow-up-right" class="w-3 h-3" />
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
                {{ contact.linkedin }}
              </TooltipContent>
            </TooltipRoot>
          </div>
        </TooltipProvider>
      </div>

      <!-- Right -->
      <div v-reveal:2="'fade-right'" class="space-y-5">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {{ meta.employment }}
        </div>

        <div class="text-gray-500 text-sm flex items-center gap-2">
          <span>{{ meta.location }}</span>
          <span class="text-gray-700">·</span>
          <span>@{{ meta.handle }}</span>
        </div>

        <p class="text-gray-400 text-base leading-relaxed tracking-tight">
          {{ copy.tagline }}
        </p>
      </div>

    </div>
  </section>
</template>
