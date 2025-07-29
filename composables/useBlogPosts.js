import { marked } from 'marked'

export const useBlogPosts = () => {
  const parseFrontmatter = (content) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
    const match = content.match(frontmatterRegex)
    
    if (!match) {
      return { frontmatter: {}, content }
    }
    
    const frontmatterText = match[1]
    const contentWithoutFrontmatter = content.slice(match[0].length)
    
    // Parse YAML-like frontmatter
    const frontmatter = {}
    frontmatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':')
      if (colonIndex > -1) {
        const key = line.slice(0, colonIndex).trim()
        let value = line.slice(colonIndex + 1).trim()
        
        // Remove quotes if present
        if ((value.startsWith("'") && value.endsWith("'")) || 
            (value.startsWith('"') && value.endsWith('"'))) {
          value = value.slice(1, -1)
        }
        
        // Convert numbers
        if (!isNaN(value) && value !== '') {
          value = Number(value)
        }
        
        frontmatter[key] = value
      }
    })
    
    return { frontmatter, content: contentWithoutFrontmatter }
  }

  const fetchBlogPosts = async () => {
    try {
      console.log('fetchBlogPosts called')
      
      // Import all markdown files from assets/blogs
      const markdownFiles = import.meta.glob('../assets/blogs/*.md', { 
        query: '?raw',
        import: 'default',
        eager: true 
      })
      
      console.log('Markdown files found:', Object.keys(markdownFiles).length)
      
      const posts = Object.entries(markdownFiles).map(([path, content]) => {
        const filename = path.split('/').pop().replace('.md', '')
        const { frontmatter, content: markdownContent } = parseFrontmatter(content)
        
        return {
          _path: `/blog/${filename}`,
          slug: filename,
          title: frontmatter.title || filename.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          description: frontmatter.description || '',
          date: frontmatter.date || new Date().toISOString(),
          authorName: frontmatter.authorName || 'Blankly Team',
          authorImage: frontmatter.authorImage || '/images/default-author.jpg',
          readingTime: frontmatter.readingTime || 5,
          category: frontmatter.category || 'General',
          categoryClass: frontmatter.categoryClass || 'bg-gray-100',
          categoryText: frontmatter.categoryText || 'text-gray-800',
          image: frontmatter.image || '',
          content: markdownContent,
          ...frontmatter
        }
      })
      
      console.log('Fetched posts:', posts.length)
      
      // Sort posts by date (newest first)
      return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }
  }

  const fetchBlogPost = async (slug) => {
    try {
      console.log('fetchBlogPost called with slug:', slug)
      
      // Get all markdown files
      const markdownFiles = import.meta.glob('../assets/blogs/*.md', { 
        query: '?raw',
        import: 'default',
        eager: true 
      })
      
      // Find the matching file
      const matchingPath = Object.keys(markdownFiles).find(path => 
        path.endsWith(`/${slug}.md`)
      )
      
      if (!matchingPath) {
        console.error('Blog post not found:', slug)
        return null
      }
      
      const content = markdownFiles[matchingPath]
      console.log('Raw content loaded, length:', content.length)
      
      const { frontmatter, content: markdownContent } = parseFrontmatter(content)
      
      return {
        _path: `/blog/${slug}`,
        slug,
        title: frontmatter.title || slug.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        description: frontmatter.description || '',
        date: frontmatter.date || new Date().toISOString(),
        authorName: frontmatter.authorName || 'Blankly Team',
        authorImage: frontmatter.authorImage || '/images/default-author.jpg',
        readingTime: frontmatter.readingTime || 5,
        category: frontmatter.category || 'General',
        categoryClass: frontmatter.categoryClass || 'bg-gray-100',
        categoryText: frontmatter.categoryText || 'text-gray-800',
        image: frontmatter.image || '',
        content: markdownContent,
        html: marked(markdownContent),
        ...frontmatter
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
      return null
    }
  }

  return {
    fetchBlogPosts,
    fetchBlogPost
  }
}