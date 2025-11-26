'use client';
import React from 'react';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'clsx';
import { WrapText } from 'lucide-react';
import type { ButtonProps } from 'skyroc-ui';
import { Button } from 'skyroc-ui';
import CopyButton from './CopyButton';

/* -------------------- ToggleWordWrapButton -------------------- */
function toggleWordWrap() {
  const htmlDataset = document.documentElement.dataset;
  if ('nextraWordWrap' in htmlDataset)
    delete htmlDataset.nextraWordWrap;
  else htmlDataset.nextraWordWrap = '';
}

export const ToggleWordWrapButton = (props: ButtonProps) => {
  const { size, ...rest } = props;

  return (
    <Button
      title="切换自动换行"
      variant="outline"
      onClick={toggleWordWrap}
    >
      <WrapText size={16} />
    </Button>
  );
};

/* -------------------- Pre 组件 -------------------- */
export interface PreProps extends HTMLAttributes<HTMLPreElement> {
  'data-copy'?: '';
  'data-filename'?: string;
  'data-language'?: string;
  'data-word-wrap'?: '';
  'icon'?: ReactNode;
}

export const Pre: FC<PreProps> = (rest) => {
  const {
    children,
    className,
    'data-copy': copy,
    'data-filename': filename,
    'data-language': _lang,
    'data-word-wrap': hasWordWrap,
    icon,
    ...props
  } = rest;

  const copyButton = copy === '' && <CopyButton />;

  return (
    <div className="code-block relative my-6 w-full">
      {/* 文件名栏 */}
      {filename
        ? (
          <div
            className={cn(
              'border-border/50 flex items-center justify-between gap-2 rounded-t-md border border-b-0',
              'bg-gray-100 px-4 py-2 text-xs text-gray-700 dark:bg-neutral-900 dark:text-gray-200'
            )}
          >
            <div className="flex min-w-0 items-center gap-2">
              {icon}
              <span className="truncate">{filename}</span>
            </div>

            {copyButton}
          </div>
        )
        : null}

      {/* 代码区 */}
      <div
        className={cn(
          'group border-border/50 relative rounded-b-md border bg-white dark:bg-black',
          filename ? 'rounded-t-none' : 'rounded-md'
        )}
      >
        {/* hover 按钮区 */}
        <div
          className={cn(
            'absolute right-3 flex gap-2 transition-opacity',
            'opacity-0 group-hover:opacity-100 focus-within:opacity-100',
            filename ? 'top-3' : 'top-3'
          )}
        >
          {hasWordWrap === '' && <ToggleWordWrapButton />}
          {!filename && copyButton}
        </div>

        <pre
          className={cn(
            'not-prose overflow-x-auto p-4 text-sm leading-relaxed subpixel-antialiased',
            'text-foreground dark:text-foreground/90 bg-transparent',
            'font-mono',
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
    </div>
  );
};
