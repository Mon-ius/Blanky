import postscribe from 'postscribe'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$postscribe = postscribe
})