import { ContextMenu } from 'skyroc-ui';

const items = [
  { label: 'Back', shortcut: '⌘[' },
  { label: 'Forward', shortcut: '⌘]' },
  { label: 'Reload', shortcut: '⌘R' },
  { type: 'separator' as const },
  { label: 'Save As...', shortcut: '⌘S' },
  { label: 'Print...', shortcut: '⌘P' }
];

const ContextMenuBasic = () => {
  return (
    <ContextMenu items={items}>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm max-sm:w-auto">
        Right click here
      </div>
    </ContextMenu>
  );
};

export default ContextMenuBasic;

