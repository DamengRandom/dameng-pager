<script setup lang="ts">
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact } = props.data
</script>

<template>
  <section class="bg-[#13161d] border-t border-[#252a38] py-20 px-6">
    <div class="max-w-2xl mx-auto text-center space-y-6">
      <h2 class="text-3xl font-bold text-[#e8eaf0]">Let's build something.</h2>
      <p class="text-[#8892a4] text-base">Find me on GitHub or LinkedIn.</p>

      <TooltipProvider>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-cyan-400 hover:bg-cyan-300 text-[#0d0f14] font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-150"
              >
                GitHub →
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
                class="border border-[#353d55] hover:border-cyan-400 text-[#8892a4] hover:text-cyan-400 text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-150"
              >
                LinkedIn →
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>
        </div>

        <div class="mt-4">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.alternativeSite"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-mono text-[#4a5568] hover:text-[#8892a4] transition-colors underline-offset-4 hover:underline"
              >
                {{ contact.alternativeSite }}
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              Portfolio site
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
