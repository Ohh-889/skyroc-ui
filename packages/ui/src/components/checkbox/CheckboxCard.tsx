'use client';

import { forwardRef, useId } from 'react';
import { Check, Minus } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import CheckboxLabel from '../label/Label';
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
    checkedIcon = <Check className="size-full" />,
    indeterminateIcon = <Minus className="size-full" />,
    color,
    description,
    disabled,
    forceMountIndicator,
    icon,
    id: controlId,
    label,
    shape,
    size,
    ...rest
  } = props;

  const isIndeterminate = checked === 'indeterminate';
  const isChecked = checked === true;

  const id = useId();

  const { card, cardContent, cardLabel, cardDescription } = checkboxVariants({ color, shape, size });

  const mergedCls = cn(
    card(),
    disabled && 'cursor-not-allowed opacity-50',
    className || classNames?.card
  );

  const labelCls = cn(
    cardLabel(),
    classNames?.cardLabel
  );

  const descriptionCls = cn(
    cardDescription(),
    classNames?.cardDescription
  );

  const contentCls = cn(
    cardContent(),
    classNames?.cardContent
  );

  const checkboxElement = (
    <CheckboxControl
      checked={checked}
      className={classNames?.control}
      color={color}
      disabled={disabled}
      id={controlId || id}
      shape={shape}
      size={size}
      {...rest}
    >
      <CheckboxIndicator
        className={classNames?.indicator}
        forceMount={forceMountIndicator}
      >
        {isIndeterminate ? indeterminateIcon : checkedIcon}
      </CheckboxIndicator>
    </CheckboxControl>
  );

  const contentElement = (
    <div className={contentCls}>

      {icon ? <Slot className="shrink-0 text-lg">{icon}</Slot> : null}

      <div className="flex flex-col gap-0.5">
        {label
          ? (
            <span className={labelCls}>
              {label}
            </span>
          )
          : null}

        {description
          ? (
            <p className={descriptionCls}>
              {description}
            </p>
          )
          : null}
      </div>
    </div>
  );

  return (
    <CheckboxLabel
      className={mergedCls}
      data-slot="checkbox-card"
      data-state={isChecked ? 'checked' : isIndeterminate ? 'indeterminate' : 'unchecked'}
      htmlFor={controlId || id}
      ref={ref}
    >
      {checkboxPosition === 'left' && checkboxElement}
      {contentElement}
      {checkboxPosition === 'right' && checkboxElement}
    </CheckboxLabel>
  );
});

CheckboxCard.displayName = 'CheckboxCard';

export default CheckboxCard;
