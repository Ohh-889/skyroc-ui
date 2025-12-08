'use client';

import { useState } from 'react';
import { Tree } from 'skyroc-ui';
import { treeData } from './shared';

const TreeMultiple = () => {
  const [value, setValue] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>(['documents', 'photos']);

  return (
    <div className="w-full max-w-[320px]">
      <Tree
        multiple
        expanded={expanded}
        items={treeData}
        value={value}
        onExpandedChange={setExpanded}
        onValueChange={v => setValue(v as string[])}
      />

      {value.length > 0 && (
        <div className="text-muted-foreground mt-4 text-sm">
          Selected:
          {value.join(',')}
        </div>
      )}
    </div>
  );
};

export default TreeMultiple;
