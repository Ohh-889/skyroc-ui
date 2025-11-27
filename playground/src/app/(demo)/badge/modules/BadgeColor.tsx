import { Badge } from 'skyroc-ui';

const colors = ['primary', 'destructive', 'success', 'warning', 'info', 'carbon', 'secondary', 'accent'] as const;

const BadgeColor = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {colors.map(color => (
        <Badge
          color={color}
          key={color}
        >
          {color}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeColor;

