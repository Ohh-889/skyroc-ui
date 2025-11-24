'use client';

interface PreviewFooterProps {
  lineCount: number;
}

/**
 * 预览组件的页脚
 */
export const PreviewFooter = ({ lineCount }: PreviewFooterProps) => {
  return (
    <div className="border-t border-border bg-muted/50 px-5 py-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          修改代码后立即看到效果
        </span>

        <span className="font-mono text-muted-foreground">
          {lineCount}
          {' '}
          行
        </span>
      </div>
    </div>
  );
};
