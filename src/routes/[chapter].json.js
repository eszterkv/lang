import { getSubchapters } from './_chapters'

let data

export function get (req, res) {
  if (!data || process.env.NODE_ENV !== 'production') {
    const { chapter } = req.params
    const chapters = getSubchapters(chapter)
    data = JSON.stringify(chapters)
  }

  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(data)
}
