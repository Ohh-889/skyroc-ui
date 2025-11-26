'use client';

interface ErrorMessageProps {
  title: string;
  message: string;
  type?: 'error' | 'warning';
  tip?: string;
}

/**
 * 错误/警告提示组件
 */
export const ErrorMessage = ({ title, message, type = 'error', tip }: ErrorMessageProps) => {
  const isError = type === 'error';

  return (
    <div
      className={
        isError
          ? 'max-w-md rounded-xl border border-red-200/80 bg-gradient-to-br from-red-50 to-red-100/50 p-5 shadow-sm dark:border-red-900/80 dark:from-red-950/50 dark:to-red-900/30'
          : 'rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-amber-100/50 p-5 shadow-sm dark:border-amber-900/80 dark:from-amber-950/50 dark:to-amber-900/30'
      }
    >
      <div className="mb-2 flex items-center gap-2">
        <div
          className={
            isError
              ? 'flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400'
              : 'flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
          }
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isError
              ? (
                <path
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )
              : (
                <path
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
          </svg>
        </div>

        <div
          className={
            isError
              ? 'font-semibold text-red-900 dark:text-red-100'
              : 'font-semibold text-amber-900 dark:text-amber-100'
          }
        >
          {title}
        </div>
      </div>

      <div
        className={
          isError
            ? 'mt-2 font-mono text-xs whitespace-pre-wrap text-red-800 dark:text-red-200'
            : 'font-mono text-xs whitespace-pre-wrap text-amber-800 dark:text-amber-200'
        }
      >
        {message}
      </div>

      {tip
        ? (
          <div className={isError ? 'mt-3 text-xs text-red-700 dark:text-red-300' : 'mt-3 text-xs text-amber-700 dark:text-amber-300'}>
            💡 提示:
            {' '}
            {tip}
          </div>
        )
        : null}
    </div>
  );
};
