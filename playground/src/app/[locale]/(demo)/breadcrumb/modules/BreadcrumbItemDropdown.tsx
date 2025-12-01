'use client';

import { Breadcrumb, BreadcrumbPage, DropdownMenu } from 'skyroc-ui';
import { dropdownItems, type BreadcrumbItemWithDropdown } from './shared';

const BreadcrumbItemDropdown = () => {
  return (
    <Breadcrumb
      items={dropdownItems}
      renderItem={(item: BreadcrumbItemWithDropdown) => {
        if (item.items) {
          return (
            <DropdownMenu
              items={item.items}
              modal={false}
            >
              <BreadcrumbPage className="cursor-pointer">
                {item.label}
              </BreadcrumbPage>
            </DropdownMenu>
          );
        }

        return <BreadcrumbPage>{item.label}</BreadcrumbPage>;
      }}
    />
  );
};

export default BreadcrumbItemDropdown;
