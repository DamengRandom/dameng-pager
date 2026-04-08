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
  <section class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0071e3]/8 blur-[120px]" />
      <div class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
      <div class="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
    </div>
    <!-- ASCII art background -->
    <HeroAsciiBackground />
    <div class="max-w-[680px] mx-auto space-y-6 relative z-10">

      <h1 class="text-6xl sm:text-7xl font-semibold text-white tracking-tighter leading-[1.07]">
        {{ meta.name }}
      </h1>
      <p class="text-xl text-[#6e6e73] tracking-tight">{{ meta.title }}</p>

      <Separator class="w-20 mx-auto border-[#1d1d1f]" />

      <div class="text-sm text-[#6e6e73] flex items-center justify-center gap-3">
        <span>{{ meta.location }}</span>
        <span class="text-[#424245]">·</span>
        <span>{{ meta.employment }}</span>
      </div>

      <p class="text-base text-[#a1a1a6] leading-relaxed tracking-tight">
        {{ copy.tagline }}
      </p>

      <TooltipProvider>
        <div class="flex items-center justify-center gap-3 pt-2">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-gradient-to-r from-[#0071e3] to-[#00a1ff] hover:from-[#0077ed] hover:to-[#00b0ff] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 tracking-tight inline-flex items-center gap-2"
              >
                <Icon icon="simple-icons:github" class="w-4 h-4" />
                GitHub
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#0A66C2] hover:bg-[#0b77d9] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200 tracking-tight inline-flex items-center gap-2"
              >
                <Icon icon="simple-icons:linkedin" class="w-4 h-4" />
                LinkedIn
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>

    </div>
  </section>
</template>
