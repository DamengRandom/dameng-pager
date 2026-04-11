<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()
let animationId: number
let particles: Particle[] = []
let width = 0
let height = 0

const PARTICLE_COUNT = 100
const CONNECTION_DISTANCE = 280
const TRIANGLE_DISTANCE = 220

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  glowSize: number
  brightness: number

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.size = Math.random() * 3 + 1.5
    this.glowSize = this.size * 5
    this.brightness = Math.random() * 0.4 + 0.6
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Outer glow
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize)
    gradient.addColorStop(0, `rgba(139, 92, 246, ${this.brightness * 0.7})`)
    gradient.addColorStop(0.5, `rgba(139, 92, 246, ${this.brightness * 0.2})`)
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Core dot
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 130, 255, ${this.brightness})`
    ctx.fill()
  }
}

function dist(a: Particle, b: Particle) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

function initParticles() {
  particles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(width, height))
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)

  // Draw triangles (filled polygons) for nearby triplets
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dij = dist(particles[i], particles[j])
      if (dij > TRIANGLE_DISTANCE) continue
      for (let k = j + 1; k < particles.length; k++) {
        const dik = dist(particles[i], particles[k])
        const djk = dist(particles[j], particles[k])
        if (dik < TRIANGLE_DISTANCE && djk < TRIANGLE_DISTANCE) {
          const avgDist = (dij + dik + djk) / 3
          const alpha = (1 - avgDist / TRIANGLE_DISTANCE) * 0.08
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.lineTo(particles[k].x, particles[k].y)
          ctx.closePath()
          ctx.fillStyle = `rgba(100, 60, 200, ${alpha})`
          ctx.fill()
        }
      }
    }
  }

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const d = dist(particles[i], particles[j])
      if (d < CONNECTION_DISTANCE) {
        const alpha = (1 - d / CONNECTION_DISTANCE) * 0.55
        ctx.beginPath()
        ctx.strokeStyle = `rgba(120, 80, 230, ${alpha})`
        ctx.lineWidth = (1 - d / CONNECTION_DISTANCE) * 1.8 + 0.4
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  // Draw particles on top
  for (const p of particles) {
    p.update()
    p.draw(ctx)
  }

  animationId = requestAnimationFrame(animate)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  initParticles()
}

onMounted(() => {
  resize()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed top-0 left-0 w-full h-full pointer-events-none"
    style="z-index: 1"
    aria-hidden="true"
  />
</template>
