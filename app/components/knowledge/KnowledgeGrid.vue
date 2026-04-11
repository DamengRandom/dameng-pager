<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
import { ref } from 'vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const visibleItems = knowledge.slice(0, 3)
const hiddenItems = knowledge.slice(3)

const expanded = ref(false)

const accentColors = [
  'group-hover:border-purple-500/50',
  'group-hover:border-violet-500/50',
  'group-hover:border-fuchsia-500/50',
  'group-hover:border-indigo-500/50',
  'group-hover:border-pink-500/50',
  'group-hover:border-purple-400/50',
  'group-hover:border-violet-400/50',
  'group-hover:border-fuchsia-400/50',
  'group-hover:border-indigo-400/50',
]

const iconColors = [
  'text-purple-400 bg-purple-500/10',
  'text-violet-400 bg-violet-500/10',
  'text-fuchsia-400 bg-fuchsia-500/10',
  'text-indigo-400 bg-indigo-500/10',
  'text-pink-400 bg-pink-500/10',
  'text-purple-300 bg-purple-500/10',
  'text-violet-300 bg-violet-500/10',
  'text-fuchsia-300 bg-fuchsia-500/10',
  'text-indigo-300 bg-indigo-500/10',
]
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[980px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1] mb-2">Knowledge Base</h2>
      <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent mb-10" />

      <div v-reveal:1="'fade-up'" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          v-for="(item, idx) in visibleItems"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer group no-underline glass-card hover:-translate-y-1',
            accentColors[idx % accentColors.length],
          ]"
        >
          <div class="relative">
            <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[idx % iconColors.length]]">
              <Icon icon="lucide:notebook-text" class="w-4 h-4" />
            </div>
            <p class="text-gray-300 text-sm tracking-tight leading-snug group-hover:text-white transition-colors duration-200">{{ item.title }}</p>
          </div>
        </a>
      </div>

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
                'relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer group no-underline glass-card hover:-translate-y-1',
                accentColors[(idx + 3) % accentColors.length],
              ]"
            >
              <div class="relative">
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300', iconColors[(idx + 3) % iconColors.length]]">
                  <Icon icon="lucide:notebook-text" class="w-4 h-4" />
                </div>
                <p class="text-gray-300 text-sm tracking-tight leading-snug group-hover:text-white transition-colors duration-200">{{ item.title }}</p>
              </div>
            </a>
          </div>
        </CollapsibleContent>

        <CollapsibleTrigger
          class="mt-6 text-sm text-gray-500 hover:text-purple-400 flex items-center gap-2 transition-colors duration-200 cursor-pointer tracking-tight"
        >
          {{ expanded ? 'Show less' : `Show ${hiddenItems.length} more` }}
        </CollapsibleTrigger>
      </CollapsibleRoot>
    </div>
  </section>
</template>
