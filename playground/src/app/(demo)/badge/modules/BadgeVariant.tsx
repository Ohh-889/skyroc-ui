import { Badge } from 'skyroc-ui';

const variants = ['solid', 'pure', 'outline', 'soft', 'ghost', 'raw'] as const;

const BadgeVariant = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {variants.map(variant => (
        <Badge
          key={variant}
          variant={variant}
        >
          {variant}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeVariant;

