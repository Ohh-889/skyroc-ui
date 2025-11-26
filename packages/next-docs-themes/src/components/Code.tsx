'use client';

import type { FC, HTMLAttributes, MouseEvent } from 'react';
import cn from 'clsx';
import CopyButton from './CopyButton';

type CodeProps = HTMLAttributes<HTMLElement> & {
  'data-copy'?: boolean;
  'data-language'?: string;
  'data-show-line-numbers'?: '';
};

const Code: FC<CodeProps> = (rest) => {
  const {
    children,
    className,
    'data-copy': copy,
    'data-language': language,
    'data-show-line-numbers': showLineNumbers,
    ...props
  } = rest;

  const isBlock = className?.includes('hljs') || Boolean(language);

  function getContent(event: MouseEvent<HTMLButtonElement>) {
    const container = event.currentTarget.closest('.code-block');
    return container?.querySelector('pre code')?.textContent ?? '';
  }

  return (
    <code
      dir="ltr"
      {...props}
      data-show-line-numbers={showLineNumbers}
      className={cn(
        'font-mono text-[13px] leading-relaxed',
        'flex-wrap items-center justify-between',
        'text-gray-800 dark:text-gray-100',

        isBlock
          ? [
            'block w-full break-words whitespace-pre',
            'bg-transparent',
            'selection:bg-muted selection:text-foreground',
            'before:hidden after:hidden',
            showLineNumbers === '' && '[counter-reset:line]'
            // 行号支持
          ]
          : [
            // inline code 样式 - 内容自适应宽度
            'inline-block flex-wrap rounded-md px-[0.3em] py-[0.15em] ',
            'text-foreground/90 font-mono text-[0.875em] leading-normal',
            'bg-muted/40 dark:border-neutral-700 dark:bg-neutral-800'
          ],
        className
      )}
    >
      {children}
      {copy ? <CopyButton getContent={getContent} /> : null}
    </code>
  );
};

export default Code;
