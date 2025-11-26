'use client';

import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { Segment } from '@ui/components/segment';
import { highlightCode } from '../lib/shiki';

interface Props {
  children: React.ReactNode;

  code: string;
  height?: number | string;
  lang?: string;
  name: string;
  tabs?: { label: string; value: string }[];
  title?: string;
}

const ComponentPreview: React.FC<Props> = ({ children, code, height = 360, lang = 'tsx', name, tabs, title }) => {
  const [active, setActive] = useState(tabs?.[0]?.value ?? 'preview');
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 异步高亮
  useEffect(() => {
    let canceled = false;
    setIsLoading(true);
    highlightCode(code, lang).then((result) => {
      if (!canceled) {
        setHtml(result);
        setIsLoading(false);
      }
    });
    return () => {
      canceled = true;
    };
  }, [code, lang]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
    catch {
      console.error('Copy failed');
    }
  };

  return (
    <div className="prose border-border/50 bg-background/50 my-8 overflow-hidden rounded-lg border shadow-sm">
      {/* Header */}
      <div className="border-border/50 bg-muted/40 flex items-center justify-between border-b px-4 py-2">
        <span className="text-foreground truncate text-sm font-medium">{title ?? name}</span>

        <Segment
          value={active}
          items={
            tabs ?? [
              { label: 'Preview', value: 'preview' },
              { label: 'Code', value: 'code' }
            ]
          }
          onValueChange={setActive}
        />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {active === 'preview' ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="bg-card flex items-center justify-center"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key="preview"
            style={{ height }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="bg-background relative"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key="code"
            transition={{ duration: 0.2 }}
          >
            {/* Copy */}
            <button
              title="Copy code"
              className={cn(
                'border-border/50 absolute top-3 right-3 z-10 rounded-md border p-1.5',
                'bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground'
              )}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>

            {/* Code */}
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className={cn(
                'h-[calc(100vh-380px)] overflow-auto',
                '[&_code]:whitespace-pre [&_pre]:m-0 [&_pre]:whitespace-pre'
              )}
            />

            {isLoading
              ? (
                <div className="text-muted-foreground absolute inset-0 flex items-center justify-center text-sm">
                  Loading code...
                </div>
              )
              : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComponentPreview;
