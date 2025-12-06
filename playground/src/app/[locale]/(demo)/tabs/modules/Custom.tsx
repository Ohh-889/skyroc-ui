'use client';

import { useState } from 'react';
import type { TabsOptionData } from 'skyroc-ui';
import { Tabs } from 'skyroc-ui';

const tabs = [
  {
    label: 'Tab 1',
    value: '1',
    children: <div>Tab 1</div>
  },
  {
    label: 'Tab 2',
    value: '2',
    children: <div>Tab 2</div>
  },
  {
    label: 'Tab 3',
    value: '3',
    children: <div>Tab 3</div>
  }
] satisfies TabsOptionData[];

const Custom = () => {
  const [value1, setValue1] = useState('1');
  const [value2, setValue2] = useState('1');

  return (
    <div className="flex-c gap-8">
      {/* Horizontal Custom Style */}
      <div className="flex-c gap-4">
        <h3 className="text-base font-semibold">Custom Style</h3>

        <div className="lt-sm:w-auto w-80">
          <Tabs
            fill="full"
            items={tabs}
            value={value1}
            classNames={{
              content: 'p-4 border border-border rounded-1',
              indicator: 'absolute -bottom-[2px] h-[2px] w-full rounded-1 bg-primary',
              list: 'border-border border-b-[2px] bg-transparent rounded-none'
            }}
            renderContent={({ item: { value } }) => (
              <div>
                The Tab Content:
                {' '}
                {value}
              </div>
            )}
            renderTrigger={({ item: { label }, active }) => (
              <div className={active ? 'text-primary font-bold' : ''}>
                {label}
              </div>
            )}
            onValueChange={setValue1}
          />
        </div>
      </div>

      {/* Vertical Custom Style */}
      <div className="flex-c gap-4">
        <h3 className="text-base font-semibold">Custom Style Vertical</h3>

        <div className="lt-sm:w-auto w-80">
          <Tabs
            items={tabs}
            orientation="vertical"
            value={value2}
            classNames={{
              content: 'p-4 border border-border rounded-1',
              indicator: 'absolute -left-[2px] h-full w-[2px] rounded-1 bg-primary',
              list: 'border-border border-l-[2px] bg-transparent rounded-none'
            }}
            renderContent={({ item: { value } }) => (
              <div>
                The Tab Content:
                {' '}
                {value}
              </div>
            )}
            renderTrigger={({ item: { label }, active }) => (
              <div className={active ? 'text-primary font-bold' : ''}>
                {label}
              </div>
            )}
            onValueChange={setValue2}
          />
        </div>
      </div>
    </div>
  );
};

export default Custom;
