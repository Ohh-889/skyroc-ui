'use client';

import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * 简单的代码编辑器组件
 */
export const CodeEditor = ({ value, onChange, className }: CodeEditorProps) => {
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    setLineCount(value.split('\n').length);
  }, [value]);

  return (
    <div className={cn('bg-background flex overflow-auto font-mono text-[13px]', className)}>
      {/* 行号 */}
      <div className="border-border bg-muted/50 text-muted-foreground sticky left-0 z-10 border-r px-3 py-4 text-right select-none">
        {Array.from({ length: lineCount }, (_, i) => (
          <div
            className="hover:text-foreground leading-6 transition-colors"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* 编辑区 */}
      <textarea
        className="bg-background text-foreground placeholder:text-muted-foreground min-w-0 flex-1 resize-none px-4 py-4 leading-6 outline-none"
        spellCheck={false}
        style={{ tabSize: 2 }}
        value={value}
        wrap="off"
        onChange={e => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const newValue = `${value.substring(0, start)}  ${value.substring(end)}`;
            onChange(newValue);
            setTimeout(() => {
              e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
            }, 0);
          }
        }}
      />
    </div>
  );
};
