<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact, meta } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-[#050505]/80 border-t border-white/5 relative overflow-hidden">
    <!-- Glow background -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.15)_0%,_transparent_70%)] pointer-events-none" />
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

    <div class="max-w-[580px] mx-auto relative z-10">
      <h2 v-reveal="'fade-up'" class="text-4xl md:text-5xl font-semibold text-white tracking-[-0.04em] leading-[1.1] mb-4 text-center">Let's Connect</h2>
      <p class="text-gray-400 text-center mb-10 text-sm">Open to collaborations and building impactful projects.</p>

      <TooltipProvider>
        <div v-reveal:1="'scale'" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="glass-card rounded-2xl p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-200 shrink-0">
                  <Icon icon="simple-icons:github" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">GitHub</p>
                  <p class="text-gray-500 text-xs tracking-tight">{{ meta.handle }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-gray-700 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="glass-card rounded-2xl p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-blue-600/20 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-all duration-200 shrink-0">
                  <Icon icon="simple-icons:linkedin" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">LinkedIn</p>
                  <p class="text-gray-500 text-xs tracking-tight">{{ meta.name }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-gray-700 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.alternativeSite"
                target="_blank"
                rel="noopener noreferrer"
                class="sm:col-span-2 glass-card rounded-2xl p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-purple-500/20 flex items-center justify-center text-gray-400 group-hover:text-purple-400 transition-all duration-200 shrink-0">
                  <Icon icon="lucide:globe" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">Portfolio Site</p>
                  <p class="text-gray-500 text-xs tracking-tight">{{ contact.alternativeSite }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-gray-700 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-gray-900 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg">
              {{ contact.alternativeSite }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
