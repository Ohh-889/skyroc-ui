import { Button, Popover } from 'skyroc-ui';

const PopoverWithArrow = () => {
  return (
    <Popover
      showArrow
      trigger={<Button variant="outline">With Arrow</Button>}
    >
      <div className="space-y-2">
        <h4 className="font-medium">Popover with Arrow</h4>
        <p className="text-sm text-muted-foreground">
          This popover has an arrow pointing to the trigger.
        </p>
      </div>
    </Popover>
  );
};

export default PopoverWithArrow;
