'use client';

import Link from 'next/link';
import { Breadcrumb } from 'skyroc-ui';
import { items4 } from './shared';

const BreadcrumbCustomItem = () => {
  return (
    <Breadcrumb
      items={items4}
      renderItem={item => <Link href={item.value}>{item.label}</Link>}
    />
  );
};

export default BreadcrumbCustomItem;

