'use client';

import type { ComponentProps, FC } from 'react';
import cn from 'clsx';

const createHeading = (Tag: `h${1 | 2 | 3 | 4 | 5 | 6}`): FC<ComponentProps<typeof Tag>> => {
  const Heading = ({ children, className, id, ...props }: ComponentProps<typeof Tag>) => {
    const _class
      = className === 'sr-only'
        ? 'sr-only'
        : cn(
          'group scroll-mt-20 font-semibold tracking-tight',
          {
            h1: cn('scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'),
            h2: cn('scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0'),
            h3: cn('mt-10 mb-4 text-xl md:text-2xl', 'leading-[1.4] font-semibold', 'relative'),
            h4: cn('mt-8 mb-3 text-lg md:text-xl', 'font-semibold', 'text-foreground/90'),
            h5: cn('mt-6 mb-2 text-base md:text-lg', 'leading-[1.6] font-semibold', 'text-foreground/80'),
            h6: cn(
              'mt-6 mb-2 text-sm md:text-base',
              'leading-[1.6] font-semibold',
              'text-muted-foreground tracking-wider uppercase'
            )
          }[Tag],
          className
        );

    return (
      <Tag
        className={_class}
        id={id}
        {...props}
      >
        {children}
      </Tag>
    );
  };

  return Heading;
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');
