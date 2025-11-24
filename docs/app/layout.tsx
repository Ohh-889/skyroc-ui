import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientDemoComponentsProvider } from '@/lib/demo-components-provider';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  description: 'A modern, elegant React UI component library',
  title: {
    default: 'Skyroc UI - Modern React Components',
    template: '%s | Skyroc UI'
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      suppressHydrationWarning
      lang="zh"
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <ClientDemoComponentsProvider>
            {children}
          </ClientDemoComponentsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
