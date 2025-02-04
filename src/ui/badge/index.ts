import { type VariantProps, tv } from 'tailwind-variants';
export { default as Badge } from './badge.svelte';

export const badgeVariants = tv({
  base: 'inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-xs font-mono hover:underline transition-colors duration-100',
  variants: {
    variant: {
      default:
        'bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/50'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type Variant = VariantProps<typeof badgeVariants>['variant'];
