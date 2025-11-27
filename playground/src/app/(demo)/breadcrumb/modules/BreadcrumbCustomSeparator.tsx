import { Breadcrumb } from 'skyroc-ui';
import { items } from './shared';

const BreadcrumbCustomSeparator = () => {
  return (
    <Breadcrumb
      items={items}
      separator={<span className="text-gray-500 text-sm">/</span>}
    />
  );
};

export default BreadcrumbCustomSeparator;

