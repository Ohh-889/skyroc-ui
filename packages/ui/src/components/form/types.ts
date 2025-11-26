import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { ComputedFieldProps, FieldProps } from '@skyroc/form';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { LabelProps } from '../label/types';
import type { FormSlots } from './form-variants';

type FormClassNames = Partial<Record<FormSlots, ClassValue>>;

export interface FormDescriptionProps extends StyledComponentProps<ComponentProps<'p'>> {}

export interface FormItemProps extends StyledComponentProps<ComponentProps<'div'>> {}

export interface FormLabelProps extends LabelProps {
  error?: boolean;
}

export interface FormMessageProps extends StyledComponentProps<ComponentProps<'p'>> {
  error?: string[];
}

type FormSharedProps = StyledComponentProps<{
  classNames?: FormClassNames;
  description?: string;
  error?: string;
  label?: ReactNode;
}>;

export type FormFieldProps<Values = any> = FieldProps<Values>
  & FormSharedProps & {
    component?: ElementType;
  };

export type FormComputedFieldProps<Values = any> = ComputedFieldProps<Values> & FormSharedProps;
