<script setup lang="ts">
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
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-4xl mx-auto">
      <p class="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-1">// about</p>
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-1">About Me</h2>
      <Separator class="border-[#252a38] mb-6" />

      <!-- Bio Card -->
      <div class="bg-[#13161d] border border-[#252a38] rounded-xl p-6 text-[#8892a4] leading-relaxed mb-4">
        {{ copy.bio }}
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-[#353d55] transition-colors duration-150">
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Currently Building</p>
          <p class="text-[#e8eaf0] text-sm leading-relaxed">{{ copy.focus }}</p>
        </div>

        <div class="bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-[#353d55] transition-colors duration-150">
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Learning</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.learning"
              :key="item"
              class="bg-[#1c2030] text-[#8892a4] text-xs font-mono px-2 py-1 rounded"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div class="bg-[#13161d] border border-[#252a38] rounded-xl p-5 hover:border-[#353d55] transition-colors duration-150">
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Open to Collaborate</p>
          <p class="text-[#e8eaf0] text-sm leading-relaxed">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
