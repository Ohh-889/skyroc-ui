import React, { isValidElement } from 'react';
import { cn } from '@/lib/utils';
import { If } from '../if';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardRoot } from './CardRoot';
import { CardTitle } from './CardTitle';
import { CardTitleRoot } from './CardTitleRoot';
import { cardVariants } from './card-variants';
import type { CardProps } from './types';

export const CardUI = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    classNames,
    extra,
    flexHeight,
    footer,
    header,
    size,
    split,
    title,
    titleLeading,
    titleRoot,
    titleTrailing,
    rootProps,
    headerProps,
    titleRootProps,
    titleProps,
    contentProps,
    footerProps,
    ...rest
  } = props;

  const showHeader = Boolean(header || title || extra);

  const { root } = cardVariants({ size, split });

  const mergedCls = cn(root(), className);

  return (
    <CardRoot
      className={mergedCls}
      {...rest}
      ref={ref}
      {...rootProps}
    >
      <If condition={showHeader}>
        <CardHeader
          className={classNames?.header}
          size={size}
          {...headerProps}
        >
          <If
            condition={!header}
            fallback={header}
          >
            <If
              condition={!titleRoot}
              fallback={titleRoot}
            >
              <CardTitleRoot
                className={classNames?.titleRoot}
                size={size}
                {...titleRootProps}
              >
                {titleLeading}

                <If
                  condition={!isValidElement(title)}
                  fallback={title}
                >
                  <CardTitle
                    className={classNames?.title}
                    size={size}
                    {...titleProps}
                  >
                    {title}
                  </CardTitle>
                </If>

                {titleTrailing}
              </CardTitleRoot>
            </If>

            {extra}
          </If>
        </CardHeader>
      </If>

      <CardContent
        className={classNames?.content}
        flexHeight={flexHeight}
        size={size}
        {...contentProps}
      >
        {children}
      </CardContent>

      <If
        condition={!isValidElement(footer) && Boolean(footer)}
        fallback={footer}
      >
        <CardFooter
          className={classNames?.footer}
          size={size}
          {...footerProps}
        >
          {footer}
        </CardFooter>
      </If>
    </CardRoot>
  );
});

CardUI.displayName = 'CardUI';
