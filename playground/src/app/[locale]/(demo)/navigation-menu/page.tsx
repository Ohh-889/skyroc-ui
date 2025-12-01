import type { Metadata } from 'next';
import { NavigationMenu } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('navigation-menu');
}

const homeChildren = [
  { description: 'Re-usable components built using Radix UI and Tailwind CSS.', href: '/docs', label: 'Introduction' },
  { description: 'How to install dependencies and structure your app.', href: '/docs/installation', label: 'Installation' },
  { description: 'Styles for headings, paragraphs, lists...etc', href: '/docs/primitives/typography', label: 'Typography' }
];

const componentsChildren = [
  {
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    href: '/docs/primitives/alert-dialog',
    label: 'Alert Dialog'
  },
  {
    description: 'For sighted users to preview content available behind a link.',
    href: '/docs/primitives/hover-card',
    label: 'Hover Card'
  },
  {
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    href: '/docs/primitives/progress',
    label: 'Progress'
  },
  {
    description: 'Visually or semantically separates content.',
    href: '/docs/primitives/scroll-area',
    label: 'Scroll-area'
  },
  {
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    href: '/docs/primitives/tabs',
    label: 'Tabs'
  },
  {
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    href: '/docs/primitives/tooltip',
    label: 'Tooltip'
  }
];

const listChildren = [
  { description: 'Browse all components in the library.', href: '#', label: 'Components' },
  { description: 'Learn how to use the library.', href: '#', label: 'Documentation' },
  { description: 'Read our latest blog posts.', href: '#', label: 'Blog' }
];

const simpleChildren = [
  { href: '#', label: 'Components' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Blocks' }
];

const items = [
  { children: homeChildren, label: 'Home' },
  { children: componentsChildren, label: 'Components' },
  { href: '/docs', label: 'Docs', type: 'link' as const },
  { children: listChildren, label: 'List' },
  { children: simpleChildren, label: 'Simple' }
];

const NavigationMenuDemo = () => (
  <div className="p-8">
    <h3 className="mb-4 text-lg font-semibold">Navigation Menu Demo</h3>

    <NavigationMenu
      items={items}
      viewport={false}
    />
  </div>
);

export default NavigationMenuDemo;
