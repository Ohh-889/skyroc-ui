'use client';

import { useState } from 'react';
import { Tabs } from 'skyroc-ui';
import CopyButton from './CopyButton';

interface InstallDependenciesProps {
  pkg: string;
}

const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;

const InstallDependencies = (props: InstallDependenciesProps) => {
  const { pkg } = props;

  const [activePackageManager, setActivePackageManager] = useState<string>(PACKAGE_MANAGERS[0]);

  const items = PACKAGE_MANAGERS.map(manager => ({
    children: () => (
      <div className="flex-y-center h-10 justify-between gap-2 rounded-md border pr-1.5 pl-3">
        <code className="text-sm">
          $
          {' '}
          {manager}
          {' '}
          add
          {' '}
          {pkg}
        </code>

        <CopyButton content={`${manager} add ${pkg}`} />
      </div>
    ),
    label: manager,
    value: manager
  }));

  return (
    <Tabs
      className="w-fit"
      defaultValue="npm"
      items={items}
      value={activePackageManager}
      onValueChange={setActivePackageManager}
    />
  );
};

export default InstallDependencies;
