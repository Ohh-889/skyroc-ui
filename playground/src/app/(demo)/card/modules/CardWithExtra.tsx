import { X } from 'lucide-react';
import { ButtonIcon, Card } from 'skyroc-ui';

const CardWithExtra = () => {
  return (
    <Card
      split
      extra={(
        <ButtonIcon size="sm">
          <X />
        </ButtonIcon>
      )}
      title="Card with Extra"
    >
      <p className="text-muted-foreground">
        The extra slot is typically used for action buttons.
      </p>
    </Card>
  );
};

export default CardWithExtra;

