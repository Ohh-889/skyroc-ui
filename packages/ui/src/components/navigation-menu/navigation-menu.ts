import { tv } from 'tailwind-variants';

export const navigationMenuVariants = tv({
  defaultVariants: {
    size: 'md'
  },
  slots: {
    arrow: 'relative top-[70%] rotate-45 border border-border bg-background rounded-[2px]',
    childLink: [
      `flex items-start select-none rounded-md leading-none no-underline outline-none transition-colors duration-200 cursor-pointer `,
      `focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground`
    ],
    childLinkContent: `flex flex-col items-start`,
    childLinkDescription: `line-clamp-2 text-muted-foreground leading-snug`,
    childLinkIcon: 'shrink-0 text-muted-foreground',
    childLinkLabel: `font-medium leading-none`,
    childList: `grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]`,
    childListItem: `list-none`,
    content: [
      `left-0 top-0 w-full md:absolute md:w-auto p-2 pr-2.5 `,
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 ',
      'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none'
    ],
    indicator: [
      `absolute top-full z-2 flex mt-1px w-[--radix-navigation-menu-indicator-size] items-end justify-center overflow-hidden transition-transform duration-200 ease-out translate-x-[--radix-navigation-menu-indicator-position]`,
      `data-[state=visible]:animate-in data-[state=visible]:fade-in-0`,
      `data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0`
    ],
    item: `list-none relative`,
    itemIcon: 'shrink-0 text-muted-foreground',
    link: [
      `group relative w-full flex items-center rounded-md font-medium outline-none cursor-pointer decoration-[none]`,
      `focus:bg-accent focus:text-accent-foreground`,
      `hover:bg-accent hover:text-accent-foreground`,
      `disabled:pointer-events-none disabled:opacity-50`
    ],
    linkIcon: 'shrink-0 self-start text-muted-foreground',
    linkLabel: 'truncate',
    list: `group flex flex-1 list-none items-center justify-center my-0`,
    root: `group/navigation-menu flex-1  relative z-2 w-full flex justify-center`,
    trigger: [
      `group inline-flex w-max items-center justify-center rounded-md bg-background font-medium transition-colors duration-200 decoration-none`,
      `hover:bg-accent hover:text-accent-foreground`,
      `focus:bg-accent focus:text-accent-foreground focus:outline-none`,
      `disabled:pointer-events-none disabled:opacity-50`,
      `data-[active]:bg-accent/50`,
      `data-[state=open]:bg-accent/50`
    ],
    triggerIcon: `relative top-px transition duration-200 group-data-[state=open]:rotate-180`,
    viewport: [
      'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]'
    ],
    viewportRoot: `absolute top-full left-0  z-50 flex isolate justify-center`
  },
  variants: {
    size: {
      '2xl': {
        arrow: 'size-4.5',
        childLink: 'gap-3.5 px-3.5 py-2.5',
        childLinkDescription: 'mt-2.5',
        childList: 'gap-3.5 p-3.5',
        indicator: 'h-4',
        link: 'gap-3.5 px-3.5 py-2.5',
        linkIcon: 'size-4.5 -ml-3.5',
        list: 'gap-2.5 text-xl',
        trigger: 'gap-3.5 px-3.5 py-2.5',
        viewport: 'mt-4'
      },
      'lg': {
        arrow: 'size-3.5',
        childLink: 'gap-2.5 px-2.5 py-1.5',
        childLinkDescription: 'mt-1.75',
        childList: 'gap-2.5 p-2.5',
        indicator: 'h-3',
        link: 'gap-2.5 px-2.5 py-1.5',
        linkIcon: 'size-3.5 -ml-2.5',
        list: 'gap-1.75 text-base',
        trigger: 'gap-2.5 px-2.5 py-1.5',
        viewport: 'mt-3'
      },
      'md': {
        arrow: 'size-3',
        childLink: 'gap-2 px-2 py-1.5',
        childLinkDescription: 'mt-1.5',
        childList: 'gap-2 p-2',
        indicator: 'h-2.5',
        link: 'gap-2 px-2 py-1.5',
        linkIcon: 'size-3 -ml-2',
        list: 'gap-1.5 text-sm',
        trigger: 'gap-2 px-2 py-1.5',
        viewport: 'mt-2.5'
      },
      'sm': {
        arrow: 'size-2.5',
        childLink: 'gap-1.5 px-1.5 py-1',
        childLinkDescription: 'mt-1.25',
        childList: 'gap-1.75 p-1.75',
        indicator: 'h-2',
        link: 'gap-1.5 px-1.5 py-1',
        linkIcon: 'size-2.5 -ml-1.5',
        list: 'gap-1.25 text-xs',
        trigger: 'gap-1.5 px-1.5 py-1',
        viewport: 'mt-2'
      },
      'xl': {
        arrow: 'size-4',
        childLink: 'gap-3 px-3 py-2',
        childLinkDescription: 'mt-2',
        childList: 'gap-3 p-3',
        indicator: 'h-3.5',
        link: 'gap-3 px-3 py-2',
        linkIcon: 'size-4 -ml-3',
        list: 'gap-2 text-lg',
        trigger: 'gap-3 px-3 py-2',
        viewport: 'mt-3.5'
      },
      'xs': {
        arrow: 'size-2.25',
        childLink: 'gap-1 px-1 py-1',
        childLinkDescription: 'mt-1.25',
        childList: 'gap-1.5 p-1.5',
        indicator: 'h-1.75',
        link: 'gap-1 px-1 py-1',
        linkIcon: 'size-2 -ml-1',
        list: 'gap-1 text-2xs',
        trigger: 'gap-1 px-1 py-1',
        viewport: 'mt-1.75'
      }
    }
  }
});

export type NavigationMenuSlots = keyof typeof navigationMenuVariants.slots;
