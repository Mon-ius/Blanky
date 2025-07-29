export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/css/main.css'],
  ssr: false,
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
    config: {
      content: []
    }
  },
  features: {
    inlineStyles: false
  },
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
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/__sitemap__/**']
  },
  
  site: {
    url: 'https://example.com',
    name: 'Blankly'
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false
    }
  },
  
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '_nuxt/'
  },
  compatibilityDate: '2025-01-01',
  experimental: {
    payloadExtraction: false
  },

  devtools: {
    enabled: true
  }
})