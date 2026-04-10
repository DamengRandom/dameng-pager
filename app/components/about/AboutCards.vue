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
  <section class="py-28 px-6 bg-black">
    <div class="max-w-[980px] mx-auto">
      <p v-reveal="'fade-up'" class="text-xs text-[#6e6e73] uppercase tracking-widest font-medium mb-2">About</p>
      <h2 v-reveal:1="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-3">About Me</h2>
      <Separator class="border-[#333] mb-10" />

      <!-- Bio -->
      <div v-reveal:2="'fade-up'" class="bg-[#111] rounded-2xl p-8 text-[#e0e0e0] leading-relaxed text-base tracking-tight mb-6 border border-[#222]">
        {{ copy.bio }}
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-reveal:3="'scale'" class="bg-[#111] rounded-2xl p-6 border border-[#222] hover:border-[#444] transition-all duration-250 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:hammer" class="w-4 h-4 text-orange-500" />
            <p class="text-xs text-orange-500 font-medium uppercase tracking-widest">Currently Building</p>
          </div>
          <p class="text-[#ccc] text-sm leading-relaxed tracking-tight">{{ copy.focus }}</p>
        </div>

        <div v-reveal:4="'scale'" class="bg-[#111] rounded-2xl p-6 border border-[#222] hover:border-[#444] transition-all duration-250 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:book-open" class="w-4 h-4 text-violet-500" />
            <p class="text-xs text-violet-500 font-medium uppercase tracking-widest">Learning</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-[#222] text-[#ccc] text-xs px-3 py-1 rounded-full tracking-tight"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div v-reveal:5="'scale'" class="bg-[#111] rounded-2xl p-6 border border-[#222] hover:border-[#444] transition-all duration-250 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:users" class="w-4 h-4 text-emerald-500" />
            <p class="text-xs text-emerald-500 font-medium uppercase tracking-widest">Open to Collaborate</p>
          </div>
          <p class="text-[#ccc] text-sm leading-relaxed tracking-tight">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
