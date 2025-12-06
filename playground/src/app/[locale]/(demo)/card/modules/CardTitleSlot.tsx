import { Rocket } from 'lucide-react';
import { Tag, Card } from 'skyroc-ui';

const CardTitleSlot = () => {
  return (
    <Card
      split
      title="Title with Slots"
      titleLeading={<Rocket className="size-4" />}
      titleTrailing={<Tag variant="soft">New</Tag>}
    >
      <p className="text-muted-foreground">
        Use titleLeading and titleTrailing to add content before/after the title.
      </p>
    </Card>
  );
};

export default CardTitleSlot;
