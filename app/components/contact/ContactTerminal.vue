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
  <section class="bg-[#050505]/80 py-20 px-6 border-t border-white/5 relative">
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    <div class="max-w-[580px] mx-auto">

      <div v-reveal="'fade-up'" class="flex items-center gap-2 mb-8">
        <span class="text-gray-500 text-sm tracking-tight">Contact</span>
        <span class="text-gray-700">·</span>
        <span class="text-gray-600 text-xs tracking-tight">3 links</span>
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
                  class="flex items-center gap-5 py-3.5 group hover:bg-white/5 -mx-4 px-4 rounded-xl transition-colors duration-200"
                >
                  <span class="text-xs text-gray-600 w-20 shrink-0 tracking-tight font-medium">{{ link.key }}</span>
                  <Icon :icon="link.icon" class="w-3.5 h-3.5 text-gray-500" />
                  <span class="text-sm text-gray-500 group-hover:text-purple-400 transition-colors duration-200 underline-offset-4 group-hover:underline truncate tracking-tight">
                    {{ link.url }}
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
                Open in new tab
              </TooltipContent>
            </TooltipRoot>
            <Separator v-if="idx < links.length - 1" class="border-white/5" />
          </div>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
