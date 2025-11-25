'use client';

import type { ComponentProps, FC } from 'react';
import cn from 'clsx';

// 美观的无序列表组件
export const UL: FC<ComponentProps<'ul'>> = ({ children, className, ...props }) => {
  return (
    <ul
      className={cn(
        'my-6 space-y-3',
        'list-none',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

// 美观的列表项组件
export const LI: FC<ComponentProps<'li'>> = ({ children, className, ...props }) => {
  return (
    <li
      className={cn(
        'group relative flex items-center gap-3 rounded-lg px-4 py-3',
        'bg-muted/30 backdrop-blur-sm',
        'border border-border/50',
        'transition-all duration-200',
        'hover:bg-muted/50 hover:border-border hover:shadow-sm',
        'hover:translate-x-1',
        className
      )}
      {...props}
    >
      {/* 装饰性图标点 */}
      <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 ring-4 ring-primary/10 transition-all group-hover:bg-primary group-hover:ring-primary/20" />

      {/* 内容 */}
      <span className="flex-1 text-sm leading-relaxed text-foreground/90 group-hover:text-foreground">
        {children}
      </span>
    </li>
  );
};

// 有序列表组件
export const OL: FC<ComponentProps<'ol'>> = ({ children, className, ...props }) => {
  return (
    <ol
      className={cn(
        'my-6 space-y-3',
        'list-none counter-reset-[item]',
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
};
