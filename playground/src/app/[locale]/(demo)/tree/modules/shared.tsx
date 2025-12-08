import type { TreeItemData } from 'skyroc-ui';

export interface DemoTreeItem extends TreeItemData {
  label: string;
  icon?: string;
  children?: DemoTreeItem[];
}

export const treeData: DemoTreeItem[] = [
  {
    value: 'documents',
    label: 'Documents',
    children: [
      { value: 'resume', label: 'Resume.pdf' },
      { value: 'cover-letter', label: 'Cover Letter.docx' },
      { value: 'projects', label: 'Projects', children: [{ value: 'project-a', label: 'Project A' }, { value: 'project-b', label: 'Project B' }] }
    ]
  },
  {
    value: 'photos',
    label: 'Photos',
    children: [
      { value: 'vacation', label: 'Vacation', children: [{ value: 'beach', label: 'Beach.jpg' }, { value: 'mountain', label: 'Mountain.jpg' }] },
      { value: 'family', label: 'Family.jpg' }
    ]
  },
  {
    value: 'music',
    label: 'Music',
    children: [
      { value: 'rock', label: 'Rock', children: [{ value: 'classic-rock', label: 'Classic Rock' }, { value: 'alternative', label: 'Alternative' }] },
      { value: 'jazz', label: 'Jazz' }
    ]
  }
];

export function generateLargeTreeData(count: number = 100): DemoTreeItem[] {
  const items: DemoTreeItem[] = [];
  for (let i = 0; i < count; i++) {
    const item: DemoTreeItem = { value: `folder-${i}`, label: `Folder ${i + 1}`, children: [] };
    const childCount = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < childCount; j++) {
      const child: DemoTreeItem = { value: `folder-${i}-file-${j}`, label: `File ${j + 1}.txt` };
      if (Math.random() > 0.7) {
        child.children = [];
        const grandchildCount = Math.floor(Math.random() * 3) + 1;
        for (let k = 0; k < grandchildCount; k++) {
          child.children.push({ value: `folder-${i}-file-${j}-sub-${k}`, label: `Subfile ${k + 1}.txt` });
        }
      }
      item.children!.push(child);
    }
    items.push(item);
  }
  return items;
}
