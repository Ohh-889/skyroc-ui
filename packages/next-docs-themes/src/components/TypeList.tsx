/* eslint-disable react-refresh/only-export-components */
'use client';

import type { FC } from 'react';
import cn from 'clsx';

interface TypeListProps {
  types: string[];
  maxPerRow?: number;
  className?: string;
}

/**
 * 类型列表组件 - 用于在表格中美观地显示多个类型选项
 * 每行显示指定数量的选项，自动换行
 */
export const TypeList: FC<TypeListProps> = ({
  types,
  maxPerRow = 4,
  className
}) => {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {types.map((type, index) => (
        <span key={index}>
          <code className="bg-muted text-foreground inline-block rounded px-1.5 py-0.5 font-mono text-xs font-normal">
            {type}
          </code>

          {index < types.length - 1 && (
            <span className="text-muted-foreground mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

/**
 * 从字符串解析类型列表
 * 例如: "'primary' | 'secondary' | 'success'" => ["'primary'", "'secondary'", "'success'"]
 */
export const parseTypeString = (typeString: string): string[] => {
  return typeString
    .split('|')
    .map(t => t.trim())
    .filter(Boolean);
};
