import { Breadcrumb } from 'skyroc-ui';
import { items, sizes } from './shared';

const BreadcrumbSize = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {sizes.map(size => (
        <div
          className="flex items-center gap-4"
          key={size}
        >
          <span className="w-8 text-muted-foreground text-xs">{size}</span>

          <Breadcrumb
            items={items}
            size={size}
          />
        </div>
      ))}
    </div>
  );
};

export default BreadcrumbSize;

