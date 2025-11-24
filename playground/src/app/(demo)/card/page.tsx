import React from 'react';
import { Rocket, X } from 'lucide-react';
import { Badge, ButtonIcon, Card } from 'skyroc-ui'; // 假设这些是你自己封装的 React 组件
import type { ThemeSize } from 'skyroc-ui';

const sizes: ThemeSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const DemoCard: React.FC = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Size"
      >
        <div className="i-flex-c w-1/2 pr-[10px] max-sm:w-full max-sm:pr-0">
          {sizes.map(size => (
            <Card
              className="mb-[12px]"
              extra="extra"
              footer="Footer"
              key={`left-${size}`}
              size={size}
              title={`Size: ${size}`}
            >
              <p className="text-gray-500 dark:text-neutral-400">Content</p>
            </Card>
          ))}
        </div>

        <div className="i-flex-c w-1/2 pl-[10px] max-sm:w-full max-sm:pl-0">
          {sizes.map(size => (
            <Card
              split
              className="mb-[12px]"
              footer="Footer"
              key={`right-${size}`}
              size={size}
              title={`Size: ${size}`}
              extra={(
                <ButtonIcon size={size}>
                  <X />
                </ButtonIcon>
              )}
            >
              <p className="text-gray-500 dark:text-neutral-400">Content</p>
            </Card>
          ))}
        </div>
      </Card>

      <Card
        split
        classNames={{ content: 'flex-c-stretch gap-4' }}
        title="More"
      >
        <Card>
          <p className="text-gray-500 dark:text-neutral-400">Only Content</p>
        </Card>

        <Card
          split
          title="Title"
        >
          <p className="text-gray-500 dark:text-neutral-400">Content</p>
        </Card>

        <Card
          split
          footer="Footer"
        >
          <p className="text-gray-500 dark:text-neutral-400">Content</p>
        </Card>

        <Card
          split
          title="Title Slot"
          titleLeading={<Rocket />}
          titleTrailing={<Badge variant="soft">Badge</Badge>}
        >
          <p className="text-gray-500 dark:text-neutral-400">Content</p>
        </Card>
      </Card>
    </div>
  );
};

export default DemoCard;
