<script setup lang="ts">
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
  <section class="min-h-screen flex items-center bg-[#0d0f14] px-6 py-16">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
      <!-- Left Column -->
      <div class="border-l-2 border-cyan-400 pl-6 space-y-4">
        <h1 class="text-5xl font-bold text-[#e8eaf0] leading-tight">
          {{ meta.name }}
        </h1>
        <p class="text-[#8892a4] text-lg font-mono">{{ meta.handle }}</p>

        <Separator class="border-[#252a38] my-4" />

        <TooltipProvider>
          <div class="flex gap-4 flex-wrap">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="contact.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#8892a4] hover:text-cyan-400 font-mono text-sm transition-colors duration-150"
                >
                  github ↗
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
                {{ contact.github }}
              </TooltipContent>
            </TooltipRoot>

            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="contact.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#8892a4] hover:text-cyan-400 font-mono text-sm transition-colors duration-150"
                >
                  linkedin ↗
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
                {{ contact.linkedin }}
              </TooltipContent>
            </TooltipRoot>
          </div>
        </TooltipProvider>
      </div>

      <!-- Right Column -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 bg-[#00d4ff26] text-cyan-400 text-xs font-mono px-3 py-1 rounded-full">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {{ meta.title }}
        </div>

        <div class="text-[#8892a4] text-sm flex items-center gap-2 font-mono">
          <span>📍</span>
          <span>{{ meta.location }}</span>
          <span class="text-[#4a5568]">·</span>
          <span>{{ meta.employment }}</span>
        </div>

        <p class="text-[#8892a4] text-base leading-relaxed">
          {{ copy.tagline }}
        </p>
      </div>
    </div>
  </section>
</template>
