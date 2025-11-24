'use client';

import { useState } from 'react';
import { Code, Eye } from 'lucide-react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
}

export const ComponentPreview = ({ children, code }: ComponentPreviewProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border-border my-6 overflow-hidden rounded-lg border">
      <div className="bg-muted/30 border-border flex items-center justify-between border-b px-4 py-2">
        <span className="text-muted-foreground text-sm font-medium">预览</span>

        <div className="flex gap-1">
          <button
            className={`rounded-md p-2 transition-colors ${
              !showCode ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setShowCode(false)}
          >
            <Eye className="size-4" />
          </button>

          {code
            ? (
              <button
                className={`rounded-md p-2 transition-colors ${
                  showCode ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setShowCode(true)}
              >
                <Code className="size-4" />
              </button>
            )
            : null}
        </div>
      </div>

      {!showCode
        ? (
          <div className="bg-background flex min-h-[200px] items-center justify-center p-8">{children}</div>
        )
        : (
          <div className="bg-muted/20">
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{code}</code>
            </pre>
          </div>
        )}
    </div>
  );
};
