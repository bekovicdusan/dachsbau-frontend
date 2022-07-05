import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp

  vueApp.directive('hoist-html', (el) => {
    if (el.tagName === 'TEMPLATE') {
      el.replaceWith(el.content)
    } else {
      el.replaceWith(...el.children)
    }
  })
})
