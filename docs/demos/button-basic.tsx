import { Button } from '@ui/button';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;

export default function Demo() {
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
}
