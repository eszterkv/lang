<svelte:head>
  <title>{chapter.title}</title>
</svelte:head>

<h1>{chapter.title}</h1>

<section>
  {@html chapter.content}
</section>

<script context="module">
  export async function preload ({ params, query }) {
    const { chapter: parentSlug, slug } = params
    const res = await this.fetch(`${parentSlug}/${slug}.json`)
    const data = await res.json()

    if (res.status === 200) return { chapter: data }
    else this.error(res.status, data.message)
  }
</script>

<script>
  export let chapter
</script>
