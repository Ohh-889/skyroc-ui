'use client';

import type { ComponentProps, FC, ReactNode } from 'react';
import cn from 'clsx';

interface FeatureCardProps extends ComponentProps<'div'> {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
}

export const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'border-border/50 bg-muted/20 hover:bg-muted/40',
    primary: 'border-blue-200/50 bg-blue-50/50 hover:bg-blue-50/80 dark:border-blue-900/50 dark:bg-blue-950/30 dark:hover:bg-blue-950/50',
    success: 'border-green-200/50 bg-green-50/50 hover:bg-green-50/80 dark:border-green-900/50 dark:bg-green-950/30 dark:hover:bg-green-950/50',
    warning: 'border-orange-200/50 bg-orange-50/50 hover:bg-orange-50/80 dark:border-orange-900/50 dark:bg-orange-950/30 dark:hover:bg-orange-950/50',
    destructive: 'border-red-200/50 bg-red-50/50 hover:bg-red-50/80 dark:border-red-900/50 dark:bg-red-950/30 dark:hover:bg-red-950/50',
    info: 'border-sky-200/50 bg-sky-50/50 hover:bg-sky-50/80 dark:border-sky-900/50 dark:bg-sky-950/30 dark:hover:bg-sky-950/50'
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border p-6',
        'transition-all duration-300',
        'hover:shadow-md hover:scale-[1.02]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* 背景装饰 */}
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl transition-transform group-hover:scale-150" />
      
      <div className="relative flex flex-col gap-3">
        {/* 图标和标题 */}
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm">
              {icon}
            </div>
          )}
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        </div>
        
        {/* 描述 */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

// 特性网格容器
export const FeatureGrid: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'my-8 grid gap-4',
        'grid-cols-1 md:grid-cols-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

