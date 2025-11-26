'use client';

/**
 * Demo 组件注册表
 *
 * 在这里注册所有可以在 Demo 实时预览中使用的组件
 * 这些组件会被注入到 DemoScope 中,供实时编译使用
 */

import * as skyrocUI from 'skyroc-ui';

/**
 * 获取所有可用的 Demo 组件
 */
export function getDemoComponents() {
  return {
    // Button 相关组件
    ...skyrocUI

    // 可以在这里添加更多组件
    // Input,
    // Card,
    // Badge,
    // ...
  };
}

/**
 * 组件类型定义
 */
export type DemoComponents = ReturnType<typeof getDemoComponents>;
