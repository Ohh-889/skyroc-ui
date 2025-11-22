'use client';

import { Check, Code2, Copy, Eye, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as React from 'react';

import { cn } from '../lib/cn';

interface LiveCodePreviewProps {
  code: string;
  title?: string;
  children?: React.ReactNode;
}

// 简单的代码编辑器
function CodeEditor({
  value,
  onChange,
  className
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    setLineCount(value.split('\n').length);
  }, [value]);

  return (
    <div className={cn('flex overflow-hidden font-mono text-[13px]', className)}>
      {/* 行号 */}
      <div className="select-none bg-gray-50 px-4 py-4 text-right text-gray-400 dark:bg-gray-900">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* 编辑区 */}
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const newValue = value.substring(0, start) + '  ' + value.substring(end);
            onChange(newValue);
            setTimeout(() => {
              e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
            }, 0);
          }
        }}
        spellCheck={false}
        className="flex-1 resize-none bg-white px-4 py-4 leading-6 text-gray-900 outline-none dark:bg-gray-950 dark:text-gray-100"
        style={{ tabSize: 2 }}
      />
    </div>
  );
}

// 实时编译和渲染组件
function LivePreview({ code }: { code: string }) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // 清理代码
      let cleanCode = code.trim();

      // 提取 import 语句中的组件名称
      const imports: Record<string, any> = {};
      const importRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
      let match;

      while ((match = importRegex.exec(cleanCode)) !== null) {
        const componentNames = match[1].split(',').map(n => n.trim());
        // 这里简化处理，实际应该动态加载组件
        // 暂时跳过，让用户自己处理组件
      }

      // 移除 import 语句
      cleanCode = cleanCode.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g, '');

      // 提取默认导出的组件
      const exportMatch = cleanCode.match(/export\s+default\s+function\s+(\w+)/);
      if (exportMatch) {
        cleanCode = cleanCode.replace(/export\s+default\s+/, '');
      }

      // 简单的JSX转换提示
      if (cleanCode.includes('<')) {
        // 检测JSX语法并给出友好提示
        setError('此编辑器暂不支持JSX语法的实时编译。\n\n建议:\n1. 使用普通的JavaScript\n2. 使用 React.createElement API\n3. 或在"预览"模式下查看原始效果');
        setComponent(null);
        return;
      }

      // 添加 React hooks
      const executeCode = `
        const { useState, useEffect, useCallback, useMemo, useRef } = React;
        ${cleanCode}
        return ${exportMatch ? exportMatch[1] : 'Demo'};
      `;

      // 创建函数并执行
      const componentFactory = new Function('React', executeCode);
      const GeneratedComponent = componentFactory(React);

      setComponent(() => GeneratedComponent);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setComponent(null);
    }
  }, [code]);

  if (error) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
          <div className="font-medium mb-2">💡 编辑器提示</div>
          <div className="mt-1 whitespace-pre-line text-xs">{error}</div>
        </div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-6 text-sm text-gray-400">加载中...</div>
    );
  }

  return (
    <div className="p-6">
      <Component />
    </div>
  );
}

export function LiveCodePreview({ code: initialCode, title, children }: LiveCodePreviewProps) {
  const [mode, setMode] = useState<'preview' | 'code' | 'split'>('preview');
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hasChanged = code !== initialCode;

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleReset = useCallback(() => {
    setCode(initialCode);
  }, [initialCode]);

  return (
    <div
      className={cn(
        'group my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950',
        isFullscreen && 'fixed inset-4 z-50 m-0'
      )}
    >
      {/* 顶部栏 */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{title || 'Demo'}</div>
          {hasChanged && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900 dark:text-amber-300">
              已修改
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {hasChanged && (
            <button
              onClick={handleReset}
              className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              title="重置"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={handleCopy}
            className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            title="复制代码"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            title={isFullscreen ? '退出全屏' : '全屏'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 模式切换 */}
      <div className="flex border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <button
          onClick={() => setMode('preview')}
          className={cn(
            'flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors',
            mode === 'preview'
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          )}
        >
          <Eye className="h-4 w-4" />
          预览
        </button>

        <button
          onClick={() => setMode('code')}
          className={cn(
            'flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors',
            mode === 'code'
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          )}
        >
          <Code2 className="h-4 w-4" />
          代码
        </button>

        <button
          onClick={() => setMode('split')}
          className={cn(
            'flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors',
            mode === 'split'
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          )}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v16m6-16v16" />
          </svg>
          分屏
        </button>
      </div>

      {/* 内容区 */}
      <div className="relative bg-gray-50 dark:bg-gray-900">
        {mode === 'preview' && (
          <ErrorBoundary
            fallbackRender={({ error }) => (
              <div className="flex min-h-[200px] items-center justify-center p-6">
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
                  <div className="font-medium">渲染错误</div>
                  <div className="mt-1 font-mono text-xs">{error.message}</div>
                </div>
              </div>
            )}
          >
            <div className="p-6">{code}</div>
          </ErrorBoundary>
        )}

        {mode === 'code' && (
          <div className="min-h-[300px]">
            <CodeEditor value={code} onChange={setCode} />
          </div>
        )}

        {mode === 'split' && (
          <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
            <div className="min-h-[300px]">
              <CodeEditor value={code} onChange={setCode} className="h-full" />
            </div>
            <ErrorBoundary
              fallbackRender={({ error }) => (
                <div className="flex min-h-[300px] items-center justify-center p-6">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
                    <div className="font-medium">渲染错误</div>
                    <div className="mt-1 font-mono text-xs">{error.message}</div>
                  </div>
                </div>
              )}
            >
              <LivePreview code={code} />
            </ErrorBoundary>
          </div>
        )}
      </div>

      {/* 底部信息 */}
      <div className="border-t border-gray-200 bg-white px-4 py-2 text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
        <div className="flex items-center justify-between">
          <span>修改代码后立即看到效果</span>
          <span>{code.split('\n').length} 行</span>
        </div>
      </div>

      {/* 复制成功提示 */}
      {copied && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-100">
            已复制到剪贴板
          </div>
        </div>
      )}
    </div>
  );
}

