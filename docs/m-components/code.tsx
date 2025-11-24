'use client'

import type { FC, HTMLAttributes } from 'react'
import cn from 'clsx'
import { CopyToClipboard } from './pre'

export const Code: FC<
  HTMLAttributes<HTMLElement> & {
    'data-copy'?: boolean
    'data-language'?: string
  }
> = (rest) => {
  const { children, className, 'data-copy': copy, 'data-language': language, ...props } = rest

  const isBlock = className?.includes('hljs') || Boolean(language)

  return (
    <code
      dir="ltr"
      {...props}
      style={{ display: 'flex' }}
      className={cn(
        // 共通样式
        'font-mono text-[13px] leading-relaxed',
        'flex-w items-center justify-between',
        'text-gray-800 dark:text-gray-100',

        // 如果是代码块
        isBlock
          ? [
            'block w-full break-words whitespace-pre',
            'bg-transparent',
            'selection:bg-muted selection:text-foreground',
            'before:hidden after:hidden',
            // 行号支持
            'data-line-numbers' in props && '[counter-reset:line]',
          ]
          : [
            // inline code 样式
            'border-border/50 bg-muted/40 inline rounded-md border px-[0.3em] py-[0.15em]',
            'text-foreground/90 font-mono text-[0.875em] leading-normal',
            'dark:border-neutral-700 dark:bg-neutral-800',
          ],
        className,
      )}
    >
      {children}
      {copy ? <CopyToClipboard /> : null}
    </code>
  )
}
