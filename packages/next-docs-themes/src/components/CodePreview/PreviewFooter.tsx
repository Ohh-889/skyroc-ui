'use client';

interface PreviewFooterProps {
  lineCount: number;
}

/**
 * 预览组件的页脚
 */
export const PreviewFooter = ({ lineCount }: PreviewFooterProps) => {
  return (
    <div className="border-border bg-muted/50 border-t px-5 py-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          修改代码后立即看到效果
        </span>

        <span className="text-muted-foreground font-mono">
          {lineCount}
          {' '}
          行
        </span>
      </div>
    </div>
  );
};
