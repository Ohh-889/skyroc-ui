import type { MetadataRoute } from 'next';

const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'bottom-sheet',
  'breadcrumb',
  'button',
  'card',
  'carousel',
  'checkbox',
  'chip',
  'collapsible',
  'combobox',
  'command',
  'context-menu',
  'dialog',
  'divider',
  'drawer',
  'dropdown-menu',
  'form',
  'hover-card',
  'icon',
  'input',
  'input-otp',
  'keyboard-key',
  'label',
  'navigation-menu',
  'popover',
  'progress',
  'list',
  'radio',
  'resizable',
  'scroll-area',
  'select',
  'skeleton',
  'slider',
  'sonner',
  'tabs',
  'textarea',
  'toggle',
  'toggle-group',
  'tooltip'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ui-play.skyroc.me';
  const currentDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    }
  ];

  const componentPages: MetadataRoute.Sitemap = components.map(component => ({
    url: `${baseUrl}/${component}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [...staticPages, ...componentPages];
}
