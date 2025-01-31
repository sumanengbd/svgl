<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '@/utils/cn';
  import { flyAndScale } from '@/utils/flyAndScale';

  type $$Props = ContextMenuPrimitive.ContentProps;

  interface Props {
    class?: $$Props['class'];
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let {
    class: className = undefined,
    transition = flyAndScale,
    transitionConfig = undefined,
    children,
    ...rest
  }: Props = $props();
  
</script>

<ContextMenuPrimitive.Content
  {transition}
  {transitionConfig}
  class={cn(
    'bg-white dark:bg-neutral-900 text-popover-foreground z-50 min-w-[8rem] rounded-md border border-neutral-200 dark:border-neutral-800 p-1 shadow-md focus:outline-none',
    className
  )}
  {...rest}
  on:keydown
>
  {@render children?.()}
</ContextMenuPrimitive.Content>
