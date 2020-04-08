import fs from 'fs'
import marked from 'marked'
import path from 'path'

export function getChapters () {
  const slugs = fs.readdirSync('book')
    .map(filename => filename.slice(0, -3))

  return slugs.map(getChapter)
}

export function getChapter (slug) {
  const file = `book/${slug}.md`
  if (!fs.existsSync(file)) return null

  const markdown = fs.readFileSync(file, 'utf-8')
  const { title, content } = parseMarkdown(markdown)

  return { slug, title, content }
}

function parseMarkdown (markdown) {
  const frontmatterRegex = /---\r?\n([\s\S]+?)\r?\n---/
  const [header, frontmatter] = markdown.match(frontmatterRegex)
  const content = marked(markdown.slice(header.length))
  const metadata = {}

  frontmatter.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim()
    metadata[key] = value
  })

  const { title } = metadata

  return { title, content }
}
