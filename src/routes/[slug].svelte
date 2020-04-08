<svelte:head>
  <title>{chapter.title}</title>
</svelte:head>

<h1>{chapter.title}</h1>

<section>
  {@html chapter.content}
</section>

<script>
  export let chapter
</script>

<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`${params.slug}.json`)
		const data = await res.json()

    if (res.status === 200) return { chapter: data }
    else this.error(res.status, data.message)
	}
</script>
