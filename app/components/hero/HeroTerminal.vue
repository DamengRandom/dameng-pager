<script setup lang="ts">
import HeroAsciiBackground from '~/components/hero/HeroAsciiBackground.vue'
import HeroTechCloud from '~/components/hero/HeroTechCloud.vue'
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
  <section class="min-h-screen flex items-center bg-[#050505]/80 px-6 relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-purple-900/15 blur-[140px] animate-glow-pulse" />
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-glow-pulse" style="animation-delay: 2s" />
    </div>
    <HeroAsciiBackground />
    <div class="max-w-[980px] mx-auto w-full py-20 relative z-10 grid md:grid-cols-[1fr_340px] gap-12 items-center">
     <div class="space-y-8">
      <!-- Status badge -->
      <div v-reveal="'fade-up'" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        {{ meta.employment }}
      </div>

      <!-- Name -->
      <div v-reveal:1="'fade-up'" class="space-y-2">
        <h1 class="text-6xl sm:text-7xl font-semibold text-white tracking-[-0.04em] leading-[1.07]">
          {{ meta.name }}
        </h1>
        <p class="text-2xl text-gray-400 tracking-tight">{{ meta.title }}</p>
      </div>

      <!-- Tagline -->
      <p v-reveal:2="'fade-up'" class="text-lg text-gray-500 max-w-xl leading-relaxed tracking-tight">
        {{ copy.tagline }}
      </p>

      <!-- Meta -->
      <div v-reveal:3="'fade-up'" class="text-sm text-gray-500 flex gap-2 items-center flex-wrap">
        <span>{{ meta.location }}</span>
        <span class="text-gray-700">·</span>
        <span>@{{ meta.handle }}</span>
      </div>

      <div class="w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />

      <!-- Links -->
      <TooltipProvider>
        <div v-reveal:4="'fade-up'" class="flex gap-4 flex-wrap">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full transition-transform hover:scale-105"
              >
                <Icon icon="simple-icons:github" class="w-4 h-4" />
                GitHub
                <Icon icon="lucide:arrow-right" class="w-3 h-3" />
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
                class="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white text-sm font-medium px-6 py-2.5 rounded-full backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30 btn-glow"
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

      <!-- Tech Icons Cloud -->
      <div class="hidden md:block relative h-[340px]">
        <HeroTechCloud />
      </div>
    </div>
  </section>
</template>
