import type { DetailedHTMLProps, TableHTMLAttributes } from 'react'
import cn from 'clsx'

type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>

export const Table = ({ className, ...props }: TableProps) => {
  return (
    <div className="not-prose border-border my-6 w-full overflow-x-auto rounded-lg border">
      <table
        className={cn(
          'w-full border-collapse text-base',
          className,
        )}
        {...props}
      />
    </div>
  )
}

type THeadProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export const THead = ({ className, ...props }: THeadProps) => {
  return (
    <thead
      className={cn(
        'bg-muted/50 dark:bg-muted/80',
        className,
      )}
      {...props}
    />
  )
}

type TBodyProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export const TBody = ({ className, ...props }: TBodyProps) => {
  return (
    <tbody
      className={cn('divide-border divide-y', className)}
      {...props}
    />
  )
}

type TRProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>

export const TR = ({ className, ...props }: TRProps) => {
  return (
    <tr
      className={cn(
        'transition-colors',
        'border-border border-b last:border-0',
        // GitHub 风格的隔行变色
        'even:bg-muted/30 dark:even:bg-muted/50',
        'hover:bg-muted/50 dark:hover:bg-muted/70',
        className,
      )}
      {...props}
    />
  )
}

type THProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>

export const TH = ({ className, ...props }: THProps) => {
  return (
    <th
      className={cn(
        'h-12 px-4 text-center align-middle font-semibold',
        'text-lg',
        'text-[--shiki-light]',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式
        '[&_code]:bg-muted [&_code]:text-foreground [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-normal',
        '[&_code]:whitespace-nowrap',
        className,
      )}
      {...props}
    />
  )
}

type TDProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>

export const TD = ({ className, ...props }: TDProps) => {
  return (
    <td
      className={cn(
        'font-500 p-4 text-center align-middle',
        'text-base',
        'text-[--shiki-light]',
        '[&:has([role=checkbox])]:pr-0',
        // 代码块样式
        '[&_code]:bg-muted [&_code]:text-foreground [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-normal',
        '[&_code]:whitespace-nowrap',
        className,
      )}
      {...props}
    />
  )
}
