import { Badge } from 'skyroc-ui';

const shapes = ['auto', 'rounded'] as const;

const BadgeShape = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {shapes.map(shape => (
        <Badge
          key={shape}
          shape={shape}
          variant="ghost"
        >
          {shape}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeShape;

