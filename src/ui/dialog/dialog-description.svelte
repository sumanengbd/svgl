<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '@/utils/cn';

  type $$Props = DialogPrimitive.DescriptionProps;

  interface Props {
    class?: $$Props['class'];
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
  
</script>

<DialogPrimitive.Description class={cn('text-sm opacity-70 mb-2', className)} {...rest}>
  {@render children?.()}
</DialogPrimitive.Description>
