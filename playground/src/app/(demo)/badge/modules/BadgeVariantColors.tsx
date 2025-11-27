import { Badge } from 'skyroc-ui';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;
const variants = ['solid', 'pure', 'outline', 'soft', 'ghost', 'raw'] as const;

const BadgeVariantColors = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {colors.map(color => (
        <div
          className="flex flex-wrap gap-[12px]"
          key={color}
        >
          {variants.map(variant => (
            <Badge
              color={color}
              key={variant}
              variant={variant}
            >
              {variant}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BadgeVariantColors;

