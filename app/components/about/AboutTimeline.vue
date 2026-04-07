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
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#e8eaf0] mb-8">About</h2>

      <div class="border-l-2 border-[#252a38] ml-3 pl-6 space-y-8">
        <!-- Bio -->
        <div class="relative">
          <span class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#0d0f14]" />
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Bio</p>
          <p class="text-[#8892a4] text-sm leading-relaxed">{{ copy.bio }}</p>
        </div>

        <!-- Current Work -->
        <div class="relative">
          <span class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#0d0f14]" />
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Currently Building</p>
          <p class="text-[#8892a4] text-sm leading-relaxed">{{ copy.focus }}</p>
        </div>

        <!-- Learning -->
        <div class="relative">
          <span class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#0d0f14]" />
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Learning</p>
          <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
            <template v-for="(item, idx) in about.learning" :key="item">
              <span class="text-[#8892a4] text-sm">{{ item }}</span>
              <span v-if="idx < about.learning.length - 1" class="text-[#4a5568] text-sm">·</span>
            </template>
          </div>
        </div>

        <!-- Collaboration -->
        <div class="relative">
          <span class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#0d0f14]" />
          <p class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Open to Collaborate</p>
          <p class="text-[#8892a4] text-sm leading-relaxed">{{ about.collaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
