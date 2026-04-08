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
</script>

<template>
  <section class="py-28 px-6 bg-[#f5f5f7]">
    <div class="max-w-[980px] mx-auto">
      <h2 class="text-4xl font-semibold text-[#1d1d1f] tracking-tighter leading-[1.1] mb-2">Knowledge Base</h2>
      <Separator class="border-[#d2d2d7] mb-10" />

      <!-- First 3 cards always visible -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          v-for="item in visibleItems"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_20px_0px] transition-shadow duration-250 cursor-pointer group no-underline"
        >
          <div class="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
            <Icon icon="lucide:notebook-text" class="w-4 h-4 text-violet-500" />
          </div>
          <p class="text-[#1d1d1f] text-sm tracking-tight leading-snug group-hover:text-[#0066cc] transition-colors duration-200">{{ item.title }}</p>
        </a>
      </div>

      <!-- Collapsible remaining items -->
      <CollapsibleRoot v-model:open="expanded">
        <CollapsibleContent>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <a
              v-for="item in hiddenItems"
              :key="item.title"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_20px_0px] transition-shadow duration-250 cursor-pointer group no-underline"
            >
              <div class="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                <Icon icon="lucide:notebook-text" class="w-4 h-4 text-violet-500" />
              </div>
              <p class="text-[#1d1d1f] text-sm tracking-tight leading-snug group-hover:text-[#0066cc] transition-colors duration-200">{{ item.title }}</p>
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
