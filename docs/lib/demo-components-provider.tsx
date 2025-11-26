'use client';

/**
 * 客户端 Demo 组件 Provider
 *
 * 由于 Next.js 的 layout 是服务端组件,我们需要一个客户端组件来包装 DemoComponentsProvider
 */

import { DemoComponentsProvider } from '@skyroc/next-docs-themes';
import { getDemoComponents } from './demo-components';

const components = getDemoComponents();

export const ClientDemoComponentsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DemoComponentsProvider components={components}>
      {children}
    </DemoComponentsProvider>
  );
};
