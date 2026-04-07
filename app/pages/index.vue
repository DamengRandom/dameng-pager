<script setup lang="ts">
import { computed } from 'vue'
import { useRandomLayout } from '~/composables/useRandomLayout'
import type { PortfolioData } from '~/types/portfolio'

import HeroTerminal from '~/components/hero/HeroTerminal.vue'
import HeroSplit from '~/components/hero/HeroSplit.vue'
import HeroCentered from '~/components/hero/HeroCentered.vue'

import AboutCards from '~/components/about/AboutCards.vue'
import AboutCollapsible from '~/components/about/AboutCollapsible.vue'
import AboutTimeline from '~/components/about/AboutTimeline.vue'

import SkillsProgress from '~/components/skills/SkillsProgress.vue'
import SkillsBubbles from '~/components/skills/SkillsBubbles.vue'
import SkillsToggle from '~/components/skills/SkillsToggle.vue'

import KnowledgeList from '~/components/knowledge/KnowledgeList.vue'
import KnowledgeTags from '~/components/knowledge/KnowledgeTags.vue'
import KnowledgeGrid from '~/components/knowledge/KnowledgeGrid.vue'

import ContactCTA from '~/components/contact/ContactCTA.vue'
import ContactTerminal from '~/components/contact/ContactTerminal.vue'
import ContactCards from '~/components/contact/ContactCards.vue'

const { data } = await useAsyncData<PortfolioData>('portfolio', () => $fetch('/api/portfolio'))

const { layout } = useRandomLayout()

const heroComponents = [HeroTerminal, HeroSplit, HeroCentered]
const aboutComponents = [AboutCards, AboutCollapsible, AboutTimeline]
const skillsComponents = [SkillsProgress, SkillsBubbles, SkillsToggle]
const knowledgeComponents = [KnowledgeList, KnowledgeTags, KnowledgeGrid]
const contactComponents = [ContactCTA, ContactTerminal, ContactCards]

const heroComponent = computed(() => heroComponents[layout.value.hero - 1])
const aboutComponent = computed(() => aboutComponents[layout.value.about - 1])
const skillsComponent = computed(() => skillsComponents[layout.value.skills - 1])
const knowledgeComponent = computed(() => knowledgeComponents[layout.value.knowledge - 1])
const contactComponent = computed(() => contactComponents[layout.value.contact - 1])
</script>

<template>
  <main v-if="data">
    <ClientOnly>
      <component :is="heroComponent" :data="data" />
      <component :is="aboutComponent" :data="data" />
      <component :is="skillsComponent" :data="data" />
      <component :is="knowledgeComponent" :data="data" />
      <component :is="contactComponent" :data="data" />
      <template #fallback>
        <div class="min-h-screen flex items-center justify-center">
          <span class="font-mono text-cyan-400 text-sm animate-pulse">&gt; loading_</span>
        </div>
      </template>
    </ClientOnly>
  </main>
</template>
