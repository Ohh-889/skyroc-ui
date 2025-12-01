'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from 'skyroc-ui';

const ResizableHorizontal = () => {
  return (
    <ResizablePanelGroup
      className="max-w-md rounded-lg border"
      direction="horizontal"
      id="demo-horizontal"
    >
      <ResizablePanel
        defaultSize={50}
        minSize={30}
      >
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel
        defaultSize={50}
        minSize={30}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Main</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableHorizontal;
