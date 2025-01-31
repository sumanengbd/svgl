<script lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';

  import { cn } from '@/utils/cn';
  import { flyAndScale } from '@/utils/flyAndScale';

  type $$Props = PopoverPrimitive.ContentProps;

  interface Props {
    class?: $$Props['class'];
    transition?: $$Props['transition'];
    transitionConfig?: $$Props['transitionConfig'];
    align?: $$Props['align'];
    sideOffset?: $$Props['sideOffset'];
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let {
    class: className = undefined,
    transition = flyAndScale,
    transitionConfig = undefined,
    align = 'center',
    sideOffset = 4,
    children,
    ...rest
  }: Props = $props();
  
</script>

<PopoverPrimitive.Content
  {transition}
  {transitionConfig}
  {align}
  {sideOffset}
  {...rest}
  class={cn(
    'z-50 w-auto max-w-96 rounded-md border border-neutral-200 bg-white p-3 shadow-md outline-none dark:border-neutral-800 dark:bg-neutral-900',
    className
  )}
>
  {@render children?.()}
</PopoverPrimitive.Content>
