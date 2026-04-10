// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/animations.css'],

  tailwindcss: {
    exposeConfig: true,
  },

  build: {
    transpile: ['reka-ui'],
  },

  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'yzBz9Sy_8TrXLA3Tt4pOkaRTXMAI_U3d4HW031WmdNc',
        }
      ]
    },
  },
})
