export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const delay = binding.arg ? parseInt(binding.arg) * 100 : 0
      const variant = binding.value || 'fade-up'

      el.style.willChange = 'transform, opacity'
      el.classList.add('reveal', `reveal--${variant}`)
      if (delay) {
        el.style.transitionDelay = `${delay}ms`
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed')
            setTimeout(() => { el.style.willChange = 'auto' }, 1000 + delay)
            observer.unobserve(el)
          }
        },
        { threshold: 0.12, rootMargin: '-40px' }
      )

      observer.observe(el)
    },
  })
})
