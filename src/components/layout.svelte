<script>
  export let title
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <h3>{title}</h3>
  <slot />
</div>
