'use client';

/**
 * Demo 组件注册表
 *
 * 在这里注册所有可以在 Demo 实时预览中使用的组件
 * 这些组件会被注入到 DemoScope 中,供实时编译使用
 *
 * 注意：
 * - npm 包的导入（如 lucide-react 图标）会自动从依赖文件中提取并动态导入
 * - 这里只需要注册主要的 UI 组件库即可
 */

import * as skyrocUI from 'skyroc-ui';
import Image from 'next/image';
import * as skyrocForm from '@skyroc/form';

/**
 * 获取所有可用的 Demo 组件
 */
export function getDemoComponents() {
  return {
    // Skyroc UI 组件库
    ...skyrocUI,
    Image,
    ...skyrocForm
    // 其他组件可以在依赖文件中直接 import，会自动处理
  };
}

/**
 * 组件类型定义
 */
export type DemoComponents = ReturnType<typeof getDemoComponents>;
