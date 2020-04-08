<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<ul>
  {#each chapters as chapter}
    <li>
      <a rel="prefetch" href={chapter.slug}>
        {chapter.title}
      </a>
    </li>
  {/each}
</ul>

<script context="module">
  export async function preload ({ params, query }) {
    const res = await this.fetch('index.json')
    const chapters = await res.json()

    return { chapters } 
  }
</script>

<script>
  export let chapters 
  export const title = 'Norsk: 1000 questions — 1000 answers in Norwegian'
</script>
