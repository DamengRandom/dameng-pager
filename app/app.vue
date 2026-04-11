<template>
  <div class="min-h-screen bg-transparent font-sans antialiased text-gray-300 selection:bg-purple-500/30 selection:text-purple-200">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  background-color: #050505;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #3b0764;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b21a8;
}

/* Glassmorphism Utilities */
.glass-panel {
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.glass-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.glass-card:hover {
  border-color: rgba(168, 85, 247, 0.2);
  box-shadow: 0 0 30px -5px rgba(168, 85, 247, 0.15);
}
</style>
