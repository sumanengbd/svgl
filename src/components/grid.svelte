<script lang="ts">
  import type { Snippet } from 'svelte';

  interface GridProps {
    children: Snippet;
  }

  let { children }: GridProps = $props();
</script>

<section
  class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
>
  {@render children?.()}
</section>
