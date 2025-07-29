import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: 'auto',
              borderRadius: '10px',
            },
          },
        },
      },
      backgroundImage: {
        'main': "url('/static/y-so-serious.png')",
      },
    },
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [forms, typography],
} satisfies Config