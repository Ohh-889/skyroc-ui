import { Card } from 'skyroc-ui';
import ArrowDemo from './modules/ArrowDemo';

const ArrowPage = () => {
  return (
    <Card
      title="Basic"
      classNames={{
        content: 'flex gap-4'
      }}
    >
      <ArrowDemo />
    </Card>
  );
};

export default ArrowPage;
