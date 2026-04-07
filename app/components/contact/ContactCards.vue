<script setup lang="ts">
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact, meta } = props.data
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-1">Contact</h2>
      <Separator class="border-[#252a38] mb-8" />

      <TooltipProvider>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- GitHub -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#13161d] border border-[#252a38] rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-lg bg-[#1c2030] group-hover:bg-[#00d4ff26] flex items-center justify-center text-[#8892a4] group-hover:text-cyan-400 transition-all font-bold text-sm font-mono shrink-0">
                  GH
                </div>
                <div>
                  <p class="text-[#e8eaf0] text-sm font-semibold">GitHub</p>
                  <p class="text-[#8892a4] text-xs font-mono">{{ meta.handle }}</p>
                </div>
                <span class="ml-auto text-[#4a5568] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all text-sm">→</span>
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <!-- LinkedIn -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#13161d] border border-[#252a38] rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-lg bg-[#1c2030] group-hover:bg-[#00d4ff26] flex items-center justify-center text-[#8892a4] group-hover:text-cyan-400 transition-all font-bold text-sm font-mono shrink-0">
                  in
                </div>
                <div>
                  <p class="text-[#e8eaf0] text-sm font-semibold">LinkedIn</p>
                  <p class="text-[#8892a4] text-xs font-mono">{{ meta.name }}</p>
                </div>
                <span class="ml-auto text-[#4a5568] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all text-sm">→</span>
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>

          <!-- Portfolio - full width -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.alternativeSite"
                target="_blank"
                rel="noopener noreferrer"
                class="sm:col-span-2 bg-[#13161d] border border-[#252a38] rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-[#1c2030] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-lg bg-[#1c2030] group-hover:bg-[#00d4ff26] flex items-center justify-center text-[#8892a4] group-hover:text-cyan-400 transition-all font-bold text-sm font-mono shrink-0">
                  ↗
                </div>
                <div>
                  <p class="text-[#e8eaf0] text-sm font-semibold">Portfolio Site</p>
                  <p class="text-[#8892a4] text-xs font-mono">{{ contact.alternativeSite }}</p>
                </div>
                <span class="ml-auto text-[#4a5568] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all text-sm">→</span>
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
              {{ contact.alternativeSite }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
