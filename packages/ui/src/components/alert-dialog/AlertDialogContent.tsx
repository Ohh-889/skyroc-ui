import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-alert-dialog';
import { cn } from '@/lib/utils';
import { dialogVariants } from './alert-dialog-variants';
import type { AlertDialogContentProps } from './types';

const AlertDialogContent = forwardRef<ComponentRef<typeof Content>, AlertDialogContentProps>((props, ref) => {
  const { className, size, ...rest } = props;

  const { content } = dialogVariants({ size });

  const mergedClass = cn(content(), className);
  return (
    <Content
      {...rest}
      className={mergedClass}
      ref={ref}
    />
  );
});

AlertDialogContent.displayName = 'AlertDialogContent';

export default AlertDialogContent;
