import { Button, Chip } from 'skyroc-ui';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;

const ChipColor = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map(color => (
        <Chip
          color={color}
          key={color}
        >
          <Button variant="dashed">{color}</Button>
        </Chip>
      ))}
    </div>
  );
};

export default ChipColor;
