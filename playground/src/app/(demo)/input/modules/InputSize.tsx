import { Input } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const InputSize = () => {
  return (
    <div className="flex w-80 flex-col gap-3 max-sm:w-auto">
      {sizes.map(size => (
        <Input
          key={size}
          placeholder={`Size: ${size}`}
          size={size}
        />
      ))}
    </div>
  );
};

export default InputSize;
