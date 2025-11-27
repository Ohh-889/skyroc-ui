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
        list: 'flex-wrap justify-start'
      }}
    />
  );
};

export default DemoTabs;
