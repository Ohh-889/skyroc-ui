import { Button, Chip } from 'skyroc-ui';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;

const ChipColorWithContent = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map(color => (
        <Chip
          color={color}
          content="99+"
          key={color}
        >
          <Button variant="dashed">{color}</Button>
        </Chip>
      ))}
    </div>
  );
};

export default ChipColorWithContent;
