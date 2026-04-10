<script setup lang="ts">
import { Icon } from '@iconify/vue'

const techIcons = [
  { icon: 'simple-icons:react', color: '#61DAFB' },
  { icon: 'simple-icons:vuedotjs', color: '#4FC08D' },
  { icon: 'simple-icons:nuxtdotjs', color: '#00DC82' },
  { icon: 'simple-icons:nextdotjs', color: '#ffffff' },
  { icon: 'simple-icons:typescript', color: '#3178C6' },
  { icon: 'simple-icons:javascript', color: '#F7DF1E' },
  { icon: 'simple-icons:nodedotjs', color: '#5FA04E' },
  { icon: 'simple-icons:html5', color: '#E34F26' },
  { icon: 'simple-icons:css3', color: '#1572B6' },
  { icon: 'simple-icons:sass', color: '#CC6699' },
  { icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
  { icon: 'simple-icons:docker', color: '#2496ED' },
  { icon: 'simple-icons:git', color: '#F05032' },
  { icon: 'simple-icons:github', color: '#ffffff' },
  { icon: 'simple-icons:postgresql', color: '#4169E1' },
  { icon: 'simple-icons:mongodb', color: '#47A248' },
  { icon: 'simple-icons:redux', color: '#764ABC' },
]

interface PlacedIcon {
  icon: string
  color: string
  size: number
  xPct: number
  yPct: number
  opacity: number
}

// Simple seeded random for consistent layout per session
let seed = Date.now() % 1000
function rand() {
  seed = (seed * 16807 + 0) % 2147483647
  return (seed - 1) / 2147483646
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffled = shuffle(techIcons)

// Place icons in concentric rings using percentages (center = 50%, 50%)
const rings = [
  { count: 1, radius: 0, sizeMin: 48, sizeMax: 56, opacity: 0.7 },
  { count: 6, radius: 22, sizeMin: 36, sizeMax: 44, opacity: 0.5 },
  { count: 10, radius: 44, sizeMin: 28, sizeMax: 36, opacity: 0.35 },
]

const placedIcons: PlacedIcon[] = []
let iconIdx = 0

for (const ring of rings) {
  const startAngle = rand() * Math.PI * 2
  for (let i = 0; i < ring.count && iconIdx < shuffled.length; i++) {
    const angle = startAngle + (i / ring.count) * Math.PI * 2
    const jitterR = ring.radius > 0 ? (rand() - 0.5) * 5 : 0
    const jitterA = ring.radius > 0 ? (rand() - 0.5) * 0.15 : 0

    const r = ring.radius + jitterR
    const a = angle + jitterA
    const xPct = 50 + r * Math.cos(a)
    const yPct = 50 + r * Math.sin(a)

    const size = ring.sizeMin + Math.floor(rand() * (ring.sizeMax - ring.sizeMin))

    placedIcons.push({
      icon: shuffled[iconIdx].icon,
      color: shuffled[iconIdx].color,
      size,
      xPct,
      yPct,
      opacity: ring.opacity,
    })
    iconIdx++
  }
}
</script>

<template>
  <div class="relative w-full h-full pointer-events-none select-none">
    <div
      v-for="(item, idx) in placedIcons"
      :key="idx"
      class="absolute"
      :style="{
        left: `${item.xPct}%`,
        top: `${item.yPct}%`,
        opacity: item.opacity,
        transform: 'translate(-50%, -50%)',
      }"
    >
      <Icon
        :icon="item.icon"
        :style="{ color: item.color, width: `${item.size}px`, height: `${item.size}px` }"
      />
    </div>
  </div>
</template>
