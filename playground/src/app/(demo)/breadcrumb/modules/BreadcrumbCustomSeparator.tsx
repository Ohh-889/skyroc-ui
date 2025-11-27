import { Breadcrumb } from 'skyroc-ui';
import { items } from './shared';

const BreadcrumbCustomSeparator = () => {
  return (
    <Breadcrumb
      items={items}
      separator={<span className="text-sm text-gray-500">/</span>}
    />
  );
};

export default BreadcrumbCustomSeparator;
