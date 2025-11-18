// @unocss-include
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

export const layoutVariants = tv({
  compoundVariants: [
    {
      class: {
        rail: '-right-2'
      },
      collapsible: 'offcanvas',
      side: 'left'
    },
    {
      class: {
        rail: '-left-2'
      },
      collapsible: 'offcanvas',
      side: 'right'
    },
    {
      class: {
        rail: 'group-data-[state=collapsed]:right-0'
      },
      collapsible: 'offcanvas',
      side: 'left',
      variant: 'inset'
    },
    {
      class: {
        rail: 'group-data-[state=collapsed]:left-0'
      },
      collapsible: 'offcanvas',
      side: 'right',
      variant: 'inset'
    },
    {
      class: {
        rail: 'group-data-[state=collapsed]:right-2'
      },
      collapsible: 'offcanvas',
      side: 'left',
      variant: 'floating'
    },
    {
      class: {
        rail: 'group-data-[state=collapsed]:left-2'
      },
      collapsible: 'offcanvas',
      side: 'right',
      variant: 'floating'
    },
    {
      class: {
        main: 'md:group-data-[state=collapsed]:ml-2'
      },
      collapsible: 'offcanvas',
      variant: 'inset'
    }
  ],
  defaultVariants: {
    collapsible: 'icon',
    side: 'left',
    variant: 'sidebar'
  },
  slots: {
    header: 'relative flex items-center',
    main: 'relative flex flex-1 flex-col min-h-full bg-background',
    mobile: 'flex flex-col size-full',
    mobileRoot: 'w-[var(--sidebar-width)] bg-sidebar-background p-0 [&>button]:hidden',
    rail: [
      'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear',
      `after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-border sm:flex`
    ],
    root: 'group relative flex w-full min-h-full data-[side=right]:flex-row-reverse',
    sidebar: [
      `flex flex-col size-full bg-sidebar-background`,
      `group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-border group-data-[variant=floating]:border-solid group-data-[variant=floating]:shadow`
    ],
    sidebarGapHandler: [
      `relative h-full w-[var(--sidebar-width)] bg-transparent transition-width duration-200 ease-linear`,
      `group-data-[collapsible=offcanvas]:w-0`,
      `group-data-[side=right]:rotate-180`
    ],
    sidebarRoot: 'hidden md:block',
    sidebarWrapper: `absolute inset-y-0 z-10 hidden h-full w-[var(--sidebar-width)] transition-[left,right,width,opacity] duration-200 ease-linear md:flex`,
    trigger: ''
  },
  variants: {
    collapsible: {
      icon: {},
      offcanvas: {
        rail: `translate-x-0 after:left-full hover:bg-sidebar-background`,
        sidebarWrapper: 'group-data-[state=collapsed]:opacity-0'
      }
    },
    side: {
      left: {
        rail: 'cursor-w-resize group-data-[state=collapsed]:cursor-e-resize -right-4',
        sidebarWrapper: 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
      },
      right: {
        rail: 'cursor-e-resize group-data-[state=collapsed]:cursor-w-resize left-0',
        sidebarWrapper: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]'
      }
    },
    variant: {
      floating: {
        sidebarGapHandler: `w-[calc(var(--sidebar-width)+1rem)] group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]`,
        sidebarWrapper: `p-2 w-[calc(var(--sidebar-width)+1rem)] group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]`
      },
      inset: {
        main: `md:m-2 md:ml-0 md:rounded-xl md:shadow`,
        root: 'bg-sidebar-background',
        sidebarGapHandler: `w-[calc(var(--sidebar-width)+1rem)] group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]`,
        sidebarWrapper: `p-2 w-[calc(var(--sidebar-width)+1rem)] group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]`
      },
      sidebar: {
        sidebarGapHandler: 'group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]',
        sidebarWrapper: `group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l`
      }
    }
  }
});

type LayoutVariants = VariantProps<typeof layoutVariants>;

export type LayoutVariant = NonNullable<LayoutVariants['variant']>;
export type LayoutCollapsible = NonNullable<LayoutVariants['collapsible']>;
export type LayoutSide = NonNullable<LayoutVariants['side']>;

export type LayoutSlots = keyof typeof layoutVariants.slots;
