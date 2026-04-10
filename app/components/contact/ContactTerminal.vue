<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact } = props.data

const links = [
  { key: 'github', url: contact.github, icon: 'simple-icons:github' },
  { key: 'linkedin', url: contact.linkedin, icon: 'simple-icons:linkedin' },
  { key: 'portfolio', url: contact.alternativeSite, icon: 'lucide:globe' },
]
</script>

<template>
  <section class="bg-black py-20 px-6 border-t border-[#333]">
    <div class="max-w-[580px] mx-auto">

      <div v-reveal="'fade-up'" class="flex items-center gap-2 mb-8">
        <span class="text-[#6e6e73] text-sm tracking-tight">Contact</span>
        <span class="text-[#424245]">·</span>
        <span class="text-[#424245] text-xs tracking-tight">3 links</span>
      </div>

      <TooltipProvider>
        <div v-reveal:1="'fade-up'" class="space-y-px">
          <div v-for="(link, idx) in links" :key="link.key">
            <TooltipRoot>
              <TooltipTrigger as-child>
                <a
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-5 py-3.5 group hover:bg-[#1d1d1f] -mx-4 px-4 rounded-xl transition-colors duration-200"
                >
                  <span class="text-xs text-[#424245] w-20 shrink-0 tracking-tight font-medium">{{ link.key }}</span>
                  <Icon :icon="link.icon" class="w-3.5 h-3.5 text-[#6e6e73]" />
                  <span class="text-sm text-[#6e6e73] group-hover:text-[#2997ff] transition-colors duration-200 underline-offset-4 group-hover:underline truncate tracking-tight">
                    {{ link.url }}
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
                Open in new tab
              </TooltipContent>
            </TooltipRoot>
            <Separator v-if="idx < links.length - 1" class="border-[#1d1d1f]" />
          </div>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
