import { useEffect, useState } from 'react';
import * as Babel from '@babel/standalone';
import type { DependencyModule, NpmImport } from './dependencyResolver';
import { createRequire, getDemoScope } from './DemoScope';

/**
 * 支持的 npm 包映射
 * 用于客户端动态导入
 */
const NPM_PACKAGE_MAP: Record<string, () => Promise<any>> = {
  'lucide-react': () => import('lucide-react'),
  'skyroc-ui': () => import('skyroc-ui'),
  'react': () => import('react')
};

interface UseCodeCompilerOptions {
  code: string;
  enabled: boolean;
  contextComponents: Record<string, any>;
  dependencies?: DependencyModule[];
  mainFileNpmImports?: NpmImport[];
}

interface UseCodeCompilerResult {
  component: React.ComponentType | null;
  error: string | null;
  isCompiling: boolean;
}

/**
 * 编译代码的 Hook
 * 使用 Babel 将 JSX/TSX 代码转换为可执行的 React 组件
 */
export function useCodeCompiler({
  code,
  enabled,
  contextComponents,
  dependencies = [],
  mainFileNpmImports = []
}: UseCodeCompilerOptions): UseCodeCompilerResult {
  const [component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);

  useEffect(() => {
    if (!enabled || !code) {
      setComponent(null);
      setError(null);
      setIsCompiling(false);
      return;
    }

    let mounted = true;
    setIsCompiling(true);

    const compileCode = async () => {
      try {
        // 1. 收集所有 npm 包导入（依赖文件 + 主文件）
        const allNpmImports: NpmImport[] = [...mainFileNpmImports];
        for (const dep of dependencies) {
          allNpmImports.push(...dep.npmImports);
        }

        // 2. 动态加载所有需要的 npm 包
        const npmPackages = await loadNpmPackages(allNpmImports);

        // 3. 编译所有依赖文件，提取导出
        const dependencyExports: Record<string, any> = {};

        for (const dep of dependencies) {
          try {
            const exports = await compileDependency(dep.code, contextComponents, npmPackages);
            // 存储导出的变量
            Object.assign(dependencyExports, exports);
          }
          catch (depError: any) {
            console.error(`编译依赖 ${dep.relativePath} 失败:`, depError);
            throw new Error(`依赖 ${dep.relativePath} 编译失败: ${depError.message}`);
          }
        }

        // 2. 编译主文件
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

        if (!mounted)
          return;

        let transformedCode = transformResult.code;

        // 移除 import 语句
        transformedCode = transformedCode.replace(/import\s+(?:\S.*?)??from\s+['"].*?['"];?\s*/g, '');

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
          _Fragment: scope.React.Fragment,
          // 注入动态导入的 npm 包
          ...npmPackages,
          // 注入依赖导出的变量
          ...dependencyExports
        };

        // 创建函数并执行
        const scopeKeys = Object.keys(fullScope);
        const scopeValues = Object.values(fullScope);

        const componentFactory = new Function(...scopeKeys, transformedCode);

        const GeneratedComponent = componentFactory(...scopeValues);

        if (!mounted)
          return;

        if (GeneratedComponent) {
          setComponent(() => GeneratedComponent);
          setError(null);
        }
        else {
          throw new Error('未找到导出的组件');
        }
      }
      catch (err: any) {
        if (!mounted)
          return;
        console.error('编译错误:', err);
        setError(err.message || '编译失败');
        setComponent(null);
      }
      finally {
        if (mounted) {
          setIsCompiling(false);
        }
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
  }, [code, enabled, contextComponents, dependencies, mainFileNpmImports]);

  return {
    component,
    error,
    isCompiling
  };
}

/**
 * 编译依赖文件并提取导出
 */
async function compileDependency(
  code: string,
  contextComponents: Record<string, any>,
  npmPackages: Record<string, any> = {}
): Promise<Record<string, any>> {
  // 使用 Babel 编译依赖文件
  const transformResult = Babel.transform(code, {
    filename: 'dependency.tsx',
    presets: [
      ['react', { runtime: 'classic' }],
      ['typescript', { isTSX: true, allExtensions: true }]
    ]
  });

  if (!transformResult.code) {
    throw new Error('依赖文件编译失败');
  }

  let transformedCode = transformResult.code;

  // 移除 import 语句
  transformedCode = transformedCode.replace(/import\s+(?:\S.*?)??from\s+['"].*?['"];?\s*/g, '');

  // 将 export 转换为对象属性
  // export const items = ... -> exports.items = ...
  transformedCode = transformedCode.replace(/export\s+(const|let|var)\s+(\w+)/g, 'exports.$2');

  // 移除 export { ... } 语句（变量已经通过上面的规则处理）
  transformedCode = transformedCode.replace(/export\s*\{[^}]*\}\s*;?/g, '');

  // 创建导出对象
  const exports: Record<string, any> = {};

  // 获取作用域
  const scope = getDemoScope(contextComponents);
  const require = createRequire(scope);

  const fullScope = {
    ...scope,
    require,
    console,
    exports, // 重要：提供 exports 对象
    React: scope.React,
    _jsx: scope.React.createElement,
    _jsxs: scope.React.createElement,
    _Fragment: scope.React.Fragment,
    // 注入动态导入的 npm 包
    ...npmPackages
  };

  // 执行代码
  const scopeKeys = Object.keys(fullScope);
  const scopeValues = Object.values(fullScope);

  const func = new Function(...scopeKeys, transformedCode);
  func(...scopeValues);

  return exports;
}

/**
 * 动态导入 npm 包
 * @param npmImports - npm 包导入信息数组
 * @returns 包含所有导入内容的对象
 */
async function loadNpmPackages(npmImports: NpmImport[]): Promise<Record<string, any>> {
  const loaded: Record<string, any> = {};

  for (const npmImport of npmImports) {
    try {
      const { packageName, imports, isDefault, defaultAlias } = npmImport;

      // 检查是否支持该包
      const loader = NPM_PACKAGE_MAP[packageName];
      if (!loader) {
        console.warn(`[Demo] 不支持的 npm 包: ${packageName}，请在 NPM_PACKAGE_MAP 中添加`);
        continue;
      }

      // 动态导入包
      const pkg = await loader();

      // 处理默认导入
      if (isDefault && defaultAlias) {
        loaded[defaultAlias] = pkg.default || pkg;
      }

      // 处理命名导入
      for (const importName of imports) {
        if (pkg[importName]) {
          loaded[importName] = pkg[importName];
        }
        else {
          console.warn(`[Demo] 包 ${packageName} 中未找到导出: ${importName}`);
        }
      }
    }
    catch (error) {
      console.error(`[Demo] 导入 ${npmImport.packageName} 失败:`, error);
    }
  }

  return loaded;
}
