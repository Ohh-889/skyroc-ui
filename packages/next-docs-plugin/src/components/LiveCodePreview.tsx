'use client';

import { Check, Code2, Copy, Eye, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as React from 'react';
import * as Babel from '@babel/standalone';

import { cn } from '../lib/cn';
import { createRequire, getDemoScope, useDemoComponents } from './DemoScope';

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


export function LiveCodePreview({ code: initialCode, title, children }: LiveCodePreviewProps) {
  const [mode, setMode] = useState<'preview' | 'code' | 'split'>('preview');
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveComponent, setLiveComponent] = useState<React.ComponentType | null>(null);
  const [compileError, setCompileError] = useState<string | null>(null);
  const hasChanged = code !== initialCode;

  // 从 Context 获取组件
  const contextComponents = useDemoComponents();

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleReset = useCallback(() => {
    setCode(initialCode);
  }, [initialCode]);

  // 实时编译代码 - 参考 dumi 的做法
  useEffect(() => {
    // 只在分屏模式下编译
    if (!code || mode !== 'split') {
      setLiveComponent(null);
      setCompileError(null);
      return;
    }

    let mounted = true;

    const compileCode = async () => {
      try {
        // 使用 Babel 编译 JSX/TSX 代码
        // 使用 classic runtime 而不是 automatic,这样更容易注入依赖
        const transformResult = Babel.transform(code, {
          filename: 'demo.tsx',
          presets: [
            ['react', { runtime: 'classic' }],
            ['typescript', { isTSX: true, allExtensions: true }]
          ]
        });

        if (!transformResult.code) {
          throw new Error('Babel 编译失败');
        }

        if (!mounted) return;

        let transformedCode = transformResult.code;

        // 移除 import 语句
        transformedCode = transformedCode.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g, '');

        // 移除 export default 并替换为 return
        transformedCode = transformedCode.replace(/export\s+default\s+/g, 'return ');

        // 获取作用域,注入自定义组件(从 Context 获取)
        const scope = getDemoScope(contextComponents);

        const require = createRequire(scope);

        // 添加 require 函数到作用域
        // 重要: 添加 React.createElement 作为全局函数
        const fullScope = {
          ...scope,
          require,
          console,
          // Babel classic runtime 需要这些
          React: scope.React,
          // 确保 createElement 可用
          _jsx: scope.React.createElement,
          _jsxs: scope.React.createElement,
          _Fragment: scope.React.Fragment
        };

        // 创建函数并执行
        const scopeKeys = Object.keys(fullScope);
        const scopeValues = Object.values(fullScope);

        const componentFactory = new Function(...scopeKeys, transformedCode);
        const GeneratedComponent = componentFactory(...scopeValues);

        if (!mounted) return;

        if (GeneratedComponent) {
          setLiveComponent(() => GeneratedComponent);
          setCompileError(null);
        } else {
          throw new Error('未找到导出的组件');
        }
      } catch (err: any) {
        if (!mounted) return;
        console.error('编译错误:', err);
        setCompileError(err.message || '编译失败');
        setLiveComponent(null);
      }
    };

    // 添加延迟,避免频繁编译
    const timer = setTimeout(() => {
      compileCode();
    }, 300);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [code, mode, contextComponents]);

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
            <div className="p-6">{children}</div>
          </ErrorBoundary>
        )}

        {mode === 'code' && (
          <div className="min-h-[300px]">
            <CodeEditor value={code} onChange={setCode} />
          </div>
        )}

        {mode === 'split' && (
          <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
            <div className="min-h-[400px]">
              <CodeEditor value={code} onChange={setCode} className="h-full" />
            </div>
            <ErrorBoundary
              fallbackRender={({ error }) => (
                <div className="flex min-h-[400px] items-center justify-center p-6">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
                    <div className="font-medium">渲染错误</div>
                    <div className="mt-1 font-mono text-xs whitespace-pre-wrap">{error.message}</div>
                  </div>
                </div>
              )}
            >
              <div className="relative p-6">
                {compileError ? (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
                    <div className="font-medium mb-2">💡 编译提示</div>
                    <div className="whitespace-pre-wrap text-xs">{compileError}</div>
                    <div className="mt-2 text-xs">
                      提示: 请检查代码语法,确保导入的组件在项目中可用
                    </div>
                  </div>
                ) : liveComponent ? (
                  <React.Suspense fallback={<div className="text-sm text-gray-400">加载中...</div>}>
                    {React.createElement(liveComponent)}
                  </React.Suspense>
                ) : (
                  <div className="text-sm text-gray-400">等待编译...</div>
                )}
              </div>
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

