import type { ThemeSize } from 'skyroc-ui';
import { Button, Popover } from 'skyroc-ui';

const sizes: ThemeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const PopoverSize = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map(size => (
        <Popover
          key={size}
          showArrow
          size={size}
          trigger={<Button size={size} variant="outline">{size}</Button>}
        >
          <div className="space-y-2">
            <h4 className="font-medium">Size: {size}</h4>
            <p className="text-muted-foreground">
              This is a {size} sized popover.
            </p>
          </div>
        </Popover>
      ))}
    </div>
  );
};

export default PopoverSize;
