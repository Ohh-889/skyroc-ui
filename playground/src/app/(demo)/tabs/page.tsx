import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import TabsClient from './tabs-client';

export const metadata: Metadata = generateComponentMetadata('tabs');

const TabsPage = () => {
  return <TabsClient />;
};

export default TabsPage;
