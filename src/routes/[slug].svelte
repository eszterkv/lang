<h1>{chapter.metadata.title}</h1>

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
