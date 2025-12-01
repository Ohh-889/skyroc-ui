'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from 'skyroc-ui';

const ResizableVertical = () => {
  return (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-md rounded-lg border"
      direction="vertical"
      id="demo-vertical"
    >
      <ResizablePanel
        defaultSize={50}
        minSize={30}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel
        defaultSize={50}
        minSize={30}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableVertical;
