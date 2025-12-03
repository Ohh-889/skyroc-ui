import { isValidElement } from 'react';
import { cn } from '@/lib/utils';
import { Divider } from '../divider';
import { ListContent } from './ListContent';
import { ListDescription } from './ListDescription';
import { ListItem } from './ListItem';
import { ListTitle } from './ListTitle';
import { listVariants } from './list-variants';
import type { ListItemUIProps } from './types';

export const ListItemUI = (props: ListItemUIProps) => {
  const {
    className,
    classNames,
    content,
    contentProps,
    description,
    descriptionProps,
    divider,
    leading,
    size,
    title,
    titleProps,
    trailing,
    ...rest
  } = props;

  const { item } = listVariants({ size });

  return (
    <>
      <ListItem
        className={cn(item(), className, classNames?.item)}
        size={size}
        {...rest}
      >
        {leading}

        <ListContent
          className={classNames?.content}
          size={size}
          {...contentProps}
        >

          {title
            ? (
              <ListTitle
                className={classNames?.title}
                size={size}
                {...titleProps}
              >
                {title}
              </ListTitle>
            )
            : null}

          {description
            ? (
              <ListDescription
                className={classNames?.description}
                size={size}
                {...descriptionProps}
              >
                {description}
              </ListDescription>
            )
            : null}

          {content}
        </ListContent>

        {trailing}

      </ListItem>

      {isValidElement(divider) ? divider : divider ? <Divider /> : null}
    </>
  );
};
