import { Content } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import { drawerVariants } from './drawer-variants';
import type { DrawerContentProps } from './types';

const DrawerContent = (props: DrawerContentProps) => {
  const { className, side, ...rest } = props;

  const { content } = drawerVariants({ side });

  const mergedCls = cn(content(), className);

  return (
    <Content
      className={mergedCls}
      data-side={side}
      data-slot="drawer-content"
      {...rest}
    />
  );
};

export default DrawerContent;
