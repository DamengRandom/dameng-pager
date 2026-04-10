<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Separator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from 'reka-ui'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { contact, meta } = props.data
</script>

<template>
  <section class="py-28 px-6 bg-black border-t border-[#333]">
    <div class="max-w-[580px] mx-auto">
      <h2 v-reveal="'fade-up'" class="text-4xl font-semibold text-white tracking-tighter leading-[1.1] mb-2">Contact</h2>
      <Separator class="border-[#1d1d1f] mb-10" />

      <TooltipProvider>
        <div v-reveal:1="'scale'" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- GitHub -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.github"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#1d1d1f] rounded-2xl p-6 flex items-center gap-4 hover:bg-[#272729] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-[#272729] group-hover:bg-[#24292e] flex items-center justify-center text-[#6e6e73] group-hover:text-white transition-all duration-200 shrink-0">
                  <Icon icon="simple-icons:github" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">GitHub</p>
                  <p class="text-[#6e6e73] text-xs tracking-tight">{{ meta.handle }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-[#424245] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.github }}
            </TooltipContent>
          </TooltipRoot>

          <!-- LinkedIn -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#1d1d1f] rounded-2xl p-6 flex items-center gap-4 hover:bg-[#272729] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-[#272729] group-hover:bg-[#0A66C2] flex items-center justify-center text-[#6e6e73] group-hover:text-white transition-all duration-200 shrink-0">
                  <Icon icon="simple-icons:linkedin" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">LinkedIn</p>
                  <p class="text-[#6e6e73] text-xs tracking-tight">{{ meta.name }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-[#424245] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.linkedin }}
            </TooltipContent>
          </TooltipRoot>

          <!-- Portfolio - full width -->
          <TooltipRoot>
            <TooltipTrigger as-child>
              <a
                :href="contact.alternativeSite"
                target="_blank"
                rel="noopener noreferrer"
                class="sm:col-span-2 bg-[#1d1d1f] rounded-2xl p-6 flex items-center gap-4 hover:bg-[#272729] transition-all duration-200 group cursor-pointer"
              >
                <div class="w-10 h-10 rounded-xl bg-[#272729] group-hover:bg-emerald-500 flex items-center justify-center text-[#6e6e73] group-hover:text-white transition-all duration-200 shrink-0">
                  <Icon icon="lucide:globe" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-white text-sm font-medium tracking-tight">Portfolio Site</p>
                  <p class="text-[#6e6e73] text-xs tracking-tight">{{ contact.alternativeSite }}</p>
                </div>
                <Icon icon="lucide:arrow-right" class="ml-auto w-4 h-4 text-[#424245] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </TooltipTrigger>
            <TooltipContent class="bg-[#1d1d1f] text-white border-0 text-xs px-3 py-1.5 rounded-lg shadow-[rgba(0,0,0,0.22)_3px_5px_30px_0px]">
              {{ contact.alternativeSite }}
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  </section>
</template>
