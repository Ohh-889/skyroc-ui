'use client';

import { ContextMenu } from 'skyroc-ui';

const menus = [
  {
    type: 'label' as const,
    label: 'My Account'
  },
  { type: 'item' as const, label: 'Profile', shortcut: '⌘⇧P' },
  { type: 'item' as const, label: 'Billing', shortcut: '⌘B' },
  { type: 'item' as const, label: 'Settings', shortcut: '⌘S' },
  { type: 'item' as const, label: 'Keyboard shortcuts', shortcut: '⌘K' },
  { type: 'separator' as const },
  { type: 'item' as const, label: 'Team', shortcut: '⌘⇧T' },
  {
    type: 'sub' as const,
    label: 'Invite Users',
    children: [
      { type: 'item' as const, label: 'Email', shortcut: '⌘⇧E' },
      { type: 'item' as const, label: 'Facebook', shortcut: '⌘⇧F' },
      { type: 'item' as const, label: 'Twitter', shortcut: '⌘⇧T' },
      { type: 'separator' as const },
      {
        type: 'sub' as const,
        label: 'More',
        children: [{ type: 'item' as const, label: 'Message', shortcut: '⌘M' }]
      }
    ]
  },
  { type: 'separator' as const },
  {
    type: 'item' as const,
    label: 'Github',
    onSelect: () => window.open('https://github.com', '_blank')
  },
  { type: 'item' as const, label: 'Support' },
  { type: 'item' as const, label: 'API', disabled: true },
  { type: 'separator' as const },
  { type: 'item' as const, label: 'Sign out', shortcut: '⌘⇧Q' }
];

const ContextMenuBasic = () => {
  return (
    <ContextMenu items={menus}>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
        Right click here
      </div>
    </ContextMenu>
  );
};

export default ContextMenuBasic;
