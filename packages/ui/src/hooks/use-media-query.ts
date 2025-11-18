import { useEffect, useMemo, useState } from 'react';

type MediaQueryConfig = {
  devicePixelRatio?: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  orientation?: 'landscape' | 'portrait';
  pointerType?: 'coarse' | 'fine';
  prefersColorScheme?: 'dark' | 'light';
  prefersReducedMotion?: boolean;
};

const buildMediaQuery = (config: MediaQueryConfig | string): string => {
  if (typeof config === 'string') return config;

  const conditions: string[] = [];

  if (config.minWidth) conditions.push(`(min-width: ${config.minWidth}px)`);
  if (config.maxWidth) conditions.push(`(max-width: ${config.maxWidth}px)`);
  if (config.minHeight) conditions.push(`(min-height: ${config.minHeight}px)`);
  if (config.maxHeight) conditions.push(`(max-height: ${config.maxHeight}px)`);
  if (config.orientation) conditions.push(`(orientation: ${config.orientation})`);
  if (config.prefersColorScheme) conditions.push(`(prefers-color-scheme: ${config.prefersColorScheme})`);
  if (config.prefersReducedMotion) conditions.push('(prefers-reduced-motion: reduce)');
  if (config.devicePixelRatio) conditions.push(`(-webkit-min-device-pixel-ratio: ${config.devicePixelRatio})`);
  if (config.pointerType) conditions.push(`(pointer: ${config.pointerType})`);

  return conditions.join(' and ');
};

/**
 * React hook for handling media queries
 *
 * @param config - Media query configuration object or query string
 * @returns boolean - Returns true if the media query matches
 *
 * @example
 * // Basic usage - Mobile detection
 * const isMobile = useMediaQuery({ maxWidth: 768 });
 *
 * @example
 * // Using predefined breakpoints
 * const isDesktop = useMediaQuery(up('lg'));
 *
 * @example
 * // Complex query - Tablet in landscape mode
 * const isTabletLandscape = useMediaQuery({
 *   minWidth: 768,
 *   maxWidth: 1024,
 *   orientation: 'landscape'
 * });
 *
 * @example
 * // User preferences
 * const isDarkMode = useMediaQuery({ prefersColorScheme: 'dark' });
 * const prefersReducedMotion = useMediaQuery({ prefersReducedMotion: true });
 *
 * @example
 * // Device capabilities
 * const isTouchDevice = useMediaQuery({ pointerType: 'coarse' });
 * const isRetina = useMediaQuery({ devicePixelRatio: 2 });
 *
 * @example
 * // Range queries using helpers
 * const isTablet = useMediaQuery(between('sm', 'md'));
 *
 * @example
 * // Raw media query string
 * const isPortrait = useMediaQuery('(orientation: portrait)');
 *
 * @see {@link MediaQueryConfig} for all supported configuration options
 */
export const useMediaQuery = (config: MediaQueryConfig | string) => {
  // 服务器端渲染时默认为 false
  const [matches, setMatches] = useState(false);

  // 将 config 转换为 mediaQuery 字符串
  const mediaQueryString = useMemo(() => buildMediaQuery(config), [config]);

  useEffect(() => {
    // 客户端渲染时立即检查当前状态
    const mediaQuery = window.matchMedia(mediaQueryString);
    setMatches(mediaQuery.matches);

    // 监听变化
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // 使用新旧两种 API 以确保最大兼容性
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      // 兼容旧版浏览器
      mediaQuery.addListener(handler);
    }

    // 清理函数
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        // 兼容旧版浏览器
        mediaQuery.removeListener(handler);
      }
    };
  }, [mediaQueryString]);

  return matches;
};

/**
 * remove px unit
 * @param value example: "16px"
 * @returns example: 16
 */
/**
 * remove px unit and convert to number
 * @param value example: "16px", "16.5px", "-16px", "16", 16
 * @returns example: 16, 16.5, -16, 16, 16
 * @throws Error if value is invalid
 */
export const removePx = (value: string | number): number => {
  // 如果已经是数字，直接返回
  if (typeof value === 'number') return value;

  // 如果是空字符串，抛出错误
  if (!value) {
    throw new Error('Invalid value: empty string');
  }

  // 移除所有空格
  const trimmed = value.trim();

  // 检查是否以 px 结尾（不区分大小写）
  const hasPx = /px$/i.test(trimmed);

  // 提取数字部分
  const num = hasPx ? trimmed.slice(0, -2) : trimmed;

  // 转换为数字
  const result = Number.parseFloat(num);

  // 验证结果是否为有效数字
  if (Number.isNaN(result)) {
    throw new TypeError(`Invalid value: ${value}`);
  }

  return result;
};

export const breakpointsTokens = {
  // desktop-lg => @media (min-width: 1280px) { ... }
  '2xl': '1536px', // tablet => @media (min-width: 768px) { ... }
  lg: '1024px', // mobile => @media (min-width: 576px) { ... }
  md: '768px', // mobile => @media (min-width: 0px) { ... }
  sm: '576px', // desktop => @media (min-width: 1024px) { ... }
  xl: '1280px',
  xs: '375px' // desktop-xl => @media (min-width: 1536px) { ... }
};

type Breakpoints = typeof breakpointsTokens;
type BreakpointsKeys = keyof Breakpoints;
// 辅助函数
export const up = (key: BreakpointsKeys) => ({
  minWidth: removePx(breakpointsTokens[key])
});

export const down = (key: BreakpointsKeys) => ({
  maxWidth: removePx(breakpointsTokens[key]) - 0.05 // 减去0.05px避免断点重叠
});

export const between = (start: BreakpointsKeys, end: BreakpointsKeys) => ({
  maxWidth: removePx(breakpointsTokens[end]) - 0.05,
  minWidth: removePx(breakpointsTokens[start])
});
