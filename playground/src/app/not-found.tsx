import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NotFoundClient from './not-found-client';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('notFound');

  return {
    title: `404 - ${t('title')}`,
    description: t('description'),
    robots: {
      index: false,
      follow: false
    }
  };
}

const NotFound = () => {
  return <NotFoundClient />;
};

export default NotFound;
