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
      htmlAttrs: { class: 'dark scroll-smooth' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'yzBz9Sy_8TrXLA3Tt4pOkaRTXMAI_U3d4HW031WmdNc',
        }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-0Y39WDSXM0', async: true },
        { innerHTML: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-0Y39WDSXM0');" }
      ],
    },
  },
})
