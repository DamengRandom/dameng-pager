<script setup lang="ts">
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact } = props.data

const links = [
  { key: 'github', url: contact.github },
  { key: 'linkedin', url: contact.linkedin },
  { key: 'portfolio', url: contact.alternativeSite },
]
</script>

<template>
  <section class="bg-[#0d0f14] py-16 px-6">
    <div class="max-w-xl mx-auto">
      <div class="font-mono text-cyan-400 text-sm mb-6 flex items-center gap-2">
        <span>$</span>
        <span>contact --list</span>
        <span class="w-2 h-4 bg-cyan-400 animate-blink inline-block" />
      </div>

      <TooltipProvider>
        <div class="space-y-1">
          <div
            v-for="(link, idx) in links"
            :key="link.key"
          >
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 py-2 group hover:bg-[#13161d] -mx-4 px-4 rounded transition-colors"
                >
                  <span class="text-xs font-mono text-[#4a5568] w-20 shrink-0">[{{ link.key }}]</span>
                  <span class="text-[#4a5568] font-mono">→</span>
                  <span class="font-mono text-sm text-[#8892a4] group-hover:text-cyan-400 transition-colors underline-offset-4 group-hover:underline truncate">
                    {{ link.url }}
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1c2030] text-[#e8eaf0] border border-[#252a38] text-xs font-mono px-2 py-1 rounded">
                open in new tab
              </TooltipContent>
            </TooltipRoot>
            <Separator v-if="idx < links.length - 1" class="border-[#252a38]" />
          </div>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
