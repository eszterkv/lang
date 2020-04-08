import { getChapter } from '../_chapters'

const lookup = new Map()

export function get (req, res, next) {
  const { chapter: parentSlug, slug } = req.params

  if (!lookup.has(slug) || process.env.NODE_ENV !== 'production') {
    const chapter = getChapter(parentSlug, slug)
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
