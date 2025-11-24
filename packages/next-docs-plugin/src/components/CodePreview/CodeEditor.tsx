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
    <div className={cn('flex overflow-hidden font-mono text-[13px] bg-background', className)}>
      {/* 行号 */}
      <div className="select-none border-r border-border bg-muted/50 px-3 py-4 text-right text-muted-foreground">
        {Array.from({ length: lineCount }, (_, i) => (
          <div
            className="leading-6 transition-colors hover:text-foreground"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* 编辑区 */}
      <textarea
        className="flex-1 resize-none bg-background px-4 py-4 leading-6 text-foreground outline-none placeholder:text-muted-foreground"
        spellCheck={false}
        style={{ tabSize: 2 }}
        value={value}
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
