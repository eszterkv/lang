import fs from 'fs'
import marked from 'marked'
import path from 'path'

const lookup = new Map()

export function get (req, res, next) {
  const { slug } = req.params

  if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
    const chapter = getChapter(slug)
    lookup.set(slug, JSON.stringify(chapter))
  }

  const json = lookup.get(slug)
  const headers = { 'content-type': 'application/json' }

  if (json) {
    res.writeHead(200, headers)
    res.end(json)
  } else {
    res.writeHead(404, headers)
    res.end(JSON.stringify({ message: 'Not found' }))
  }
}

function getChapter (slug) {
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
