'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '../lib/cn';

interface CodeEditorProps {
  code: string;
  language?: string;
  onChange?: (code: string) => void;
  readOnly?: boolean;
  className?: string;
}

export function CodeEditor({ code, language = 'tsx', onChange, readOnly = false, className }: CodeEditorProps) {
  const [value, setValue] = useState(code);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    setValue(code);
  }, [code]);

  useEffect(() => {
    setLineCount(value.split('\n').length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      setValue(newValue);
      onChange?.(newValue);

      // 设置光标位置
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  return (
    <div className={cn('relative flex font-mono text-sm', className)}>
      {/* 行号 */}
      <div className="select-none bg-muted/30 py-4 pr-4 pl-4 text-right text-muted-foreground/60">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* 代码编辑区 */}
      <div className="relative flex-1">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          readOnly={readOnly}
          spellCheck={false}
          className={cn(
            'w-full resize-none bg-transparent px-4 py-4 font-mono text-sm leading-6 text-foreground outline-none',
            'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/50',
            !readOnly && 'focus:bg-muted/5'
          )}
          style={{
            minHeight: '200px',
            tabSize: 2
          }}
        />
      </div>
    </div>
  );
}

