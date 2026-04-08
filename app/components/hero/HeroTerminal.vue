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
  <section class="min-h-screen flex items-center bg-black px-6 relative overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#0071e3]/8 blur-[140px]" />
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/6 blur-[120px]" />
      <div class="absolute top-[50%] left-[40%] w-[250px] h-[250px] rounded-full bg-teal-500/5 blur-[80px]" />
    </div>
    <HeroAsciiBackground />
    <div class="max-w-[980px] mx-auto w-full py-20 space-y-8 relative z-10">

      <!-- Label -->
      <div class="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d1d1f] to-[#2a2a2e] text-[#6e6e73] text-xs px-3 py-1 rounded-full tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {{ meta.employment }}
      </div>

      <!-- Name -->
      <div class="space-y-2">
        <h1 class="text-6xl sm:text-7xl font-semibold text-white tracking-tighter leading-[1.07]">
          {{ meta.name }}
        </h1>
        <p class="text-2xl text-[#6e6e73] tracking-tight">{{ meta.title }}</p>
      </div>

      <!-- Tagline -->
      <p class="text-lg text-[#a1a1a6] max-w-xl leading-relaxed tracking-tight">
        {{ copy.tagline }}
      </p>

      <!-- Meta -->
      <div class="text-sm text-[#6e6e73] flex gap-2 items-center flex-wrap">
        <span>{{ meta.location }}</span>
        <span class="text-[#424245]">·</span>
        <span>@{{ meta.handle }}</span>
      </div>

      <Separator class="border-[#1d1d1f]" />

      <!-- Links -->
      <TooltipProvider>
        <div class="flex gap-4 flex-wrap">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-white text-sm tracking-tight transition-colors duration-200"
              >
                <Icon icon="simple-icons:github" class="w-4 h-4" />
                GitHub
                <Icon icon="lucide:arrow-up-right" class="w-3 h-3" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <span class="text-[#424245] text-sm">·</span>

          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-[#2997ff] hover:text-white text-sm tracking-tight transition-colors duration-200"
              >
                <Icon icon="simple-icons:linkedin" class="w-4 h-4" />
                LinkedIn
                <Icon icon="lucide:arrow-up-right" class="w-3 h-3" />
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
