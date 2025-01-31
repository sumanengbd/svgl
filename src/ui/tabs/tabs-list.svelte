<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '@/utils/cn';

  type $$Props = TabsPrimitive.ListProps;

  interface Props {
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
  
</script>

<TabsPrimitive.List
  class={cn('mb-2 flex flex-wrap items-center justify-center space-x-1 rounded-lg', className)}
  {...rest}
>
  {@render children?.()}
</TabsPrimitive.List>
