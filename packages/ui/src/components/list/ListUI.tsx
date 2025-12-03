import React from 'react';
import { ListRoot } from './ListRoot';
import type { ListProps } from './types';
import { ListItemUI } from './ListItemUI';

export const ListUI = React.forwardRef<HTMLUListElement, ListProps>(
  (props, ref) => {
    const { children, className, classNames, leading, trailing, items, size, contentProps, titleProps, descriptionProps, ...rest } = props;

    const length = items.length;

    return (
      <ListRoot
        className={className || classNames?.root}
        ref={ref}
        size={size}
        {...rest}
      >
        {items.map((item, index) => (
          <ListItemUI
            classNames={classNames}
            contentProps={contentProps}
            descriptionProps={descriptionProps}
            divider={index !== length - 1}
            key={String(index)}
            leading={leading}
            size={size}
            titleProps={titleProps}
            trailing={trailing}
            {...item}
          />
        ))}
      </ListRoot>
    );
  }
);

ListUI.displayName = 'ListUI';
