<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <slot />
</div>

<script>
  export let title
</script>
