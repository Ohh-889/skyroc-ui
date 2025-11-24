import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { Suspense } from 'react'
import { LiveCodePreview } from './LiveCodePreview'

interface DemoProps {
  children?: React.ReactNode
  highlight?: string
  src?: string
  title?: string
}

/**
 * Demo 组件 - 实时代码预览
 *
 * 使用方式：
 * <Demo src="@/demos/button-basic.tsx" title="基础按钮" />
 *
 * 会自动读取源代码并提供实时编辑预览功能
 */
export default async function Demo({ children, src, title }: DemoProps) {
  if (!src) {
    return <div className="text-red-500">Demo 组件需要 src 属性</div>
  }

  // 读取源代码
  const code = await readSourceCode(src)

  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-400">Loading...</div>}>
      <LiveCodePreview
        code={code}
        title={title}
      >
        {children}
      </LiveCodePreview>
    </Suspense>
  )
}

/**
 * 读取源代码文件
 */
async function readSourceCode(src: string): Promise<string> {
  const absPath = resolvePath(src)
  try {
    return await readFile(absPath, 'utf-8')
  }
  catch (error) {
    console.error(`Failed to read demo file: ${absPath}`, error)
    return `// Error: Could not read file ${src}\nexport default function Demo() {\n  return <div>File not found</div>;\n}`
  }
}

/**
 * 解析文件路径
 */
function resolvePath(src: string): string {
  if (src.startsWith('@/')) {
    return path.join(process.cwd(), src.slice(2))
  }
  if (src.startsWith('/')) {
    return src
  }
  return path.resolve(process.cwd(), src)
}
