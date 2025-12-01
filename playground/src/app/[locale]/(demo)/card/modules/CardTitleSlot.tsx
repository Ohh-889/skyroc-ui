import { Rocket } from 'lucide-react';
import { Badge, Card } from 'skyroc-ui';

const CardTitleSlot = () => {
  return (
    <Card
      split
      title="Title with Slots"
      titleLeading={<Rocket className="size-4" />}
      titleTrailing={<Badge variant="soft">New</Badge>}
    >
      <p className="text-muted-foreground">
        Use titleLeading and titleTrailing to add content before/after the title.
      </p>
    </Card>
  );
};

export default CardTitleSlot;
