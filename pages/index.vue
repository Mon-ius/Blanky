<template>
  <div>
    <WhiteNavBar name="Blankly Platform" tab="overview" product="platform" />
    <div class="bg-white px-4 sm:px-0">
      <div class="overflow-hidden lg:relative">
        <div
          class="
            mx-auto
            max-w-md
            px-4
            mt-20
            sm:max-w-3xl sm:px-6
            grid
            lg:grid-cols-2 lg:px-8 lg:max-w-7xl
            sm:grid-cols-1
          "
        >
          <div>
            <div class="mt-8">
              <div class="lg:text-left text-center">
                <h1
                  class="
                    text-6xl
                    font-extrabold
                    text-gray-900
                    tracking-tight
                    lg:text-7xl
                    sm:text-7xl
                  "
                >
                  <!-- <div class="slider">
                    <div class="slider-text1">
                      <span class="text-blue-500">Deploy</span> your next
                      trading idea.
                    </div>
                    <div class="slider-text2">
                      <span class="text-green-300">Backtest</span> your next
                      trading idea.
                    </div>
                    <div class="slider-text3">
                      <span class="text-indigo-500">Build</span> your next
                      trading idea.
                    </div>
                  </div> -->
                  Build and deploy your next trading algorithm
                </h1>
                <p
                  class="
                    mt-12
                    max-w-xl
                    mx-auto
                    text-xl text-gray-600
                    sm:text-2xl
                    md:mt-10
                    md:max-w-3xl
                  "
                >
                  Build in minutes. Deploy in seconds. Model and backtest
                  10,000x faster.
                </p>
                <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="https://package.blankly.finance"
                      target="_blank"
                      class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-transparent
                        text-base
                        font-medium
                        rounded-md
                        text-white
                        bg-gray-900
                        hover:bg-gray-700
                        md:py-4 md:text-lg md:px-10
                      "
                    >
                      Open Source Package
                    </a>
                  </div>
                  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="https://app.blankly.finance/auth/register"
                      target="_blank"
                      class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-transparent
                        text-base
                        font-medium
                        rounded-md
                        text-gray-900
                        bg-white
                        hover:bg-gray-50
                        md:py-4 md:text-lg md:px-10
                      "
                    >
                      <span aria-hidden="true">Deploy for Free →</span>
                    </a>
                  </div>
                </div>
                <div class="mt-8 pb-20 sm:pb-0">
                  <SuccessAlert
                    v-if="notified"
                    :text="`${emailStr} was added to the waitlist`"
                    @close="notified = false"
                  />
                  <div
                    v-if="!emailAdded"
                    class="flex justify-center lg:justify-start"
                  >
                    <label for="email" class="sr-only">Email</label>
                    <input
                      id="email"
                      v-model="emailStr"
                      type="email"
                      autocomplete="email"
                      required
                      class="
                        w-full
                        px-5
                        py-3
                        placeholder-gray-500
                        focus:ring-gray-500 focus:border-gray-500
                        sm:max-w-xs
                        border-gray-300
                        rounded-md
                      "
                      placeholder="Enter your email"
                    />
                    <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        class="
                          w-full
                          flex
                          items-center
                          justify-center
                          px-5
                          py-3
                          border border-transparent
                          text-base
                          font-medium
                          rounded-md
                          text-white
                          bg-gray-900
                          hover:bg-gray-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                        "
                        @click="addEmail()"
                      >
                        Join the Waitlist
                      </button>
                    </div>
                  </div>
                  <div v-else class="flex justify-center lg:justify-start">
                    <p class="mt-3 text-sm text-green-600 sm:mt-4">
                      <strong>{{ emailStr }}</strong> was added to the
                      waitlist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:m-0 lg:relative">
            <img
              width="850"
              class="hidden md:block ml-5 mt-10"
              src="~/assets/images/platform/developer-team.svg"
            />
            <img
              width="850"
              class="md:hidden ml-5 mt-10"
              src="~/assets/images/platform/developer-team.svg"
            />
          </div>
        </div>
      </div>
      <div class="py-20">
        <hr class="max-w-4xl mx-auto rounded" />
      </div>
      <div class="text-center mt-12">
        <h1 class="text-md uppercase font-bold">
          Discover The Blankly Approach
        </h1>
      </div>
      <PlatformBuild />
      <hr class="max-w-3xl mx-auto py-10 mt-12" />
      <PlatformBacktest />
      <hr class="max-w-3xl mx-auto py-10 mt-12" />
      <PlatformDeploy />
      <hr class="max-w-3xl mx-auto pt-20 mt-12" />
      <PlatformCTAPlatform />
      <div class="mb-20"></div>
    </div>
    <!-- <Stats /> -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { updateWaitlist } from '@/store/waitlist.js'

// Component imports are automatic in Nuxt 3 with auto-imports

// Reactive data
const emailStr = ref('')
const emailAdded = ref(false)
const notified = ref(false)

// Use Nuxt 3 composables
const { $db } = useNuxtApp()

// Set page meta
useHead({
  title: 'Blankly - Build & Deploy Trading Algorithms Faster',
  meta: [
    {
      hid: 'title',
      name: 'title',
      content: 'Blankly - Build & Deploy Trading Algorithms Faster',
    },
    {
      hid: 'og:title',
      name: 'og:title',
      property: 'og:title',
      content: 'Blankly - Build & Deploy Trading Algorithms Faster',
    },
    {
      hid: 'og:description',
      name: 'og:description',
      property: 'og:description',
      content:
        'Build in minutes. Deploy in seconds. Quant workflow reimagined. Built by developers for developers 🚀',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Build in minutes. Deploy in seconds. Quant workflow reimagined. Built by developers for developers 🚀',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content:
        'Backtest Cloud Deploy Quant Workflow Security Hedge Fund Enterprise',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Blankly - Build & Deploy Trading Algorithms Faster',
    },
    {
      hid: 'image',
      name: 'image',
      content: 'https://blankly.finance/preview.png',
    },
    {
      hid: 'og:image',
      name: 'og:image',
      property: 'og:image',
      content: 'https://blankly.finance/preview.png',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://blankly.finance/preview.png',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Build in minutes. Deploy in seconds. Quant workflow reimagined. Built by developers for developers 🚀',
    },
  ],
})

// Methods
const addEmail = async () => {
  if (emailStr.value.length > 0) {
    await updateWaitlist('platform', emailStr.value, $db)
    // logEvent(nuxtApp.$analytics, 'waitlist_signup')
    emailAdded.value = true
    notified.value = true
  }
}
</script>

<style>
.slider-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.slider {
  height: 150px;
  overflow: hidden;
}
.slider div {
  height: 200px;
  box-sizing: border-box;
}
.slider-text1 {
  animation: slide 10s linear infinite;
}

@keyframes slide {
  0% {
    margin-top: -600px;
  }
  5% {
    margin-top: -400px;
  }
  33% {
    margin-top: -400px;
  }
  38% {
    margin-top: -200px;
  }
  66% {
    margin-top: -200px;
  }
  71% {
    margin-top: 0px;
  }
  100% {
    margin-top: 0px;
  }
}
</style>