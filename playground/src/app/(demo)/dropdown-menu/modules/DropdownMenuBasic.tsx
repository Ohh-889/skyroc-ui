import { Button, DropdownMenu } from 'skyroc-ui';

const items = [
  { label: 'Profile', shortcut: '⌘P' },
  { label: 'Settings', shortcut: '⌘S' },
  { type: 'separator' as const },
  { label: 'Log out', shortcut: '⌘Q' }
];

const DropdownMenuBasic = () => {
  return (
    <DropdownMenu items={items}>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenu>
  );
};

export default DropdownMenuBasic;

