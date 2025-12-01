import { Button, Chip } from 'skyroc-ui';

const positions = ['top-right', 'bottom-right', 'top-left', 'bottom-left'] as const;

const ChipPosition = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {positions.map(position => (
        <Chip
          key={position}
          position={position}
        >
          <Button
            className="w-30"
            variant="dashed"
          >
            {position}
          </Button>
        </Chip>
      ))}
    </div>
  );
};

export default ChipPosition;
