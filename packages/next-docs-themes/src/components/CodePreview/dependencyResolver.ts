import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * npm 包导入信息
 */
export interface NpmImport {
  /** 包名（如 'lucide-react'） */
  packageName: string;
  /** 导入的成员（如 ['Info', 'Rocket']） */
  imports: string[];
  /** 是否是默认导入 */
  isDefault?: boolean;
  /** 默认导入的别名 */
  defaultAlias?: string;
}

/**
 * 依赖模块信息
 */
export interface DependencyModule {
  /** 相对路径（如 './shared'） */
  relativePath: string;
  /** 绝对路径 */
  absolutePath: string;
  /** 源代码 */
  code: string;
  /** 导入的变量名 */
  imports: string[];
  /** npm 包导入信息 */
  npmImports: NpmImport[];
}

/**
 * 从代码中提取相对路径的 import 语句
 * 支持多种格式：
 * - import { items } from './shared'
 * - import { items, sizes } from './shared'
 * - import type { ... } from './shared' (会被忽略)
 */
export function extractRelativeImports(code: string): Array<{ imports: string[]; from: string }> {
  const results: Array<{ imports: string[]; from: string }> = [];

  // 匹配普通 import (非 type import)
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"](\.[^'"]+)['"]/g;

  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const fullMatch = match[0];

    // 跳过 type import
    if (fullMatch.includes('import type')) {
      continue;
    }

    const importNames = match[1]
      .split(',')
      .map(name => name.trim())
      .filter(name => !name.startsWith('type ')); // 过滤掉 type 导入

    const fromPath = match[2];

    if (importNames.length > 0) {
      results.push({ imports: importNames, from: fromPath });
    }
  }

  return results;
}

/**
 * 从代码中提取 npm 包的 import 语句
 * 支持多种格式：
 * - import { Info, Rocket } from 'lucide-react'
 * - import * as Icons from 'lucide-react'
 * - import React from 'react'
 * - import type { ... } from 'package' (会被忽略)
 */
export function extractNpmImports(code: string): NpmImport[] {
  const results: NpmImport[] = [];

  // 1. 匹配命名导入: import { X, Y } from 'package'
  const namedImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^./][^'"]*)['"]/g;
  let match;

  while ((match = namedImportRegex.exec(code)) !== null) {
    const fullMatch = match[0];

    // 跳过 type import
    if (fullMatch.includes('import type')) {
      continue;
    }

    const importNames = match[1]
      .split(',')
      .map(name => name.trim())
      .filter(name => !name.startsWith('type ')); // 过滤 type 导入

    const packageName = match[2];

    if (importNames.length > 0) {
      results.push({
        packageName,
        imports: importNames,
        isDefault: false
      });
    }
  }

  // 2. 匹配默认导入: import React from 'react'
  const defaultImportRegex = /import\s+(\w+)\s+from\s+['"]([^./][^'"]*)['"]/g;

  while ((match = defaultImportRegex.exec(code)) !== null) {
    const fullMatch = match[0];

    // 跳过已经处理的命名导入和 type import
    if (fullMatch.includes('{') || fullMatch.includes('import type')) {
      continue;
    }

    const defaultAlias = match[1];
    const packageName = match[2];

    results.push({
      packageName,
      imports: [],
      isDefault: true,
      defaultAlias
    });
  }

  // 3. 合并同一个包的多个导入（可选，用于优化）
  const merged = new Map<string, NpmImport>();

  for (const imp of results) {
    const existing = merged.get(imp.packageName);

    if (existing) {
      // 合并 imports
      if (!imp.isDefault) {
        existing.imports.push(...imp.imports);
      }
      // 处理默认导入
      if (imp.isDefault) {
        existing.isDefault = true;
        existing.defaultAlias = imp.defaultAlias;
      }
    }
    else {
      merged.set(imp.packageName, { ...imp });
    }
  }

  return Array.from(merged.values());
}

/**
 * 读取依赖文件（服务端调用）
 * 只负责读取文件内容，不执行代码
 */
export async function resolveDependencies(
  sourceFilePath: string,
  code: string
): Promise<DependencyModule[]> {
  const relativeImports = extractRelativeImports(code);
  const dependencies: DependencyModule[] = [];

  for (const { imports, from } of relativeImports) {
    try {
      // 解析依赖文件的绝对路径
      const sourceDir = path.dirname(sourceFilePath);
      let depPath = path.join(sourceDir, from);

      // 尝试添加常见扩展名
      const extensions = ['.tsx', '.ts', '.jsx', '.js'];
      let depCode: string | null = null;
      let resolvedPath = '';

      for (const ext of extensions) {
        try {
          const testPath = path.extname(depPath) ? depPath : depPath + ext;
          depCode = await readFile(testPath, 'utf-8');
          resolvedPath = testPath;
          break;
        }
        catch {
          // 继续尝试下一个扩展名
        }
      }

      if (!depCode) {
        console.warn(`[Demo] 无法读取依赖文件: ${from}`);
        continue;
      }

      // 提取 npm 包导入
      const npmImports = extractNpmImports(depCode);

      dependencies.push({
        relativePath: from,
        absolutePath: resolvedPath,
        code: depCode,
        imports,
        npmImports
      });
    }
    catch (error) {
      console.error(`[Demo] 解析依赖 ${from} 时出错:`, error);
    }
  }

  return dependencies;
}
