<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
import { ref } from 'vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const visibleItems = knowledge.slice(0, 3)
const hiddenItems = knowledge.slice(3)

const expanded = ref(false)

const cardGradients = [
  'from-violet-500/10 via-fuchsia-500/8 to-pink-500/6',
  'from-sky-500/10 via-cyan-500/8 to-teal-500/6',
  'from-amber-500/10 via-orange-500/8 to-rose-500/6',
  'from-emerald-500/10 via-teal-500/8 to-cyan-500/6',
  'from-pink-500/10 via-rose-500/8 to-red-500/6',
  'from-indigo-500/10 via-violet-500/8 to-purple-500/6',
  'from-teal-500/10 via-emerald-500/8 to-lime-500/6',
  'from-rose-500/10 via-pink-500/8 to-fuchsia-500/6',
  'from-blue-500/10 via-indigo-500/8 to-violet-500/6',
]

const iconColors = [
  'text-violet-500 bg-violet-500/10',
  'text-sky-500 bg-sky-500/10',
  'text-amber-500 bg-amber-500/10',
  'text-emerald-500 bg-emerald-500/10',
  'text-pink-500 bg-pink-500/10',
  'text-indigo-500 bg-indigo-500/10',
  'text-teal-500 bg-teal-500/10',
  'text-rose-500 bg-rose-500/10',
  'text-blue-500 bg-blue-500/10',
]
</script>

<template>
  <section class="py-28 px-6 bg-[#f5f5f7]">
    <div class="max-w-[980px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-4xl font-semibold text-[#1d1d1f] tracking-tighter leading-[1.1] mb-2">Knowledge Base</h2>
      <Separator class="border-[#d2d2d7] mb-10" />

      <!-- First 3 cards always visible -->
      <div v-reveal:1="'fade-up'" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          v-for="(item, idx) in visibleItems"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="relative overflow-hidden rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_30px_0px] transition-all duration-300 cursor-pointer group no-underline bg-white hover:-translate-y-1"
        >
          <!-- Colourful gradient background -->
          <div :class="['absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500', cardGradients[idx % cardGradients.length]]" />
          <!-- Pixel noise texture -->
          <div class="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" style="background-image: radial-gradient(circle, #000 0.5px, transparent 0.5px); background-size: 8px 8px;" />
          <div class="relative">
            <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[idx % iconColors.length]]">
              <Icon icon="lucide:notebook-text" class="w-4 h-4" />
            </div>
            <p class="text-[#1d1d1f] text-sm tracking-tight leading-snug group-hover:text-[#0066cc] transition-colors duration-200">{{ item.title }}</p>
          </div>
        </a>
      </div>

      <!-- Collapsible remaining items -->
      <CollapsibleRoot v-model:open="expanded">
        <CollapsibleContent>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <a
              v-for="(item, idx) in hiddenItems"
              :key="item.title"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="relative overflow-hidden rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_30px_0px] transition-all duration-300 cursor-pointer group no-underline bg-white hover:-translate-y-1"
            >
              <div :class="['absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500', cardGradients[(idx + 3) % cardGradients.length]]" />
              <div class="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" style="background-image: radial-gradient(circle, #000 0.5px, transparent 0.5px); background-size: 8px 8px;" />
              <div class="relative">
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[(idx + 3) % iconColors.length]]">
                  <Icon icon="lucide:notebook-text" class="w-4 h-4" />
                </div>
                <p class="text-[#1d1d1f] text-sm tracking-tight leading-snug group-hover:text-[#0066cc] transition-colors duration-200">{{ item.title }}</p>
              </div>
            </a>
          </div>
        </CollapsibleContent>

        <CollapsibleTrigger
          class="mt-6 text-sm text-[#0066cc] hover:text-[#1d1d1f] flex items-center gap-2 transition-colors duration-200 cursor-pointer tracking-tight"
        >
          {{ expanded ? 'Show less' : `Show ${hiddenItems.length} more` }}
        </CollapsibleTrigger>
      </CollapsibleRoot>
    </div>
  </section>
</template>
