import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import Message from './modules/Message';
import Notification from './modules/Notification';
import Toast from './modules/Toast';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('sonner');
}

const SonnerPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Message"
      >
        <Message />
      </Card>

      <Card
        split
        title="Notification"
      >
        <Notification />
      </Card>

      <Card
        split
        title="Toast"
      >
        <Toast />
      </Card>
    </div>
  );
};

export default SonnerPage;
