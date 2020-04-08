<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<section>
  <div>
    <p>
      The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king. I dunno. Must be a king.
    </p>

    <p>
      We want a shrubbery!! Found them? In Mercia?! The coconut's tropical! …Are you suggesting that coconuts migrate? He hasn't got shit all over him. You don't frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!
    </p>
  </div>
  <ul>
    {#each chapters as chapter}
      <li>
        <a rel="prefetch" href={chapter.slug}>
          {chapter.title}
        </a>
      </li>
    {/each}
  </ul>
</section>

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

<style>
  * {
    box-sizing: border-box;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  section > * {
    min-width: 360px;
    max-width: 100%;
    flex: 1 0 50%;
  }

  section > *:not(:last-child) {
    padding-right: 60px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
