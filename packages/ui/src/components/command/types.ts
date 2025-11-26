import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandRoot,
  CommandSeparator
} from 'cmdk';
import type { HTMLComponentProps, StyledComponentProps, ClassValue, SlotProps, ThemeSize } from '@/types/shared';
import type { DialogClassNames, DialogProps } from '../dialog';
import type { CommandSlots } from './command-variants';

export type CommandClassNames = Partial<Record<CommandSlots, ClassValue>>;

export type CommandEmptyProps = StyledComponentProps<ComponentPropsWithoutRef<typeof CommandEmpty>>;

export type CommandGroupProps = StyledComponentProps<ComponentPropsWithoutRef<(typeof Command)['Group']>> & {
  classNames?: Pick<CommandClassNames, 'group' | 'groupLabel'>;
};

export type CommandInputProps = StyledComponentProps<Omit<ComponentPropsWithoutRef<typeof CommandInput>, 'size'>> & {
  classNames?: Pick<CommandClassNames, 'input' | 'inputIcon' | 'inputWrapper'>;
} & SlotProps;

export type CommandItemProps = StyledComponentProps<ComponentPropsWithoutRef<typeof CommandItem>> & {
  shortcut?: string | string[];
} & SlotProps;

export type CommandListProps = StyledComponentProps<ComponentPropsWithoutRef<typeof CommandList>>;

export type CommandRootProps = StyledComponentProps<ComponentPropsWithoutRef<typeof CommandRoot>>;

export type CommandSeparatorProps = StyledComponentProps<ComponentPropsWithoutRef<typeof CommandSeparator>>;

export type CommandShortcutProps = HTMLComponentProps<'div'> & {
  value?: string | string[];
};

export type CommandGroupOptionProps = Omit<CommandGroupProps, 'children' | 'heading'> & {
  children: CommandOptionData[];
  label?: ReactNode;
  type?: 'group';
};

export type CommandSeparatorOptionProps = CommandSeparatorProps & {
  type: 'separator';
};

export type CommandItemOptionProps = Omit<CommandItemProps, 'children'> & {
  label?: ReactNode;
  type?: 'item';
};

export type CommandOptionData = CommandGroupOptionProps | CommandSeparatorOptionProps | CommandItemOptionProps;

export interface CommandOptionProps {
  classNames?: CommandClassNames;
  item: CommandOptionData;
  size?: ThemeSize;
}

export interface CommandProps extends CommandRootProps {
  classNames?: CommandClassNames;
  empty?: ReactNode;
  inputProps?: CommandInputProps;
  items: CommandOptionData[];
}

export interface CommandDialogProps
  extends Omit<DialogProps, 'classNames' | 'description' | 'footer' | 'title' | 'trigger'> {
  classNames?: Pick<DialogClassNames, 'close' | 'content' | 'overlay'>;
}
