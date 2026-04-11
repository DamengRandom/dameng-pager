<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const sizeClasses = ['text-base px-5 py-2.5', 'text-sm px-4 py-2', 'text-xs px-3 py-1.5']
const hoverColors = ['hover:bg-purple-600', 'hover:bg-violet-600', 'hover:bg-fuchsia-600', 'hover:bg-indigo-600', 'hover:bg-pink-600', 'hover:bg-purple-500', 'hover:bg-violet-500', 'hover:bg-fuchsia-500', 'hover:bg-indigo-500']
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[980px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-10">Knowledge</p>

      <div v-reveal:1="'scale'" class="flex flex-wrap gap-2">
        <HoverCardRoot v-for="(item, idx) in knowledge" :key="item.title">
          <HoverCardTrigger as-child>
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'bg-white/5 text-gray-300 border border-white/10 rounded-full cursor-pointer transition-all duration-200 hover:text-white hover:border-transparent inline-flex items-center gap-1.5 hover:shadow-lg tracking-tight font-medium no-underline',
                sizeClasses[idx % 3],
                hoverColors[idx % hoverColors.length],
              ]"
            >
              <Icon icon="lucide:file-text" class="w-3.5 h-3.5" />
              {{ item.title }}
            </a>
          </HoverCardTrigger>
          <HoverCardContent
            class="bg-gray-900 border border-white/10 rounded-xl p-3 text-xs text-gray-400 max-w-xs shadow-xl z-50 tracking-tight"
          >
            {{ item.url }}
          </HoverCardContent>
        </HoverCardRoot>
      </div>
    </div>
  </section>
</template>
