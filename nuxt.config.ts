export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/css/main.css'],

  image: {
    format: ['webp', 'avif', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },

  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    gzip: true
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: 'assets'
  },

  compatibilityDate: '2025-01-01',

  experimental: {
    payloadExtraction: false
  },

  devtools: {
    enabled: true
  }
})