import { X } from 'lucide-react';
import { ButtonIcon, Card } from 'skyroc-ui';

const CardWithExtra = () => {
  return (
    <Card
      split
      title="Card with Extra"
      extra={(
        <ButtonIcon size="sm">
          <X />
        </ButtonIcon>
      )}
    >
      <p className="text-muted-foreground">
        The extra slot is typically used for action buttons.
      </p>
    </Card>
  );
};

export default CardWithExtra;
