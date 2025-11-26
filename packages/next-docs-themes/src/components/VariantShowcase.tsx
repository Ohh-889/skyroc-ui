'use client';

import React from 'react';

export interface VariantItem {
  name: string;
  title: string;
  description: string;
}

interface VariantShowcaseProps {
  /**
   * 变体列表数据
   */
  variants: VariantItem[];
  /**
   * 渲染函数，接收 variant 数据并返回组件
   */
  renderItem?: (variant: VariantItem, index: number) => React.ReactNode;
  /**
   * 直接传入的子组件（与 renderItem 二选一）
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 网格列数
   */
  columns?: 1 | 2 | 3;
}

/**
 * VariantShowcase 组件 - 用于展示组件的各种变体说明
 *
 * 使用方式 1（使用 renderItem）：
 * ```tsx
 * const variants = [
 *   { name: 'solid', title: 'solid（实心）', description: '默认样式，有背景色和文字颜色对比。' }
 * ];
 *
 * <VariantShowcase
 *   variants={variants}
 *   renderItem={(variant) => <Button variant={variant.name}>Button</Button>}
 * />
 * ```
 *
 * 使用方式 2（使用 children）：
 * ```tsx
 * <VariantShowcase variants={variants}>
 *   <Button variant="solid">Solid</Button>
 *   <Button variant="outline">Outline</Button>
 * </VariantShowcase>
 * ```
 */
const VariantShowcase = ({
  variants,
  renderItem,
  children,
  className = '',
  columns = 2
}: VariantShowcaseProps) => {
  // 将 children 转换为数组以便索引访问
  const childrenArray = React.Children.toArray(children);

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className={`not-prose my-8 ${className}`}>
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {variants.map((variant, index) => (
          <div
            className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-700"
            key={variant.name}
          >
            {/* 装饰性渐变背景 */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:from-blue-950/20 dark:to-purple-950/20" />

            {/* 内容容器 */}
            <div className="relative z-10">
              {/* 标题和徽章 */}
              <div className="mb-3 flex items-center gap-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {variant.title}
                </h4>

                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  {variant.name}
                </span>
              </div>

              {/* 描述文本 */}
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {variant.description}
              </p>

              {/* 示例展示 */}
              <div className="border-t border-gray-100 pt-4 dark:border-gray-800">
                <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-900/50">
                  {renderItem ? renderItem(variant, index) : childrenArray[index]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantShowcase;
