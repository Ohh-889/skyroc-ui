'use client';

import { usePathname } from 'next/navigation';
import type { TabsOptionData } from 'skyroc-ui';
import { Tabs } from 'skyroc-ui';

interface DemoTabsProps {
  items: TabsOptionData[];
}

const DemoTabs = ({ items }: DemoTabsProps) => {
  const pathname = usePathname();

  const currentTab = pathname.split('/').pop();

  return (
    <Tabs
      enableIndicator={false}
      items={items}
      value={currentTab}
      classNames={{
        list: 'grid grid-cols-10 gap-y-1 max-sm:grid-cols-3 max-md:grid-cols-6 max-lg:grid-cols-8 w-full',
      }}
    />
  );
};

export default DemoTabs;
