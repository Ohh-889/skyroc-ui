'use client';

import { Check, Code2, Columns2, Copy, Eye, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { ButtonIcon } from '@/components/button';
import { Segment } from '@/components/segment';

interface PreviewHeaderProps {
  title?: string
  hasChanged: boolean
  mode: 'preview' | 'code' | 'split'
  copied: boolean
  isFullscreen: boolean
  onModeChange: (mode: 'preview' | 'code' | 'split') => void
  onReset: () => void
  onCopy: () => void
  onToggleFullscreen: () => void
}

const tabs = [
  {
    label: (
      <span className="flex items-center gap-2">
        <Eye className="h-4 w-4" />
        预览
      </span>
    ),
    value: 'preview'
  },
  {
    label: (
      <span className="flex items-center gap-2">
        <Code2 className="h-4 w-4" />
        代码
      </span>
    ),
    value: 'code'
  },
  {
    label: (
      <span className="flex items-center gap-2">
        <Columns2 className="h-4 w-4" />
        实时预览
      </span>
    ),
    value: 'split'
  }
];

/**
 * 预览组件的头部
 */
export const PreviewHeader = ({
  title,
  hasChanged,
  mode,
  copied,
  isFullscreen,
  onModeChange,
  onReset,
  onCopy,
  onToggleFullscreen
}: PreviewHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-border bg-background px-5 py-3.5">
      <div className="flex items-center gap-3">
        <div className="text-sm font-semibold text-foreground">{title || 'Demo'}</div>

        {hasChanged
          ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/30">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-600 dark:bg-amber-400" />
              已修改
            </span>
          )
          : null}
      </div>

      <div className="flex items-center gap-3">
        <Segment
          items={tabs}
          value={mode}
          onValueChange={value => onModeChange(value as 'preview' | 'code' | 'split')}
        />

        <div className="h-4 w-px bg-border" />

        <div className="flex items-center gap-1.5">
          {hasChanged
            ? (
              <ButtonIcon
                title="重置代码"
                onClick={onReset}
              >
                <RotateCcw size={16} />
              </ButtonIcon>
            )
            : null}

          <ButtonIcon
            title="复制代码"
            onClick={onCopy}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </ButtonIcon>

          <ButtonIcon
            title={isFullscreen ? '退出全屏' : '全屏模式'}
            onClick={onToggleFullscreen}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};
