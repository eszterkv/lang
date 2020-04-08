import fs from 'fs'
import path from 'path'

export function getChapter(slug) {
  const file = `${slug}.md`
  if (!fs.existsSync(file)) return null

  const markdown = fs.readFileSync(file, 'utf-8')

  return { slug, markdown }
}
