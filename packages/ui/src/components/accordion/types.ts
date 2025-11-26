import type {
  AccordionContentProps as _AccordionContentProps,
  AccordionHeaderProps as _AccordionHeaderProps,
  AccordionItemProps as _AccordionItemProps,

  AccordionMultipleProps,
  AccordionSingleProps,
  AccordionTriggerProps as _AccordionTriggerProps
} from '@radix-ui/react-accordion';
import type { ClassValue, SlotProps, StyledComponentProps, ThemeSize } from '@/types/shared';
import type { AccordionSlots } from './accordion-variants';

/** The ui of the accordion. */
export type AccordionClassNames = Partial<Record<AccordionSlots, ClassValue>>;

export type AccordionRootProps = StyledComponentProps<AccordionSingleProps> | StyledComponentProps<AccordionMultipleProps>;

export interface AccordionHeaderProps extends StyledComponentProps<_AccordionHeaderProps> {}

export interface AccordionContentProps extends StyledComponentProps<_AccordionContentProps> {}

export interface AccordionItemProps extends StyledComponentProps<_AccordionItemProps> {}

export interface AccordionTriggerProps extends StyledComponentProps<_AccordionTriggerProps>, SlotProps {
  /** The ui of the accordion trigger. */
  classNames?: Pick<AccordionClassNames, 'triggerIcon' | 'triggerLeadingIcon'>;
  icon?: React.ReactNode;
}

// Accordion
export interface AccordionItemData extends Pick<AccordionItemProps, 'disabled' | 'value'> {
  children: React.ReactNode;
  leading?: React.ReactNode;
  title: React.ReactNode;
  trailing?: React.ReactNode;
}

export type AccordionProps<T extends AccordionItemData = AccordionItemData> = AccordionRootProps & {
  classNames?: AccordionClassNames;
  items: T[];
  size?: ThemeSize;
  triggerIcon?: React.ReactNode;
  triggerLeading?: React.ReactNode;
  triggerTrailing?: React.ReactNode;
};
