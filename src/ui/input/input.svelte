<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { InputStyles, type InputEvents } from '.';
  import { cn } from '@/utils/cn';

  type $$Props = HTMLInputAttributes;
  type $$Events = InputEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'] = undefined;
  export { className as class };
  export let readonly: $$Props['readonly'] = undefined;
</script>

<input
  class={cn(InputStyles, className)}
  bind:value
  {readonly}
  on:blur
  on:change
  on:click
  on:focus
  on:focusin
  on:focusout
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:mousemove
  on:paste
  on:input
  on:wheel|passive
  {...$$restProps}
/>
