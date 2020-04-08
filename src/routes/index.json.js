import { getChapters } from './_chapters'

let data

export function get (req, res) {
  if (!data || process.env.NODE_ENV !== 'production') {
    const chapters = getChapters()
    data = JSON.stringify(chapters)
  }

  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(data)
}
