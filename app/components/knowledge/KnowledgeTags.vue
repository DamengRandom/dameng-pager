<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const sizeClasses = ['text-base px-5 py-2.5', 'text-sm px-4 py-2', 'text-xs px-3 py-1.5']
const hoverColors = ['hover:bg-sky-500', 'hover:bg-violet-500', 'hover:bg-emerald-500', 'hover:bg-pink-500', 'hover:bg-amber-500', 'hover:bg-indigo-500', 'hover:bg-rose-500', 'hover:bg-teal-500', 'hover:bg-orange-500']
</script>

<template>
  <section class="py-28 px-6 bg-[#f5f5f7]">
    <div class="max-w-[980px] mx-auto">
      <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-10">Knowledge</p>

      <div class="flex flex-wrap gap-2">
        <HoverCardRoot v-for="(item, idx) in knowledge" :key="item.title">
          <HoverCardTrigger as-child>
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'bg-white text-[#1d1d1f] rounded-full cursor-pointer transition-all duration-200 hover:text-white inline-flex items-center gap-1.5 shadow-[rgba(0,0,0,0.04)_0px_2px_8px_0px] hover:shadow-lg tracking-tight font-medium no-underline',
                sizeClasses[idx % 3],
                hoverColors[idx % hoverColors.length],
              ]"
            >
              <Icon icon="lucide:file-text" class="w-3.5 h-3.5" />
              {{ item.title }}
            </a>
          </HoverCardTrigger>
          <HoverCardContent
            class="bg-[#1d1d1f] rounded-xl p-3 text-xs text-[#a1a1a6] max-w-xs shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px] z-50 tracking-tight border-0"
          >
            {{ item.url }}
          </HoverCardContent>
        </HoverCardRoot>
      </div>
    </div>
  </section>
</template>
