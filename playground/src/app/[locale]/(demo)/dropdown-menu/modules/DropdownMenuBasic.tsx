'use client';

import { Button, DropdownMenu } from 'skyroc-ui';

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

const DropdownMenuBasic = () => {
  return (
    <DropdownMenu items={menus}>
      <Button variant="plain">Open Dropdown</Button>
    </DropdownMenu>
  );
};

export default DropdownMenuBasic;
