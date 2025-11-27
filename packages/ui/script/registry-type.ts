import type { Registry } from 'shadcn/registry';

export const registerType: Registry['items'][number] = {
  files: [
    {
      path: 'src/types/shared.ts',
      target: 'types/shared.ts',
      type: 'registry:file'
    }
  ],
  name: 'types',
  title: 'Types',
  type: 'registry:file'
};
