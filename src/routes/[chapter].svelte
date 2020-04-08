<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<ul>
  {#each chapters as chapter}
    <li>
      <a rel="prefetch" href={`${parentSlug}/${chapter.slug}`}>
        {chapter.title}
      </a>
    </li>
  {/each}
</ul>

<script context="module">
  export async function preload ({ params, query }) {
    const { chapter: parentSlug } = params
    const title = `${parentSlug[0].toUpperCase()}${parentSlug.substr(1)}`
    const res = await this.fetch(`${params.chapter}.json`)
    const chapters = await res.json()

    return { parentSlug, title, chapters }
  }
</script>

<script>
  export let parentSlug
  export let title
  export let chapters
</script>
