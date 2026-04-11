<script setup lang="ts">
import HeroAsciiBackground from '~/components/hero/HeroAsciiBackground.vue'
import { Icon } from '@iconify/vue'
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
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
  <section class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#050505]/80 relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      <div class="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] animate-glow-pulse" style="animation-delay: 2s" />
    </div>
    <HeroAsciiBackground />

    <div class="max-w-4xl mx-auto space-y-8 relative z-10">
      <!-- Status badge -->
      <div v-reveal="'blur'" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        {{ meta.employment }}
      </div>

      <h1 v-reveal:1="'blur'" class="text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-[-0.04em] leading-[1.1]">
        {{ meta.name }}
      </h1>

      <p v-reveal:2="'fade-up'" class="text-xl md:text-3xl font-light text-gray-400 tracking-tight">
        {{ meta.title }} <br class="hidden md:block" />
        <span class="text-gradient font-medium">{{ copy.tagline }}</span>
      </p>

      <p v-reveal:3="'fade-up'" class="text-sm text-gray-500">
        {{ meta.location }} · @{{ meta.handle }}
      </p>

      <TooltipProvider>
        <div v-reveal:4="'fade-up'" class="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-8 py-3 rounded-full transition-transform hover:scale-105"
              >
                <Icon icon="simple-icons:github" class="w-4 h-4" />
                GitHub
                <Icon icon="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30 btn-glow"
              >
                <span class="relative z-10 inline-flex items-center gap-2">
                  <Icon icon="simple-icons:linkedin" class="w-4 h-4" />
                  LinkedIn
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <Icon icon="lucide:chevrons-down" class="text-white text-2xl" />
    </div>
  </section>
</template>
