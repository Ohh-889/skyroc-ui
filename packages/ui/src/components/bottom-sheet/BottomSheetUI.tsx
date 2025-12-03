import { type ComponentRef, forwardRef } from 'react';
import type { Content } from 'vaul';
import { Root as _Root } from 'vaul';
import { DialogFooter, DialogHeader, DialogTrigger } from '../dialog';
import BottomSheetClose from './BottomSheetClose';
import BottomSheetContent from './BottomSheetContent';
import BottomSheetDescription from './BottomSheetDescription';
import BottomSheetTitle from './BottomSheetTitle';
import type { BottomSheetProps } from './types';

const BottomSheetUI = forwardRef<ComponentRef<typeof Content>, BottomSheetProps>((props, ref) => {
  const {
    children,
    classNames,
    contentProps,
    description,
    footer,
    shouldScaleBackground = true,
    showClose,
    size,
    title,
    trigger,
    headerProps,
    titleProps,
    descriptionProps,
    closeProps,
    footerProps
  } = props;

  return (
    <_Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <BottomSheetContent
        classNames={classNames}
        ref={ref}
        {...contentProps}
      >
        <DialogHeader
          className={classNames?.header}
          size={size}
          {...headerProps}
        >
          <BottomSheetTitle
            className={classNames?.title}
            size={size}
            {...titleProps}
          >
            {title}
          </BottomSheetTitle>

          <BottomSheetDescription
            className={classNames?.description}
            size={size}
            {...descriptionProps}
          >
            {description}
          </BottomSheetDescription>
        </DialogHeader>

        {showClose
          ? (
            <BottomSheetClose
              className={classNames?.close}
              size={size}
              {...closeProps}
            />
          )
          : null}

        {children}

        {footer
          ? (
            <DialogFooter
              className={classNames?.footer || '!flex-col-reverse'}
              size={size}
              {...footerProps}
            >
              {footer}
            </DialogFooter>
          )
          : null}
      </BottomSheetContent>
    </_Root>
  );
});

BottomSheetUI.displayName = 'BottomSheetUI';

export default BottomSheetUI;
