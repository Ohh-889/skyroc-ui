import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import TabsClient from './tabs-client';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('tabs');
}

const TabsPage = () => {
  return <TabsClient />;
};

export default TabsPage;
