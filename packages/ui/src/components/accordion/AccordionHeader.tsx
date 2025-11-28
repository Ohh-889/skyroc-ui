import type { ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Header } from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';
import { accordionVariants } from './accordion-variants';
import type { AccordionHeaderProps } from './types';

const AccordionHeader = forwardRef<ComponentRef<typeof Header>, AccordionHeaderProps>((props, ref) => {
  const { className, ...rest } = props;

  const { header } = accordionVariants();

  const mergedCls = cn(header(), className);

  return (
    <Header
      className={mergedCls}
      ref={ref}
      {...rest}
    />
  );
});
AccordionHeader.displayName = Header.displayName;

export default AccordionHeader;
