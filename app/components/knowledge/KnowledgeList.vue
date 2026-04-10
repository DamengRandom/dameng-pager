<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[740px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">Knowledge</p>
      <h2 v-reveal:1="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">Knowledge Base</h2>
      <Separator class="border-[#333] mb-10" />

      <TooltipProvider>
        <ul>
          <li v-for="(item, idx) in knowledge" :key="item.title">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-6 py-4 border-b border-[#222] group cursor-pointer hover:border-[#555] transition-colors duration-200"
                >
                  <span class="text-xs text-[#555] w-7 shrink-0 tracking-tight">
                    {{ String(idx + 1).padStart(2, '0') }}
                  </span>
                  <span class="text-[#e0e0e0] text-sm tracking-tight flex-1 group-hover:text-white transition-colors duration-200">
                    {{ item.title }}
                  </span>
                  <Icon icon="lucide:arrow-up-right" class="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-red-500 transition-opacity duration-200" />
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
                {{ item.url }}
              </TooltipContent>
            </TooltipRoot>
          </li>
        </ul>
      </TooltipProvider>
    </div>
  </section>
</template>
