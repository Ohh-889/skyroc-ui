'use client';

import { forwardRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { checkboxVariants } from './checkbox-variants';
import CheckboxControl from './CheckboxControl';
import CheckboxIndicator from './CheckboxIndicator';
import type { CheckboxCardProps } from './types';

const CheckboxCard = forwardRef<HTMLLabelElement, CheckboxCardProps>((props, ref) => {
  const {
    checked,
    checkboxPosition = 'left',
    className,
    classNames,
    color,
    description,
    disabled,
    forceMountIndicator,
    icon,
    id,
    label,
    shape,
    size,
    ...rest
  } = props;

  const isIndeterminate = checked === 'indeterminate';
  const isChecked = checked === true;

  const { card, cardContent } = checkboxVariants({ color, shape, size });

  const checkboxElement = (
    <CheckboxControl
      checked={checked}
      className={classNames?.control}
      color={color}
      disabled={disabled}
      id={id}
      shape={shape}
      size={size}
      {...rest}
    >
      <CheckboxIndicator
        className={classNames?.indicator}
        forceMount={forceMountIndicator}
      >
        {isIndeterminate ? <Minus className="size-full" /> : <Check className="size-full" />}
      </CheckboxIndicator>
    </CheckboxControl>
  );

  const contentElement = (
    <div className={cn(cardContent(), classNames?.cardContent)}>
      {icon ? <span className="text-lg">{icon}</span> : null}

      <div className="flex flex-col gap-0.5">
        {label
          ? (
            <span className="text-sm leading-none font-medium">
              {label}
            </span>
          )
          : null}

        {description
          ? (
            <span className="text-muted-foreground text-xs">
              {description}
            </span>
          )
          : null}
      </div>
    </div>
  );

  return (
    <label
      htmlFor={id}
      ref={ref}
      className={cn(
        card(),
        (isChecked || isIndeterminate) && 'border-primary bg-primary/5',
        disabled && 'cursor-not-allowed opacity-50',
        className || classNames?.card
      )}
    >
      {checkboxPosition === 'left' && checkboxElement}
      {contentElement}
      {checkboxPosition === 'right' && checkboxElement}
    </label>
  );
});

CheckboxCard.displayName = 'CheckboxCard';

export default CheckboxCard;
