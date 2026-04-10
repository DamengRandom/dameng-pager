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

const accentColors = [
  'group-hover:border-red-500/50',
  'group-hover:border-violet-500/50',
  'group-hover:border-emerald-500/50',
  'group-hover:border-sky-500/50',
  'group-hover:border-pink-500/50',
  'group-hover:border-amber-500/50',
  'group-hover:border-indigo-500/50',
  'group-hover:border-teal-500/50',
  'group-hover:border-rose-500/50',
]

const iconColors = [
  'text-red-500 bg-red-500/10',
  'text-violet-500 bg-violet-500/10',
  'text-emerald-500 bg-emerald-500/10',
  'text-sky-500 bg-sky-500/10',
  'text-pink-500 bg-pink-500/10',
  'text-amber-500 bg-amber-500/10',
  'text-indigo-500 bg-indigo-500/10',
  'text-teal-500 bg-teal-500/10',
  'text-rose-500 bg-rose-500/10',
]
</script>

<template>
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[980px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">Knowledge Base</h2>
      <Separator class="border-[#333] mb-10" />

      <!-- First 3 cards always visible -->
      <div v-reveal:1="'fade-up'" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          v-for="(item, idx) in visibleItems"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer group no-underline bg-[#0a0a0a] border border-[#1d1d1f] hover:border-[#333] hover:-translate-y-1',
            accentColors[idx % accentColors.length],
          ]"
        >
          <div class="relative">
            <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[idx % iconColors.length]]">
              <Icon icon="lucide:notebook-text" class="w-4 h-4" />
            </div>
            <p class="text-[#e0e0e0] text-sm tracking-tight leading-snug group-hover:text-white transition-colors duration-200">{{ item.title }}</p>
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
              :class="[
                'relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer group no-underline bg-[#0a0a0a] border border-[#1d1d1f] hover:border-[#333] hover:-translate-y-1',
                accentColors[(idx + 3) % accentColors.length],
              ]"
            >
              <div class="relative">
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[(idx + 3) % iconColors.length]]">
                  <Icon icon="lucide:notebook-text" class="w-4 h-4" />
                </div>
                <p class="text-[#e0e0e0] text-sm tracking-tight leading-snug group-hover:text-white transition-colors duration-200">{{ item.title }}</p>
              </div>
            </a>
          </div>
        </CollapsibleContent>

        <CollapsibleTrigger
          class="mt-6 text-sm text-[#888] hover:text-white flex items-center gap-2 transition-colors duration-200 cursor-pointer tracking-tight"
        >
          {{ expanded ? 'Show less' : `Show ${hiddenItems.length} more` }}
        </CollapsibleTrigger>
      </CollapsibleRoot>
    </div>
  </section>
</template>
