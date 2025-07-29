<template>
  <div>
    <WhiteNavBar name="Blankly Blog" tab="blog" product="blog" />
    <div class="bg-white px-4 sm:px-0">
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
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <ClientOnly>
        <div v-if="loading" class="text-gray-500">Loading post...</div>
        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
        <div v-else-if="post">
          <article>
            
            <!-- Category Badge -->
            <div class="text-center mb-4">
              <span 
                class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium"
                :class="getCategoryClass(post.category)"
              >
                {{ post.category }}
              </span>
            </div>
            
            <!-- Date -->
            <div class="text-center text-gray-600 mb-8">
              {{ processDate(post.date) }}
            </div>
            
            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 leading-tight">{{ post.title }}</h1>
            
            <!-- Description -->
            <p class="text-lg text-gray-500 text-center mx-auto mb-8 leading-relaxed">
              {{ post.description }}
            </p>
            
            <!-- Author and Metadata Row -->
            <div class="flex justify-center items-center mb-8 space-x-6 flex-wrap">
              <div class="flex items-center">
                <img 
                  v-if="post.authorImage"
                  :src="post.authorImage" 
                  :alt="post.authorName"
                  class="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div class="font-medium text-gray-900">{{ post.authorName }}</div>
              </div>
              
              <!-- Word Count -->
              <div class="text-gray-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {{ post.wordCount }} words
              </div>
              
              <!-- Reading Time -->
              <div class="text-gray-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ post.readingTime }} min read
              </div>
            </div>
            
            <!-- Page Break Line -->
            <hr class="w-full mb-16 border-gray-200" />
            
            <!-- Content -->
            <div 
              class="prose prose-lg prose-gray max-w-5xl mx-auto"
              :class="contentStyles"
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

// Computed styles for content
const contentStyles = [
  'prose-p:leading-loose',           // Increased line height for paragraphs
  'prose-p:my-8',                    // More space between paragraphs
  'prose-li:leading-loose',          // Increased line height for list items
  'prose-li:my-2',                   // More space between list items
  'prose-headings:mt-12',            // More space before headings
  'prose-headings:mb-6',             // More space after headings
  'prose-h1:text-3xl',               // Larger h1
  'prose-h2:text-2xl',               // Larger h2
  'prose-h3:text-xl',                // Larger h3
  'prose-blockquote:my-8',           // More space around blockquotes
  'prose-pre:my-8',                  // More space around code blocks
  'prose-code:text-sm',              // Slightly smaller inline code
  'prose-img:my-8',                  // More space around images
  'prose-hr:my-12'                   // More space around horizontal rules
]

// Helper functions
const processDate = (str) => {
  return dayjs(str).format('LL')
}

const getCategoryClass = (category) => {
  const categoryColors = {
    'Coding': 'bg-blue-100 text-blue-800',
    'Technology': 'bg-purple-100 text-purple-800',
    'Business': 'bg-green-100 text-green-800',
    'Trading': 'bg-yellow-100 text-yellow-800',
    'Investing': 'bg-indigo-100 text-indigo-800',
    'Integration': 'bg-pink-100 text-pink-800',
    'Company': 'bg-gray-100 text-gray-800',
    'Quant': 'bg-red-100 text-red-800',
    'Backtesting': 'bg-orange-100 text-orange-800',
    'Team': 'bg-teal-100 text-teal-800',
    'Vision': 'bg-cyan-100 text-cyan-800',
    'Trends': 'bg-emerald-100 text-emerald-800',
    "Founder's Story": 'bg-rose-100 text-rose-800'
  }
  
  return categoryColors[category] || 'bg-gray-100 text-gray-800'
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