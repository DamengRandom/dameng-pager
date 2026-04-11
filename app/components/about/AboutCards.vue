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
    <div class="max-w-[980px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
        About <span class="text-purple-400">Me</span>
      </h2>
      <div class="w-full h-px bg-gradient-to-r from-purple-900/50 via-transparent to-transparent mb-10" />

      <!-- Bio -->
      <div v-reveal:1="'fade-up'" class="glass-card rounded-2xl p-8 text-gray-400 leading-relaxed text-base tracking-tight mb-6">
        {{ copy.bio }}
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-reveal:2="'scale'" class="glass-card rounded-2xl p-6 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:hammer" class="w-4 h-4 text-purple-400" />
            <p class="text-xs text-purple-400 font-medium uppercase tracking-widest">Currently Building</p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed tracking-tight">{{ copy.focus }}</p>
        </div>

        <div v-reveal:3="'scale'" class="glass-card rounded-2xl p-6 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:book-open" class="w-4 h-4 text-indigo-400" />
            <p class="text-xs text-indigo-400 font-medium uppercase tracking-widest">Learning</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full tracking-tight"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div v-reveal:4="'scale'" class="glass-card rounded-2xl p-6 hover-lift">
          <div class="flex items-center gap-2 mb-3">
            <Icon icon="lucide:users" class="w-4 h-4 text-fuchsia-400" />
            <p class="text-xs text-fuchsia-400 font-medium uppercase tracking-widest">Open to Collaborate</p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed tracking-tight">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
