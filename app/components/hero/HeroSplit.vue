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
  <section class="min-h-screen flex items-center bg-black px-6 py-20 relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[130px] animate-glow-pulse" />
      <div class="absolute bottom-[-15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#0071e3]/6 blur-[120px] animate-glow-pulse" style="animation-delay: 2s" />
      <div class="absolute top-[60%] left-[-5%] w-[300px] h-[300px] rounded-full bg-rose-500/5 blur-[100px] animate-float-slow" />
    </div>
    <HeroAsciiBackground />
    <div class="max-w-[980px] mx-auto grid md:grid-cols-2 gap-20 items-center w-full relative z-10">

      <!-- Left -->
      <div v-reveal="'fade-left'" class="space-y-6">
        <h1 class="text-5xl sm:text-6xl font-semibold text-white tracking-tighter leading-[1.07]">
          {{ meta.name }}
        </h1>
        <p class="text-[#6e6e73] text-lg tracking-tight">{{ meta.title }}</p>

        <Separator class="border-[#1d1d1f]" />

        <TooltipProvider>
          <div class="flex gap-6">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="contact.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#2997ff] hover:text-white text-sm tracking-tight transition-colors duration-200"
                >
                  <Icon icon="simple-icons:github" class="w-4 h-4 inline" /> GitHub <Icon icon="lucide:arrow-up-right" class="w-3 h-3 inline" />
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
                  class="text-[#2997ff] hover:text-white text-sm tracking-tight transition-colors duration-200"
                >
                  <Icon icon="simple-icons:linkedin" class="w-4 h-4 inline" /> LinkedIn <Icon icon="lucide:arrow-up-right" class="w-3 h-3 inline" />
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
                {{ contact.linkedin }}
              </TooltipContent>
            </TooltipRoot>
          </div>
        </TooltipProvider>
      </div>

      <!-- Right -->
      <div v-reveal:2="'fade-right'" class="space-y-5">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d1d1f] to-[#2a2a2e] text-emerald-400 text-xs px-3 py-1.5 rounded-full tracking-wide">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {{ meta.employment }}
        </div>

        <div class="text-[#6e6e73] text-sm flex items-center gap-2">
          <span>{{ meta.location }}</span>
          <span class="text-[#424245]">·</span>
          <span>@{{ meta.handle }}</span>
        </div>

        <p class="text-[#a1a1a6] text-base leading-relaxed tracking-tight">
          {{ copy.tagline }}
        </p>
      </div>

    </div>
  </section>
</template>
