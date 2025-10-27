import matter from 'gray-matter'

interface SocialLink {
  platform: string
  username: string
  url: string
}

interface MetaData {
  name?: string
  title?: string
  email?: string
  website?: string
  location?: string
  avatar?: string
  social?: SocialLink[]
}

export function parseMarkdown(markdown: string): { meta: MetaData; content: string } {
  try {
    const { data, content } = matter(markdown)
    return {
      meta: {
        name: data.name,
        title: data.title,
        email: data.email,
        website: data.website,
        location: data.location,
        avatar: data.avatar,
        social: data.social,
      },
      content,
    }
  } catch (error) {
    // If parsing fails, treat entire content as markdown without frontmatter
    return {
      meta: {},
      content: markdown,
    }
  }
}

export function extractSections(markdown: string): Record<string, string> {
  const sections: Record<string, string> = {}
  const lines = markdown.split('\n')
  let currentSection = ''
  let currentContent: string[] = []

  for (const line of lines) {
    // Check for h2 headers (##)
    const h2Match = line.match(/^## (.+)$/)
    if (h2Match) {
      // Save previous section
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n')
      }
      // Start new section
      currentSection = h2Match[1]
      currentContent = []
      continue
    }

    currentContent.push(line)
  }

  // Save last section
  if (currentSection) {
    sections[currentSection] = currentContent.join('\n')
  }

  return sections
}

