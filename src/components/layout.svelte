<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <h5>{chapter || ''}</h5>
  <slot />
</div>

<script>
  export let title
  export let chapter
</script>
