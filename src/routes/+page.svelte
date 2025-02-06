<script lang="ts">
  import type { iSVG } from '@/types/svg';

  import { onMount } from 'svelte';
  import { queryParam } from 'sveltekit-search-params';
  import { ArrowDown, ArrowDownUpIcon, ArrowUpDownIcon, TrashIcon } from 'lucide-svelte';
  import Fuse from 'fuse.js';

  // Styles:
  import { cn } from '@/utils/cn';
  import { buttonStyles } from '@/ui/styles';

  // Components:
  import Search from '@/components/search.svelte';
  import Container from '@/components/container.svelte';
  import SvgCard from '@/components/svgCard.svelte';
  import Grid from '@/components/grid.svelte';
  import NotFound from '@/components/notFound.svelte';

  // Get all svgs:
  import { svgsData } from '@/data';

  // Settings:
  const allSvgs = JSON.parse(JSON.stringify(svgsData));
  const latestSorted = [...allSvgs].sort((a, b) => b.id! - a.id!);
  const alphabeticallySorted = [...allSvgs].sort((a, b) => a.title.localeCompare(b.title));
  const maxSvgsToShow = 30;

  // Fuzzy search setup:
  const fuse = new Fuse<iSVG>(allSvgs, {
    keys: ['title'],
    threshold: 0.35,
    ignoreLocation: true,
    isCaseSensitive: false,
    shouldSort: true
  });

  // URL params
  const searchParam = queryParam('search');

  // States:
  let sorted = $state<boolean>(false);
  let showAll = $state<boolean>(false);
  let searchTerm = $state<string>('');
  let filteredSvgs = $state<iSVG[]>([]);
  let displaySvgs = $state<iSVG[]>([]);

  const updateDisplaySvgs = () => {
    displaySvgs = showAll ? filteredSvgs : filteredSvgs.slice(0, 30);
  };

  const searchSvgs = () => {
    $searchParam = searchTerm || null;

    if (!searchTerm) {
      filteredSvgs = sorted ? alphabeticallySorted : latestSorted;
      updateDisplaySvgs();
      return;
    }

    if (searchTerm.length < 3) {
      filteredSvgs = allSvgs.filter((svg: iSVG) =>
        svg.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredSvgs = fuse.search(searchTerm).map((result) => result.item);
    }

    updateDisplaySvgs();
  };

  // Clear search:
  const clearSearch = () => {
    searchTerm = '';
    filteredSvgs = sorted ? alphabeticallySorted : latestSorted;
    updateDisplaySvgs();
  };

  // Sort:
  const sort = () => {
    sorted = !sorted;
    filteredSvgs = sorted ? alphabeticallySorted : latestSorted;
    updateDisplaySvgs();
  };

  onMount(() => {
    if ($searchParam) {
      searchTerm = $searchParam;
    }
    searchSvgs();
  });

  $effect.pre(() => {
    if (showAll || filteredSvgs) {
      updateDisplaySvgs();
    }
  });
</script>

<svelte:head>
  <title>A beautiful library with SVG logos - Svgl</title>
</svelte:head>

<Search
  {searchTerm}
  placeholder={`Search ${allSvgs.length} logos...`}
  onChange={(value) => {
    searchParam.set(value);
    searchTerm = value;
    searchSvgs();
  }}
/>

<Container>
  <div class={cn('mb-4 flex items-center justify-end', searchTerm.length > 0 && 'justify-between')}>
    {#if searchTerm.length > 0}
      <button
        class={cn(
          'flex items-center justify-center space-x-1 rounded-md py-1.5 text-sm font-medium opacity-80 transition-opacity hover:opacity-100',
          filteredSvgs.length === 0 && 'hidden'
        )}
        onclick={() => clearSearch()}
      >
        <TrashIcon size={16} strokeWidth={2} class="mr-1" />
        <span>Clear results</span>
      </button>
    {/if}
    <button
      class={cn(
        'flex items-center justify-center space-x-1 rounded-md py-1.5 text-sm font-medium opacity-80 transition-opacity hover:opacity-100',
        filteredSvgs.length === 0 && 'hidden'
      )}
      onclick={() => sort()}
    >
      {#if sorted}
        <ArrowDownUpIcon size={16} strokeWidth={2} class="mr-1" />
      {:else}
        <ArrowUpDownIcon size={16} strokeWidth={2} class="mr-1" />
      {/if}
      <span>{sorted ? 'Sort by latest' : 'Sort A-Z'}</span>
    </button>
  </div>
  <Grid>
    {#each displaySvgs as svg}
      <SvgCard svgInfo={svg} {searchTerm} />
    {/each}
  </Grid>
  {#if filteredSvgs.length > maxSvgsToShow && !showAll}
    <div class="mt-4 flex items-center justify-center">
      <button
        class={buttonStyles}
        onclick={() => {
          showAll = true;
          updateDisplaySvgs();
        }}
      >
        <div class="relative flex items-center space-x-2">
          <ArrowDown size={16} strokeWidth={2} />
          <span>Load All SVGs</span>
          <span class="opacity-70">
            ({filteredSvgs.length - maxSvgsToShow} more)
          </span>
        </div>
      </button>
    </div>
  {/if}
  {#if filteredSvgs.length === 0}
    <NotFound notFoundTerm={searchTerm} />
  {/if}
</Container>
