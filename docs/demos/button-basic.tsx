import { Button } from '@ui/button';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;

const Demo = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-wrap gap-[12px]">
        {colors.map(color => (
          <Button
            color={color}
            key={color}
          >
            {color}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Demo;
