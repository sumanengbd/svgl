<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  interface TransitionProps {
    pathname?: string;
    children?: Snippet;
  }

  let { pathname = '', children }: TransitionProps = $props();
</script>

{#key pathname}
  <div in:fly={{ x: 0, y: 23, duration: 450 }}>
    {@render children?.()}
  </div>
{/key}
