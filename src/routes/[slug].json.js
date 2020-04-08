import { getChapter } from './_get.js'

const lookup = new Map()

export function get(req, res, next) {
  const { slug } = req.params;

  if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
    const chapter = getChapter(slug)
    lookup.set(slug, JSON.stringify(chapter))
  }
}
