import { Tag } from 'skyroc-ui';

const variants = ['solid', 'pure', 'outline', 'soft', 'ghost', 'raw'] as const;

const TagVariant = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {variants.map(variant => (
        <Tag
          key={variant}
          variant={variant}
        >
          {variant}
        </Tag>
      ))}
    </div>
  );
};

export default TagVariant;
