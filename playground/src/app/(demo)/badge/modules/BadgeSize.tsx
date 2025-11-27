import { Badge } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const BadgeSize = () => {
  return (
    <div className="flex flex-wrap items-center gap-[12px]">
      {sizes.map(size => (
        <Badge
          key={size}
          size={size}
          variant="soft"
        >
          {size}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeSize;

