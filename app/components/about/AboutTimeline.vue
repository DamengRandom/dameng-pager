<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
  <section class="py-28 px-6 bg-[#050505]/80">
    <div class="max-w-[740px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-4xl font-semibold text-white tracking-tight leading-[1.1] mb-10">About</h2>

      <div class="border-l border-white/10 ml-2 pl-8 space-y-10">
        <div v-reveal:1="'fade-left'" class="relative group">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#050505] group-hover:shadow-[0_0_10px_#a855f7] transition-shadow" />
          <p class="text-xs text-purple-400 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:user" class="w-3.5 h-3.5" /> Bio</p>
          <p class="text-gray-400 text-sm leading-relaxed tracking-tight">{{ copy.bio }}</p>
        </div>

        <div v-reveal:2="'fade-left'" class="relative group">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-[#050505] group-hover:shadow-[0_0_10px_#6366f1] transition-shadow" />
          <p class="text-xs text-indigo-400 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:hammer" class="w-3.5 h-3.5" /> Currently Building</p>
          <p class="text-gray-400 text-sm leading-relaxed tracking-tight">{{ copy.focus }}</p>
        </div>

        <div v-reveal:3="'fade-left'" class="relative group">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-[#050505] group-hover:shadow-[0_0_10px_#d946ef] transition-shadow" />
          <p class="text-xs text-fuchsia-400 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:book-open" class="w-3.5 h-3.5" /> Learning</p>
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <template v-for="(item, idx) in about.learning" :key="item">
              <span class="text-gray-400 text-sm tracking-tight">{{ item }}</span>
              <span v-if="idx < about.learning.length - 1" class="text-gray-600 text-sm">·</span>
            </template>
          </div>
        </div>

        <div v-reveal:4="'fade-left'" class="relative group">
          <span class="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-[#050505] group-hover:shadow-[0_0_10px_#8b5cf6] transition-shadow" />
          <p class="text-xs text-violet-400 font-medium uppercase tracking-widest mb-2 flex items-center gap-1.5"><Icon icon="lucide:users" class="w-3.5 h-3.5" /> Open to Collaborate</p>
          <p class="text-gray-400 text-sm leading-relaxed tracking-tight">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
