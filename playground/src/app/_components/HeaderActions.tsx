'use client';

import Link from 'next/link';
import { ButtonIcon, Icon, Popover, Tooltip } from 'skyroc-ui';
import ThemeCustomize from '../../components/ThemeCustomize';
import ThemeSchemaToggler from '../../components/ThemeSchemaToggler';
import config from '../../config';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-1">
      <Tooltip content="文档">
        <ButtonIcon
          asChild
          aria-label="查看文档"
          size="lg"
          variant="ghost"
        >
          <Link
            href="https://docs.skyroc-ui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon icon="lucide:book-open" />
          </Link>
        </ButtonIcon>
      </Tooltip>

      <Popover
        align="end"
        classNames={{ content: 'z-15' }}
        side="bottom"
        trigger={(
          <ButtonIcon
            aria-label="自定义主题"
            icon="lucide:palette"
            size="lg"
            variant="ghost"
          />
        )}
      >
        <ThemeCustomize />
      </Popover>

      <Tooltip content="GitHub">
        <ButtonIcon
          asChild
          aria-label="GitHub 仓库"
          size="lg"
          variant="ghost"
        >
          <Link
            href={config.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon icon="lucide:github" />
          </Link>
        </ButtonIcon>
      </Tooltip>

      <div className="bg-border mx-1 h-5 w-px" />
      <ThemeSchemaToggler />
    </div>
  );
};

export default HeaderActions;
