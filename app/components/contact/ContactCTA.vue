<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { meta, contact } = props.data
</script>

<template>
  <footer class="bg-[#050505]/80 border-t border-white/5 relative">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

    <!-- Large quote banner -->
    <div class="px-6 pt-16 pb-12">
      <h2 v-reveal="'blur'" class="text-[clamp(1rem,3vw,2.5rem)] font-bold text-white tracking-[-0.04em] leading-none text-right">
        {{ meta.word }}
      </h2>
    </div>

    <!-- Grid section -->
    <div v-reveal:1="'fade-up'" class="px-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-8">
      <div class="space-y-4">
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Location</p>
          <p class="text-sm text-gray-400">{{ meta.location }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Status</p>
          <p class="text-sm text-purple-400">{{ meta.employment }}</p>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-lg text-white font-medium tracking-tight">Let's build something together ~</p>
        <p class="text-sm text-gray-500 tracking-tight">Find me on GitHub or LinkedIn.</p>
        <div class="flex gap-4 pt-1">
          <a
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
          >
            <Icon icon="simple-icons:github" class="w-4 h-4" />
          </a>
          <a
            :href="contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-blue-400 hover:bg-white/10 hover:scale-110 transition-all"
          >
            <Icon icon="simple-icons:linkedin" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <div class="space-y-4 md:text-right">
        <p class="text-xs text-gray-500 uppercase tracking-widest mb-2">Links</p>
        <a
          :href="contact.alternativeSite"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-200 block tracking-tight"
        >
          Previous Portfolio
        </a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="px-6 py-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
      <p class="text-xs text-gray-600 tracking-tight">&copy; {{ new Date().getFullYear() }} {{ meta.name }}</p>
      <p class="text-xs text-gray-600 tracking-tight">Built with Nuxt & Vue</p>
    </div>
  </footer>
</template>
