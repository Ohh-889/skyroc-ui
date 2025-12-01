import { Button, Chip } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const ChipSize = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-3">
        {sizes.map(size => (
          <Chip
            key={size}
            size={size}
          >
            <Button
              size={size}
              variant="soft"
            >
              {size}
            </Button>
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-end gap-3">
        {sizes.map(size => (
          <Chip
            content="99+"
            key={size}
            size={size}
          >
            <Button
              size={size}
              variant="soft"
            >
              {size}
            </Button>
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ChipSize;
