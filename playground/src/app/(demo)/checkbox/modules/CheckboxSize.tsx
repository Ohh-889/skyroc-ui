import { Checkbox } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const CheckboxSize = () => {
  return (
    <div className="flex flex-wrap items-center gap-[12px]">
      {sizes.map(size => (
        <Checkbox
          defaultChecked
          id={`size-${size}`}
          key={size}
          size={size}
        >
          {size}
        </Checkbox>
      ))}
    </div>
  );
};

export default CheckboxSize;

