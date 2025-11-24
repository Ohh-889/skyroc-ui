'use client';

import * as React from 'react';

/**
 * DemoScope - 为实时预览提供组件作用域
 *
 * 这个文件导出所有在 Demo 中可能用到的组件和工具
 * 当添加新组件时,需要在这里导入并导出
 */

// 导出 React 相关
export { React };

// 导出常用的 React Hooks
export const {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
  useReducer,
  useId
} = React;

// JSX Runtime (用于 Babel 编译后的代码)
export const jsx = React.createElement;
export const jsxs = React.createElement;
export const Fragment = React.Fragment;

/**
 * Demo 组件上下文
 * 用于在应用中注入自定义组件
 */
const DemoComponentsContext = React.createContext<Record<string, any>>({});

/**
 * DemoComponentsProvider - 提供 Demo 组件的上下文
 *
 * 使用方式:
 * ```tsx
 * import { DemoComponentsProvider } from '@skyroc/next-docs-plugin';
 * import { Button, Input } from './components';
 *
 * <DemoComponentsProvider components={{ Button, Input }}>
 *   <App />
 * </DemoComponentsProvider>
 * ```
 */
export const DemoComponentsProvider = ({
  children,
  components = {}
}: {
  children: React.ReactNode;
  components?: Record<string, any>;
}): React.ReactElement => {
  return (
    <DemoComponentsContext value={components}>
      {children}
    </DemoComponentsContext>
  );
};

/**
 * 使用 Demo 组件的 Hook
 */
export function useDemoComponents(): Record<string, any> {
  return React.useContext(DemoComponentsContext);
}

/**
 * 获取 Demo 作用域
 * 返回一个包含所有可用组件和工具的对象
 *
 * @param customComponents - 自定义组件映射,用于注入项目特定的组件
 */
export function getDemoScope(customComponents: Record<string, any> = {}) {
  return {
    React,
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
    useContext,
    useReducer,
    useId,
    jsx,
    jsxs,
    Fragment,
    // 合并自定义组件
    ...customComponents
  };
}

/**
 * 创建一个模拟的 require 函数
 * 用于处理代码中的 import 语句
 */
export function createRequire(scope: Record<string, any>): (moduleName: string) => any {
  return (moduleName: string): any => {
    // 处理常见的模块导入
    if (moduleName === 'react') {
      return { default: React, ...React };
    }

    // 处理本地组件导入
    // 例如: '@/components/button' -> scope.Button
    const parts = moduleName.split('/');
    const componentName = parts[parts.length - 1];

    // 首字母大写作为组件名
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

    if (scope[capitalizedName]) {
      return {
        default: scope[capitalizedName],
        [capitalizedName]: scope[capitalizedName]
      };
    }

    // 尝试原始名称
    if (scope[componentName]) {
      return {
        default: scope[componentName],
        [componentName]: scope[componentName]
      };
    }

    console.warn(`模块 "${moduleName}" 未找到,返回空对象`);
    return {};
  };
}
