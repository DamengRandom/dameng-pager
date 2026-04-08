<script setup lang="ts">
import type { PortfolioData } from '~/types/portfolio'

const props = defineProps<{ data: PortfolioData }>()
const { meta, contact } = props.data
</script>

<template>
  <footer class="bg-[#111111] border-t border-[#222222]">
    <!-- Large name banner -->
    <div class="px-6 pt-16 pb-12">
      <h2 v-reveal="'blur'" class="text-[clamp(1rem,3vw,2.5rem)] font-bold text-white tracking-tighter leading-none text-right">
        {{ meta.word }}
      </h2>
    </div>

    <!-- Grid section -->
    <div v-reveal:1="'fade-up'" class="px-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#222222] pt-8">
      <!-- Column 1: Location & contact -->
      <div class="space-y-4">
        <div>
          <p class="text-xs text-[#6e6e73] uppercase tracking-widest mb-2">Location</p>
          <p class="text-sm text-[#a1a1a6]">{{ meta.location }}</p>
        </div>
        <div>
          <p class="text-xs text-[#6e6e73] uppercase tracking-widest mb-2">Status</p>
          <p class="text-sm text-emerald-400">{{ meta.employment }}</p>
        </div>
      </div>

      <!-- Column 2: CTA -->
      <div class="space-y-4">
        <p class="text-lg text-white font-medium tracking-tight">Let's build something together ~</p>
        <p class="text-sm text-[#6e6e73] tracking-tight">Find me on GitHub or LinkedIn.</p>
        <div class="flex gap-3 pt-1">
          <a
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-white hover:text-[#2997ff] transition-colors duration-200 tracking-tight underline underline-offset-4 decoration-[#424245] hover:decoration-[#2997ff]"
          >
            GitHub
          </a>
          <a
            :href="contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-white hover:text-[#2997ff] transition-colors duration-200 tracking-tight underline underline-offset-4 decoration-[#424245] hover:decoration-[#2997ff]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Column 3: Links -->
      <div class="space-y-4 md:text-right">
        <p class="text-xs text-[#6e6e73] uppercase tracking-widest mb-2">Links</p>
        <a
          :href="contact.alternativeSite"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors duration-200 block tracking-tight"
        >
          Previous Portfolio
        </a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="px-6 py-4 border-t border-[#222222] flex flex-wrap items-center justify-between gap-2">
      <p class="text-xs text-[#424245] tracking-tight">&copy; {{ new Date().getFullYear() }} {{ meta.name }}</p>
      <p class="text-xs text-[#424245] tracking-tight">Built with Nuxt &amp; Vue</p>
    </div>
  </footer>
</template>

