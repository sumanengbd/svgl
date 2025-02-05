<script lang="ts">
  import type { Snippet } from 'svelte';

  import Container from '@/components/container.svelte';
  import { ArrowLeft } from 'lucide-svelte';

  interface LayoutProps {
    children?: Snippet;
  }

  let { children }: LayoutProps = $props();
</script>

<Container>
  <a href="/">
    <div
      class="group flex items-center space-x-2 duration-100 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-white md:mt-2"
    >
      <ArrowLeft size={20} class="group-hover:-translate-x-[2px] group-hover:duration-200" />
      <span>View all</span>
    </div>
  </a>
</Container>
{@render children?.()}
