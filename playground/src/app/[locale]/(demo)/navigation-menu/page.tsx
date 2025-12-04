import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import NavigationBasic from './modules/NavigationBasic';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('navigation-menu');
}

const NavigationMenuDemo = () => (
  <div className="h-96 p-8">
    <Card
      className="mb-4 text-lg font-semibold "
      title="Navigation Menu Demo"
      classNames={{
        content: 'overflow-visible'
      }}
    >
      <NavigationBasic />
    </Card>
  </div>
);
export default NavigationMenuDemo;
