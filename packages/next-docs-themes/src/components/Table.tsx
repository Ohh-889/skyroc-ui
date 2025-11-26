import type { DetailedHTMLProps, TableHTMLAttributes } from 'react';
import cn from 'clsx';

type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export const Table = ({ className, ...props }: TableProps) => {
  return (
    <div className="not-prose border-border my-6 w-full overflow-x-auto rounded-lg border shadow-sm">
      <table
        className={cn(
          'w-full table-fixed border-collapse text-base',
          className
        )}
        {...props}
      />
    </div>
  );
};

type THeadProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export const THead = ({ className, ...props }: THeadProps) => {
  return (
    <thead
      className={cn(
        'bg-muted/50 dark:bg-muted/80',
        className
      )}
      {...props}
    />
  );
};

type TBodyProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export const TBody = ({ className, ...props }: TBodyProps) => {
  return (
    <tbody
      className={cn('divide-border divide-y', className)}
      {...props}
    />
  );
};

type TRProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export const TR = ({ className, ...props }: TRProps) => {
  return (
    <tr
      className={cn(
        'transition-colors',
        'border-border border-b last:border-0',
        // GitHub 风格的隔行变色
        'even:bg-muted/30 dark:even:bg-muted/50',
        'hover:bg-muted/50 dark:hover:bg-muted/70',
        className
      )}
      {...props}
    />
  );
};

type THProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export const TH = ({ className, ...props }: THProps) => {
  return (
    <th
      className={cn(
        'h-12 px-4 text-center align-middle font-semibold',
        'text-base',
        'text-foreground',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式
        '[&_code]:bg-muted [&_code]:text-foreground [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-normal',
        '[&_code]:whitespace-nowrap',
        // 设置列宽
        'first:w-[15%] last:w-[30%] [&:nth-child(2)]:w-[29%] [&:nth-child(3)]:w-[26%]',
        className
      )}
      {...props}
    />
  );
};

type TDProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export const TD = ({ className, ...props }: TDProps) => {
  return (
    <td
      className={cn(
        'font-500 p-4 text-center align-middle',
        'text-sm',
        'text-muted-foreground',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式 - 支持多行布局，每行最多4个选项
        '[&_code]:bg-muted [&_code]:text-foreground [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-normal',
        '[&_code]:my-0.5 [&_code]:inline-block',
        // 防止内容溢出
        'overflow-hidden',
        // 对于包含多个选项的单元格，让内容自然换行
        '[&:has(code)]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
};
