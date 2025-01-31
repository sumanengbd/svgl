<script lang="ts">
  import type { Snippet } from 'svelte';

  interface ContainerProps {
    children?: Snippet;
  }

  let { children }: ContainerProps = $props();
</script>

<main class="container mx-auto px-6 pt-4 xl:px-4">
  {@render children?.()}
</main>
