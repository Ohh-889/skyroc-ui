'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { Button } from 'skyroc-ui';

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

const CodeBlock = ({ code, filename = 'App.tsx' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 简单的语法高亮
  const highlightCode = (text: string) => {
    return text
      .replace(/(import|export|from|default|function|return|const|let|var)/g, '<span class="text-pink-500 dark:text-pink-400">$1</span>')
      .replace(/('[\w\-@/]+')/g, '<span class="text-emerald-600 dark:text-emerald-400">$1</span>')
      .replace(/(&lt;|&gt;|[{}()])/g, '<span class="text-foreground/80">$1</span>')
      .replace(/(Button|Input|Alert|Badge|Switch|Card|Tabs)/g, '<span class="text-cyan-600 dark:text-cyan-400">$1</span>')
      .replace(/(variant|color|size|className)=/g, '<span class="text-purple-600 dark:text-purple-400">$1</span>=')
      .replace(/("[\w\-]+")/g, '<span class="text-amber-600 dark:text-amber-400">$1</span>');
  };

  const formattedCode = code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* 发光边框效果 */}
      <div className="from-primary to-primary absolute -inset-px rounded-2xl bg-linear-to-r via-purple-500 opacity-20 blur-sm" />

      <div className="group border-border bg-card relative overflow-hidden rounded-2xl border shadow-2xl">
        {/* 顶部工具栏 */}
        <div className="border-border bg-muted/50 flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />

            <span className="text-muted-foreground ml-4 flex items-center gap-2 text-xs">
              <Terminal className="size-3" />
              {filename}
            </span>
          </div>

          <Button
            color="secondary"
            variant="ghost"
            onClick={handleCopy}
          >
            {copied
              ? (
                <>
                  <Check className="size-3.5" />
                  已复制
                </>
              )
              : (
                <>
                  <Copy className="size-3.5" />
                  复制
                </>
              )}
          </Button>
        </div>

        {/* 代码内容 */}
        <div className="bg-background overflow-x-auto p-6">
          <pre className="text-[13px] leading-[1.8]">
            <code
              className="text-foreground font-mono"
              dangerouslySetInnerHTML={{ __html: highlightCode(formattedCode) }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
