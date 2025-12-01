import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // 默认语言无前缀
  localeDetection: false // 禁用自动语言检测，默认显示英文
});
