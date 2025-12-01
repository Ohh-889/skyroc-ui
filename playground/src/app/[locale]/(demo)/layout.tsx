import React from 'react';
import { Card } from 'skyroc-ui';
import { Link } from '../../../i18n/navigation';
import COMPONENT_DIRS from '../../../../component-list.json';
import DemoTabs from './modules/DemoTabs';
import DemoTitle from './modules/DemoTitle';

function getComponentDirectories() {
  try {
    const componentDirs = COMPONENT_DIRS
      .map(dir => ({
        children: null,
        label: <Link href={`/${dir.name}`}>{dir.name.charAt(0).toUpperCase() + dir.name.slice(1)}</Link>,
        value: dir.name
      }));

    return componentDirs;
  }
  catch (error) {
    console.error('failed to read the component directory:', error);

    return [{ children: null, label: 'Button', value: 'button' }];
  }
}

const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  const componentTabs = getComponentDirectories();

  return (
    <>
      <DemoTabs items={componentTabs} />

      <Card
        className="h-full"
        classNames={{ content: 'flex-c gap-3 ' }}
        title={<DemoTitle />}
      >
        {children}
      </Card>
    </>
  );
};

export default DemoLayout;
