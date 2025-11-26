import type { ReactNode } from 'react';
import type { ClassValue, WithClassName, ThemeSize } from '@/types/shared';
import type { CardSlots } from './card-variants';

export interface CardRootProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  size?: ThemeSize;
  split?: boolean;
}

export interface CardHeaderProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  size?: ThemeSize;
}

export interface CardTitleRootProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  leading?: React.ReactNode;
  size?: ThemeSize;
  trailing?: React.ReactNode;
}

export interface CardTitleProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  size?: ThemeSize;
}

export interface CardFooterProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  size?: ThemeSize;
}

export interface CardContentProps
  extends WithClassName,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  /**
   * If true, the content will be flex-grow and overflow-hidden
   *
   * @default false
   */
  flexHeight?: boolean;
  size?: ThemeSize;
}

export type CardUi = Partial<Record<CardSlots, ClassValue>>;

export interface CardProps extends CardRootProps {
  classNames?: CardUi;
  extra?: ReactNode;
  /**
   * If true, the content will be flex-grow and overflow-hidden
   *
   * @default false
   */
  flexHeight?: boolean;
  footer?: ReactNode;
  header?: ReactNode;
  title?: ReactNode;
  titleLeading?: ReactNode;
  titleRoot?: ReactNode;
  titleTrailing?: ReactNode;
}
