import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Suspense } from 'react';
import { resolveDependencies, type DependencyModule } from './dependencyResolver';
import { LiveCodePreview } from './LiveCodePreview';

interface DemoProps {
  children?: React.ReactNode;
  highlight?: string;
  src?: string;
  title?: string;
}

/**
 * Demo 组件 - 实时代码预览
 *
 * 使用方式：
 * <Demo src="@/demos/button-basic.tsx" title="基础按钮" />
 *
 * 会自动读取源代码并提供实时编辑预览功能
 * 支持相对路径导入，如：import { items } from './shared'
 */
export const Demo = async ({ children, src, title }: DemoProps) => {
  if (!src) {
    return <div className="text-red-500">Demo 组件需要 src 属性</div>;
  }

  // 读取源代码
  const { code, filePath } = await readSourceCode(src);

  // 解析依赖文件
  let dependencies: DependencyModule[] = [];
  try {
    dependencies = await resolveDependencies(filePath, code);
    if (dependencies.length > 0) {
      console.log(`[Demo] 为 ${src} 加载了 ${dependencies.length} 个依赖文件`);
    }
  }
  catch (error) {
    console.error(`[Demo] 解析 ${src} 的依赖时出错:`, error);
  }

  // 提取主文件的 npm 包导入
  const { extractNpmImports } = await import('./dependencyResolver');
  const mainFileNpmImports = extractNpmImports(code);

  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-400">Loading...</div>}>
      <LiveCodePreview
        code={code}
        title={title}
        dependencies={dependencies}
        mainFileNpmImports={mainFileNpmImports}
      >
        {children}
      </LiveCodePreview>
    </Suspense>
  );
};

/**
 * 读取源代码文件
 */
async function readSourceCode(src: string): Promise<{ code: string; filePath: string }> {
  // 添加 .tsx 扩展名（如果没有扩展名）
  let srcWithExt = src;
  if (!path.extname(src)) {
    srcWithExt = `${src}.tsx`;
  }

  const absPath = resolvePath(srcWithExt);
  try {
    const code = await readFile(absPath, 'utf-8');
    return { code, filePath: absPath };
  }
  catch (error) {
    console.error(`Failed to read demo file: ${absPath}`, error);
    return {
      code: `// Error: Could not read file ${src}\nexport default function Demo() {\n  return <div>File not found</div>;\n}`,
      filePath: absPath
    };
  }
}

/**
 * 解析文件路径
 */
function resolvePath(src: string): string {
  if (src.startsWith('@playground/')) {
    // @playground/* -> ../playground/src/app/(demo)/*
    const relativePath = src.slice('@playground/'.length);
    return path.join(process.cwd(), '../playground/src/app/(demo)', relativePath);
  }
  if (src.startsWith('@/')) {
    return path.join(process.cwd(), src.slice(2));
  }
  if (src.startsWith('/')) {
    return src;
  }
  return path.resolve(process.cwd(), src);
}

export default Demo;
