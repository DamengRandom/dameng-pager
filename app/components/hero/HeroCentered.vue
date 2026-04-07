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
  <section class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0d0f14]">
    <h1 class="text-5xl font-bold bg-gradient-to-r from-[#e8eaf0] to-cyan-400 bg-clip-text text-transparent tracking-tight">
      {{ meta.name }}
    </h1>
    <p class="text-xl text-[#8892a4] font-mono mt-3">{{ meta.title }}</p>

    <Separator class="my-6 w-24 mx-auto border-[#252a38]" />

    <div class="text-sm text-[#8892a4] flex items-center justify-center gap-3 font-mono">
      <span>{{ meta.location }}</span>
      <span class="text-[#4a5568]">·</span>
      <span>{{ meta.employment }}</span>
    </div>

    <p class="text-base text-[#8892a4] max-w-md leading-relaxed mt-4">
      {{ copy.tagline }}
    </p>

    <TooltipProvider>
      <div class="flex items-center justify-center gap-4 mt-8">
        <TooltipRoot>
          <TooltipTrigger as-child>
            <a
              :href="contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] px-5 py-2 rounded-lg text-sm font-mono transition-all duration-[250ms]"
            >
              ⟨ github ⟩
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
              class="border border-[#252a38] hover:border-cyan-400 hover:text-cyan-400 text-[#8892a4] px-5 py-2 rounded-lg text-sm font-mono transition-all duration-[250ms]"
            >
              ⟨ linkedin ⟩
            </a>
          </TooltipTrigger>
          <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
            {{ contact.linkedin }}
          </TooltipContent>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  </section>
</template>
