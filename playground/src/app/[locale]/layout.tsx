import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Card, ScrollArea } from 'skyroc-ui';
import { routing } from '../../i18n/routing';
import { BrandLogo, HeaderActions } from '../_components';
import type { Locale } from '../../i18n/config';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

const LocaleLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Card
        className="h-full max-sm:h-auto"
        extra={<HeaderActions />}
        title={<BrandLogo />}
      >
        <ScrollArea
          className="h-full"
          orientation="vertical"
          size="sm"
        >
          {children}
        </ScrollArea>
      </Card>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
