import type { DetailedHTMLProps, TableHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="not-prose my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table
        className={cn(
          'w-full border-collapse text-base',
          className
        )}
        {...props}
      />
    </div>
  );
}

type THeadProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export function THead({ className, ...props }: THeadProps) {
  return (
    <thead
      className={cn(
        'bg-muted/50 dark:bg-muted/80',
        className
      )}
      {...props}
    />
  );
}

type TBodyProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export function TBody({ className, ...props }: TBodyProps) {
  return <tbody className={cn('divide-y divide-border', className)} {...props} />;
}

type TRProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export function TR({ className, ...props }: TRProps) {
  return (
    <tr
      className={cn(
        'transition-colors',
        'border-b border-border last:border-0',
        // GitHub 风格的隔行变色
        'even:bg-muted/30 dark:even:bg-muted/50',
        'hover:bg-muted/50 dark:hover:bg-muted/70',
        className
      )}
      {...props}
    />
  );
}

type THProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function TH({ className, ...props }: THProps) {
  return (
    <th
      className={cn(
        'h-12 px-4 text-center align-middle font-semibold',
        'text-lg',
        'text-[--shiki-light]',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式
        '[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono [&_code]:font-normal [&_code]:text-foreground',
        '[&_code]:whitespace-nowrap',
        className
      )}
      {...props}
    />
  );
}

type TDProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function TD({ className, ...props }: TDProps) {
  return (
    <td
      className={cn(
        'p-4 align-middle text-center font-500',
        'text-base',
        'text-[--shiki-light]',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式
        '[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono [&_code]:font-normal [&_code]:text-foreground',
        '[&_code]:whitespace-nowrap',
        className
      )}
      {...props}
    />
  );
}

