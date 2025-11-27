import { ChevronsLeftRightEllipsis } from 'lucide-react';
import { Breadcrumb } from 'skyroc-ui';
import { items3 } from './shared';

const BreadcrumbCustomEllipsis = () => {
  return (
    <Breadcrumb
      ellipsis
      ellipsisIcon={<ChevronsLeftRightEllipsis />}
      items={items3}
    />
  );
};

export default BreadcrumbCustomEllipsis;

