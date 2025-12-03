import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import ListWithIcons from './modules/ListWithIcons';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('list');
}

const ListPage = () => {
  return (

    <Card
      split
      title="With Icons"
    >
      <ListWithIcons />
    </Card>

  );
};

export default ListPage;
