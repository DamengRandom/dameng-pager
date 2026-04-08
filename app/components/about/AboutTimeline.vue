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
    <div class="max-w-[740px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-4xl font-semibold text-[#1d1d1f] tracking-tighter leading-[1.1] mb-10">About</h2>

      <div class="border-l border-[#d2d2d7] ml-2 pl-8 space-y-10">
        <!-- Bio -->
        <div v-reveal:1="'fade-left'" class="relative">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-[#f5f5f7]" />
          <p class="text-xs text-sky-500 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:user" class="w-3.5 h-3.5" /> Bio</p>
          <p class="text-[#1d1d1f] text-sm leading-relaxed tracking-tight">{{ copy.bio }}</p>
        </div>

        <!-- Current Work -->
        <div v-reveal:2="'fade-left'" class="relative">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-[#f5f5f7]" />
          <p class="text-xs text-orange-500 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:hammer" class="w-3.5 h-3.5" /> Currently Building</p>
          <p class="text-[#1d1d1f] text-sm leading-relaxed tracking-tight">{{ copy.focus }}</p>
        </div>

        <!-- Learning -->
        <div v-reveal:3="'fade-left'" class="relative">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-[#f5f5f7]" />
          <p class="text-xs text-violet-500 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:book-open" class="w-3.5 h-3.5" /> Learning</p>
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <template v-for="(item, idx) in about.learning" :key="item">
              <span class="text-[#1d1d1f] text-sm tracking-tight">{{ item }}</span>
              <span v-if="idx < about.learning.length - 1" class="text-[#d2d2d7] text-sm">·</span>
            </template>
          </div>
        </div>

        <!-- Collaboration -->
        <div v-reveal:4="'fade-left'" class="relative">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#f5f5f7]" />
          <p class="text-xs text-emerald-500 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:users" class="w-3.5 h-3.5" /> Open to Collaborate</p>
          <p class="text-[#1d1d1f] text-sm leading-relaxed tracking-tight">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
