<script lang="ts">
  import { Command, SearchIcon } from 'lucide-svelte';
  import { inputStyles } from '@/ui/styles';
  import { cn } from '@/utils/cn';

  interface Props {
    searchTerm?: string;
    placeholder?: string;
    onChange: (value: string) => void;
  }

  let inputElement;
  let { searchTerm = $bindable(), placeholder = 'Search...', onChange }: Props = $props();

  function focusInput(node: HTMLElement) {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        node.focus();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return {
      destroy() {
        window.removeEventListener('keydown', handleKeydown);
      }
    };
  }
</script>

<div class="sticky top-[63px] z-50">
  <div class="relative w-full text-[16px]">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
      <SearchIcon size={20} class="pointer-events-none" strokeWidth={searchTerm ? 2.5 : 1.5} />
    </div>
    <input
      type="search"
      autocomplete="off"
      class={cn(inputStyles, 'py-3 pr-[54px] text-[16px]')}
      {placeholder}
      bind:value={searchTerm}
      bind:this={inputElement}
      use:focusInput
      oninput={(event) => onChange(event.currentTarget.value)}
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-500">
      <div class="pointer-events-none flex h-full items-center gap-x-1 font-mono">
        <Command size={16} />
        <span>K</span>
      </div>
    </div>
  </div>
</div>
