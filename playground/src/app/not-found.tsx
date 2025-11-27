import type { Metadata } from 'next';
import NotFoundClient from './not-found-client';

export const metadata: Metadata = {
  title: '404 - 页面未找到',
  description: '抱歉，您访问的页面不存在或已被移动。',
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return <NotFoundClient />;
}
