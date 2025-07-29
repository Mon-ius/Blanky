export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    // Get the actual base path from the current URL
    const pathname = window.location.pathname
    const basePath = pathname.substring(0, pathname.lastIndexOf('/') + 1)
    
    // Update all relative asset paths if needed
    if (basePath !== '/' && basePath !== '') {
      // Update base tag if it exists
      let baseTag = document.querySelector('base')
      if (!baseTag) {
        baseTag = document.createElement('base')
        document.head.appendChild(baseTag)
      }
      baseTag.href = basePath
    }
  }
})