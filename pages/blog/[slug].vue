<template>
  <div>
    <!-- Top Banner -->
    <div class="bg-gray-50 border-b">
      <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="~/assets/images/package-icon.svg" class="w-6 h-6 mr-2" />
            <span class="font-semibold text-sm mr-3">Blankly Package</span>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=Blankly-Finance&repo=Blankly&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="100"
              height="20"
              title="GitHub"
            ></iframe>
          </div>
          <a
            href="https://package.blankly.finance"
            target="_blank"
            class="text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            Build trading algorithms for any asset →
          </a>
        </div>
      </div>
    </div>
    
    <!-- Main Navbar -->
    <header class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/images/blankly-black.svg" alt="Blankly" class="h-8" />
          </NuxtLink>
          
          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/why-us" class="text-gray-700 hover:text-gray-900">Why Us?</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-700 hover:text-gray-900">Pricing</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900">About Us</NuxtLink>
            <NuxtLink to="/contact-us" class="text-gray-700 hover:text-gray-900">Contact</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-700 hover:text-gray-900">Blog</NuxtLink>
          </nav>
          
          <!-- CTA Button -->
          <a 
            href="https://discord.gg/xJAjGEAXNS" 
            target="_blank"
            class="hidden md:inline-flex items-center px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Join Our Discord
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
          
          <!-- Mobile menu button -->
          <button class="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    
    <!-- Go Back Link -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Go Back
      </NuxtLink>
    </div>
    
    <!-- Content -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <ClientOnly>
        <div v-if="loading" class="text-gray-500">Loading post...</div>
        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
        <div v-else-if="post">
          <article>
            
            <!-- Category Badge -->
            <div class="text-center mb-6">
              <span 
                class="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium"
                :class="`${post.categoryClass} ${post.categoryText}`"
              >
                {{ post.category }}
              </span>
            </div>
            
            <!-- Date -->
            <div class="text-center text-gray-600 mb-4">
              {{ processDate(post.date) }}
            </div>
            
            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">{{ post.title }}</h1>
            
            <!-- Description -->
            <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              {{ post.description }}
            </p>
            
            <!-- Author -->
            <div class="flex justify-center items-center mb-16">
              <img 
                v-if="post.authorImage"
                :src="post.authorImage" 
                :alt="post.authorName"
                class="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div class="font-medium text-gray-900">{{ post.authorName }}</div>
            </div>
            
            <!-- Content -->
            <div 
              class="prose prose-lg max-w-3xl mx-auto"
              v-html="post.html"
            />
          </article>
        </div>
        <div v-else class="text-gray-500">Post not found</div>
        
        <template #fallback>
          <div class="text-gray-500">Loading...</div>
        </template>
      </ClientOnly>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { useBlogPosts } from '~/composables/useBlogPosts'

dayjs.extend(localizedFormat)

const route = useRoute()
const post = ref(null)
const loading = ref(true)
const error = ref(null)

// Helper function
const processDate = (str) => {
  return dayjs(str).format('LL')
}

onMounted(async () => {
  try {
    const slug = route.params.slug
    console.log('Blog detail mounted, slug:', slug)
    
    const { fetchBlogPost } = useBlogPosts()
    const result = await fetchBlogPost(slug)
    
    if (result) {
      post.value = result
      console.log('Post loaded:', result.title)
      
      // Set page meta
      useHead({
        title: `${result.title} | Blankly Blog`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: result.description
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: `${result.title} | Blankly Blog`
          },
          {
            hid: 'og:description',
            name: 'og:description',
            property: 'og:description',
            content: result.description
          }
        ]
      })
    } else {
      error.value = 'Post not found'
    }
  } catch (e) {
    console.error('Error loading post:', e)
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>