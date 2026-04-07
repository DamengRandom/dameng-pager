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
  <section
    class="min-h-screen flex items-center bg-[#0d0f14] px-6"
    style="background-image: radial-gradient(ellipse at top left, #00d4ff08 0%, transparent 60%)"
  >
    <div class="max-w-2xl mx-auto space-y-6 py-16">
      <!-- Prompt -->
      <div class="font-mono text-cyan-400 text-sm mb-2 flex items-center gap-2">
        <span>&gt; whoami</span>
        <span class="w-2 h-4 bg-cyan-400 animate-blink inline-block" />
      </div>

      <!-- Name -->
      <div class="space-y-1">
        <h1 class="text-5xl font-bold tracking-tight text-[#e8eaf0] font-mono">
          {{ meta.name }}
        </h1>
        <p class="text-cyan-400 font-mono text-2xl">@{{ meta.handle }}</p>
      </div>

      <!-- Meta -->
      <div class="text-[#8892a4] font-mono text-sm flex gap-3 flex-wrap items-center">
        <span>{{ meta.title }}</span>
        <span class="text-[#4a5568]">·</span>
        <span>{{ meta.employment }}</span>
        <span class="text-[#4a5568]">·</span>
        <span>{{ meta.location }}</span>
      </div>

      <!-- Tagline -->
      <p class="border border-[#252a38] rounded px-4 py-2 font-mono text-sm text-[#8892a4] italic">
        "{{ copy.tagline }}"
      </p>

      <Separator class="border-[#252a38]" />

      <!-- Links -->
      <TooltipProvider>
        <div class="flex gap-4 mt-2">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors duration-150 underline-offset-4 hover:underline"
              >
                [ github ]
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
                class="text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors duration-150 underline-offset-4 hover:underline"
              >
                [ linkedin ]
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
