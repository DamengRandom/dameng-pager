<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator } from 'reka-ui'
import { useDynamicCopy } from '~/composables/useDynamicCopy'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { about } = props.data

const { copy } = useDynamicCopy({
  tagline: '',
  bio: about.bio,
  focus: about.currentWork,
})
</script>

<template>
  <section class="py-28 px-6 bg-[#f5f5f7]">
    <div class="max-w-[980px] mx-auto">
      <p class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">About</p>
      <h2 class="text-4xl font-semibold text-[#1d1d1f] tracking-tighter leading-[1.1] mb-3">About Me</h2>
      <Separator class="border-[#d2d2d7] mb-10" />

      <!-- Bio -->
      <div class="bg-white rounded-2xl p-8 text-[#1d1d1f] leading-relaxed text-base tracking-tight mb-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px]">
        {{ copy.bio }}
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_20px_0px] transition-shadow duration-250">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:hammer" class="w-4 h-4 text-orange-500" />
            <p class="text-xs text-orange-500 font-medium uppercase tracking-widest">Currently Building</p>
          </div>
          <p class="text-[#1d1d1f] text-sm leading-relaxed tracking-tight">{{ copy.focus }}</p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_20px_0px] transition-shadow duration-250">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:book-open" class="w-4 h-4 text-violet-500" />
            <p class="text-xs text-violet-500 font-medium uppercase tracking-widest">Learning</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-[#f5f5f7] text-[#1d1d1f] text-xs px-3 py-1 rounded-full tracking-tight"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-[rgba(0,0,0,0.04)_0px_2px_12px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_20px_0px] transition-shadow duration-250">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:users" class="w-4 h-4 text-emerald-500" />
            <p class="text-xs text-emerald-500 font-medium uppercase tracking-widest">Open to Collaborate</p>
          </div>
          <p class="text-[#1d1d1f] text-sm leading-relaxed tracking-tight">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
