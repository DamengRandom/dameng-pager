<script setup lang="ts">
import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { knowledge } = props.data

const sizeClasses = ['text-base px-5 py-2.5', 'text-sm px-4 py-2', 'text-xs px-3 py-1.5']
const colorClasses = [
  'border-cyan-400/30 text-cyan-400 bg-[#00d4ff0d] hover:bg-[#00d4ff26]',
  'border-purple-500/30 text-purple-400 bg-[#a855f70d] hover:bg-[#a855f726]',
  'border-[#252a38] text-[#8892a4] bg-[#13161d] hover:border-[#353d55]',
]
</script>

<template>
  <section class="py-24 px-6 bg-[#0d0f14]">
    <div class="max-w-4xl mx-auto">
      <p class="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-8">// knowledge</p>

      <HoverCardRoot v-for="(item, idx) in knowledge" :key="item">
        <HoverCardTrigger as-child>
          <span
            :class="[
              'font-mono rounded-full border cursor-default transition-all duration-200 hover:scale-105 inline-flex items-center m-1.5',
              sizeClasses[idx % 3],
              colorClasses[idx % 3],
            ]"
          >
            {{ item }}
          </span>
        </HoverCardTrigger>
        <HoverCardContent
          class="bg-[#1c2030] border border-[#252a38] rounded-xl p-3 text-xs font-mono text-[#8892a4] max-w-xs shadow-lg z-50"
        >
          Personal study note in Damon's knowledge base
        </HoverCardContent>
      </HoverCardRoot>
    </div>
  </section>
</template>
