import { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
import { createRequire, getDemoScope } from './DemoScope'

interface UseCodeCompilerOptions {
  code: string
  enabled: boolean
  contextComponents: Record<string, any>
}

interface UseCodeCompilerResult {
  component: React.ComponentType | null
  error: string | null
  isCompiling: boolean
}

/**
 * 编译代码的 Hook
 * 使用 Babel 将 JSX/TSX 代码转换为可执行的 React 组件
 */
export function useCodeCompiler({
  code,
  enabled,
  contextComponents,
}: UseCodeCompilerOptions): UseCodeCompilerResult {
  const [component, setComponent] = useState<React.ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isCompiling, setIsCompiling] = useState(false)

  useEffect(() => {
    if (!enabled || !code) {
      setComponent(null)
      setError(null)
      setIsCompiling(false)
      return
    }

    let mounted = true
    setIsCompiling(true)

    const compileCode = async () => {
      try {
        // 使用 Babel 编译 JSX/TSX 代码
        // 使用 classic runtime 而不是 automatic,这样更容易注入依赖
        const transformResult = Babel.transform(code, {
          filename: 'demo.tsx',
          presets: [
            ['react', { runtime: 'classic' }],
            ['typescript', { isTSX: true, allExtensions: true }],
          ],
        })

        if (!transformResult.code) {
          throw new Error('Babel 编译失败')
        }

        if (!mounted)
          return

        let transformedCode = transformResult.code

        // 移除 import 语句
        transformedCode = transformedCode.replace(/import\s+(?:\S.*?)??from\s+['"].*?['"];?\s*/g, '')

        // 移除 export default 并替换为 return
        transformedCode = transformedCode.replace(/export\s+default\s+/g, 'return ')

        // 获取作用域,注入自定义组件(从 Context 获取)
        const scope = getDemoScope(contextComponents)
        const require = createRequire(scope)

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
          _Fragment: scope.React.Fragment,
        }

        // 创建函数并执行
        const scopeKeys = Object.keys(fullScope)
        const scopeValues = Object.values(fullScope)

        const componentFactory = new Function(...scopeKeys, transformedCode)
        const GeneratedComponent = componentFactory(...scopeValues)

        if (!mounted)
          return

        if (GeneratedComponent) {
          setComponent(() => GeneratedComponent)
          setError(null)
        }
        else {
          throw new Error('未找到导出的组件')
        }
      }
      catch (err: any) {
        if (!mounted)
          return
        console.error('编译错误:', err)
        setError(err.message || '编译失败')
        setComponent(null)
      }
      finally {
        if (mounted) {
          setIsCompiling(false)
        }
      }
    }

    // 添加延迟,避免频繁编译
    const timer = setTimeout(() => {
      compileCode()
    }, 300)

    return () => {
      mounted = false
      clearTimeout(timer)
    }
  }, [code, enabled, contextComponents])

  return {
    component,
    error,
    isCompiling,
  }
}
