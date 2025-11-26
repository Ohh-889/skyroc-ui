'use client';

import { useCallback, useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import { highlightCode } from '../../lib/shiki';
import type { DependencyModule, NpmImport } from './dependencyResolver';
import { useDemoComponents } from './DemoScope';
import { PreviewContent } from './PreviewContent';
import { PreviewFooter } from './PreviewFooter';
import { PreviewHeader } from './PreviewHeader';
import { useCodeCompiler } from './useCodeCompiler';

interface LiveCodePreviewProps {
  code: string;
  title?: string;
  children?: React.ReactNode;
  dependencies?: DependencyModule[];
  mainFileNpmImports?: NpmImport[];
}

/**
 * 实时代码预览组件
 * 支持三种模式：预览、代码、分屏
 */
export const LiveCodePreview = ({ code: initialCode, title, children, dependencies = [], mainFileNpmImports = [] }: LiveCodePreviewProps) => {
  // 状态管理
  const [mode, setMode] = useState<'preview' | 'code' | 'split'>('preview');
  const [code, setCode] = useState(initialCode);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const hasChanged = code !== initialCode;
  const contextComponents = useDemoComponents();

  // 编译代码（仅在分屏模式下）
  const { component: liveComponent, error: compileError } = useCodeCompiler({
    code,
    enabled: mode === 'split',
    contextComponents,
    dependencies,
    mainFileNpmImports
  });

  // 复制代码
  const handleCopy = useCallback(async () => {
    // 代码模式使用 initialCode（不可变），分屏模式使用当前 code
    const codeToCopy = mode === 'code' ? initialCode : code;
    await navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
  }, [code, initialCode, mode]);

  // 重置代码
  const handleReset = useCallback(() => {
    setCode(initialCode);
  }, [initialCode]);

  // 切换全屏
  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  // 复制状态自动清除
  useEffect(() => {
    if (!copied)
      return;
    const timer = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(timer);
  }, [copied]);

  // 代码模式下高亮代码（使用 initialCode）
  useEffect(() => {
    if (mode !== 'code')
      return;

    let canceled = false;
    setIsLoading(true);

    highlightCode(initialCode, 'tsx').then((result) => {
      if (!canceled) {
        setHighlightedHtml(result);
        setIsLoading(false);
      }
    });

    return () => {
      canceled = true;
    };
  }, [initialCode, mode]);

  return (
    <div
      className={cn(
        'group relative my-8 overflow-hidden rounded-xl border transition-all',
        // 亮色模式：纯白背景，细边框
        'border-border bg-white',
        // 暗色模式：深色背景，更深的边框
        'dark:border-zinc-800 dark:bg-zinc-900',
        // 全屏模式
        isFullscreen && 'fixed inset-6 z-50 m-0 shadow-2xl'
      )}
    >
      {/* 头部 */}
      <PreviewHeader
        copied={copied}
        hasChanged={hasChanged}
        isFullscreen={isFullscreen}
        mode={mode}
        title={title}
        onCopy={handleCopy}
        onModeChange={setMode}
        onReset={handleReset}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* 内容区 */}
      <PreviewContent
        code={code}
        compileError={compileError}
        highlightedHtml={highlightedHtml}
        isFullscreen={isFullscreen}
        isLoading={isLoading}
        liveComponent={liveComponent}
        mode={mode}
        onCodeChange={setCode}
      >
        {children}
      </PreviewContent>

      {/* 页脚 - 仅在实时预览模式下显示 */}
      {mode === 'split' && <PreviewFooter lineCount={code.split('\n').length} />}

      {/* 已复制提示 */}
      {copied
        ? (
          <div className="pointer-events-none absolute right-3 bottom-10 rounded-md bg-black/90 px-3 py-1.5 text-xs text-white shadow-lg dark:bg-white/90 dark:text-black">
            已复制
          </div>
        )
        : null}
    </div>
  );
};
