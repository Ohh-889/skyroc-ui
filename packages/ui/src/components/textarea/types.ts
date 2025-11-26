import type { ReactNode } from 'react';
import type { HTMLComponentProps, ClassValue } from '@/types/shared';
import type { TextareaSlots } from './textarea-variants';

export interface TextareaContentProps extends HTMLComponentProps<'textarea'> {}

export type TextareaClassNames = Partial<Record<TextareaSlots, ClassValue>>;

export interface TextareaCountProps
  extends Omit<HTMLComponentProps<'div'>, 'children'>,
  Pick<TextareaContentProps, 'maxLength' | 'value'> {
  children?: (count: string) => ReactNode;
  countGraphemes?: (input: TextareaContentProps['value']) => number;
}

export interface TextareaRootProps extends HTMLComponentProps<'div'> {}

export interface TextareaProps extends TextareaContentProps, Pick<TextareaCountProps, 'countGraphemes'> {
  classNames?: TextareaClassNames;
  countRender?: (count: string) => ReactNode;
  onTextChange?: (value: TextareaContentProps['value']) => void;
  showCount?: boolean;
}
