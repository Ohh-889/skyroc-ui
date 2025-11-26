'use client';

import type { ComponentProps, FC, ReactNode } from 'react';
import cn from 'clsx';

interface CalloutProps extends ComponentProps<'div'> {
  type?: 'info' | 'warning' | 'success' | 'danger' | 'tip';
  title?: string;
  icon?: ReactNode;
}

export const Callout: FC<CalloutProps> = ({
  type = 'info',
  title,
  icon,
  children,
  className,
  ...props
}) => {
  const typeStyles = {
    info: {
      container: 'border-blue-200 bg-blue-50/50 dark:border-blue-900/50 dark:bg-blue-950/30',
      icon: 'text-blue-600 dark:text-blue-400',
      title: 'text-blue-900 dark:text-blue-100'
    },
    warning: {
      container: 'border-orange-200 bg-orange-50/50 dark:border-orange-900/50 dark:bg-orange-950/30',
      icon: 'text-orange-600 dark:text-orange-400',
      title: 'text-orange-900 dark:text-orange-100'
    },
    success: {
      container: 'border-green-200 bg-green-50/50 dark:border-green-900/50 dark:bg-green-950/30',
      icon: 'text-green-600 dark:text-green-400',
      title: 'text-green-900 dark:text-green-100'
    },
    danger: {
      container: 'border-red-200 bg-red-50/50 dark:border-red-900/50 dark:bg-red-950/30',
      icon: 'text-red-600 dark:text-red-400',
      title: 'text-red-900 dark:text-red-100'
    },
    tip: {
      container: 'border-purple-200 bg-purple-50/50 dark:border-purple-900/50 dark:bg-purple-950/30',
      icon: 'text-purple-600 dark:text-purple-400',
      title: 'text-purple-900 dark:text-purple-100'
    }
  };

  const styles = typeStyles[type];

  // 默认图标
  const defaultIcons = {
    info: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    warning: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    success: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    danger: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    tip: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    )
  };

  return (
    <div
      className={cn(
        'my-6 rounded-lg border p-4',
        'backdrop-blur-sm',
        styles.container,
        className
      )}
      {...props}
    >
      <div className="flex gap-3">
        {/* 图标 */}
        <div className={cn('mt-0.5 shrink-0', styles.icon)}>
          {icon || defaultIcons[type]}
        </div>

        {/* 内容 */}
        <div className="flex-1 space-y-2">
          {title
            ? (
              <div className={cn('font-semibold', styles.title)}>
                {title}
              </div>
            )
            : null}

          <div className="text-foreground/80 [&_code]:bg-background/50 text-sm leading-relaxed [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
