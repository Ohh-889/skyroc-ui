'use client'

import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { cn } from '../../lib/cn'
import { CodeEditor } from './CodeEditor'
import { ErrorMessage } from './ErrorMessage'

interface PreviewContentProps {
  mode: 'preview' | 'code' | 'split'
  isFullscreen: boolean
  children?: React.ReactNode
  // 代码模式
  highlightedHtml: string
  isLoading: boolean
  // 分屏模式
  code: string
  onCodeChange: (code: string) => void
  liveComponent: React.ComponentType | null
  compileError: string | null
}

/**
 * 预览组件的内容区域
 */
export const PreviewContent = ({
  mode,
  isFullscreen,
  children,
  highlightedHtml,
  isLoading,
  code,
  onCodeChange,
  liveComponent,
  compileError,
}: PreviewContentProps) => {
  // 分屏模式使用固定高度，其他模式自适应
  const splitHeightClass = isFullscreen ? 'h-[calc(100vh-200px)]' : 'h-[calc(100vh-380px)]'
  const codeMaxHeightClass = isFullscreen ? 'max-h-[calc(100vh-200px)]' : 'max-h-[calc(100vh-380px)]'

  return (
    <div className="relative bg-background">
      {/* 预览模式 */}
      {mode === 'preview' && (
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div className="flex min-h-[240px] items-center justify-center p-8">
              <ErrorMessage
                message={error.message}
                title="渲染错误"
                type="error"
              />
            </div>
          )}
        >
          <div className="p-8">{children}</div>
        </ErrorBoundary>
      )}

      {/* 代码模式 - 自适应高度 */}
      {mode === 'code' && (
        <div className="relative bg-muted/30">
          <div className={cn(
            'code-viewer overflow-auto p-4 font-mono text-sm leading-relaxed not-prose show-line-numbers',
            codeMaxHeightClass,
          )}
          >
            <div
              className="[&_pre]:m-0 [&_pre]:whitespace-pre [&_code]:whitespace-pre [&_pre]:!bg-transparent"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </div>

          {isLoading
            ? (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm bg-background/80 backdrop-blur-sm">
                加载代码中...
              </div>
            )
            : null}
        </div>
      )}

      {/* 分屏模式 - 固定高度 */}
      {mode === 'split' && (
        <div className="grid grid-cols-2 divide-x divide-border">
          <div className={cn(splitHeightClass)}>
            <CodeEditor
              className="h-full"
              value={code}
              onChange={onCodeChange}
            />
          </div>

          <ErrorBoundary
            fallbackRender={({ error }) => (
              <div className={cn('flex items-center justify-center p-8', splitHeightClass)}>
                <ErrorMessage
                  message={error.message}
                  title="渲染错误"
                  type="error"
                />
              </div>
            )}
          >
            <div className={cn('relative overflow-auto p-8', splitHeightClass)}>
              {compileError
                ? (
                  <ErrorMessage
                    message={compileError}
                    tip="请检查代码语法,确保导入的组件在项目中可用"
                    title="编译提示"
                    type="warning"
                  />
                )
                : liveComponent
                  ? (
                    <React.Suspense
                      fallback={(
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground" />
                          <span>加载中...</span>
                        </div>
                      )}
                    >
                      {React.createElement(liveComponent)}
                    </React.Suspense>
                  )
                  : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-4 w-4 animate-pulse rounded-full bg-muted" />
                      <span>等待编译...</span>
                    </div>
                  )}
            </div>
          </ErrorBoundary>
        </div>
      )}
    </div>
  )
}
