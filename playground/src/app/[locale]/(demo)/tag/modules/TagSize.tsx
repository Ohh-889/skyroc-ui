import { Tag } from 'skyroc-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const TagSize = () => {
  return (
    <div className="flex flex-wrap items-center gap-[12px]">
      {sizes.map(size => (
        <Tag
          key={size}
          size={size}
          variant="soft"
        >
          {size}
        </Tag>
      ))}
    </div>
  );
};

export default TagSize;
