<script setup lang="ts">
import { ref, onMounted } from 'vue'

const asciiRef = ref<HTMLPreElement>()
const codeSnippets = [
  'const app = createApp(App)',
  'export default defineNuxtConfig({})',
  'npm run build && npm run deploy',
  'git push origin main --force',
  'docker compose up -d --build',
  'const [state, setState] = useState()',
  'import { ref, computed } from "vue"',
  'kubectl apply -f deployment.yaml',
  'SELECT * FROM users WHERE active',
  'async function fetchData() { ... }',
  'interface Props { data: Portfolio }',
  'const router = useRouter()',
  'npx nuxi generate',
  'tailwind.config.ts',
  'export type Layout = 1 | 2 | 3',
  'pnpm add @iconify/vue reka-ui',
  'const { data } = await useFetch()',
  'app.use(createPinia())',
  '<template><slot /></template>',
  'console.log("Hello, World!")',
  'return { setup: () => ({}) }',
  'process.env.DATABASE_URL',
  'FROM node:20-alpine AS base',
  'RUN npm ci --production',
  'EXPOSE 3000',
  'fn main() { println!("hi") }',
  'const ws = new WebSocket(url)',
  'addEventListener("click", fn)',
  'border-radius: 0.75rem;',
  'transition: all 200ms ease;',
]

function generateGrid(charWidth: number, rows: number): string {
  const lines: string[] = []

  for (let r = 0; r < rows; r++) {
    let line = ''
    while (line.length < charWidth) {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      line += snippet + '  '
    }
    lines.push(line.slice(0, charWidth))
  }

  return lines.join('\n')
}

onMounted(() => {
  if (!asciiRef.value) return

  const fontSize = 11
  const lineHeight = fontSize * 1.25
  const charW = fontSize * 0.6
  const rows = Math.ceil(window.innerHeight / lineHeight) + 5
  const cols = Math.ceil(window.innerWidth / charW) + 20

  asciiRef.value.textContent = generateGrid(cols, rows)
})
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <pre
      ref="asciiRef"
      class="absolute inset-0 text-[11px] leading-tight font-mono text-emerald-400/20 whitespace-pre overflow-hidden"
      aria-hidden="true"
    />
    <!-- Fade edges so text doesn't clip hard -->
    <div class="absolute inset-0" style="background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 60%, black 100%);" />
  </div>
</template>
