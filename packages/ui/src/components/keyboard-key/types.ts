import type { ReactNode } from 'react';
import type { HTMLComponentProps, ClassValue } from '@/types/shared';
import type { KeyboardKeySlots, KeyboardKeyVariant } from './keyboard-key-variants';

/**
 * Predefined keyboard keys that have built-in styling and special handling.
 * These keys are commonly used in keyboard shortcuts and key combination displays.
 */
export type BuiltinKeyboardKey
  = | 'alt'
    | 'arrowdown'
    | 'arrowleft'
    | 'arrowright'
    | 'arrowup'
    | 'backspace'
    | 'capslock'
    | 'command'
    | 'ctrl'
    | 'delete'
    | 'end'
    | 'enter'
    | 'escape'
    | 'home'
    | 'meta'
    | 'option'
    | 'pagedown'
    | 'pageup'
    | 'shift'
    | 'tab'
    | 'win';

/**
 * Platform-specific mappings for modifier keys.
 * Allows different visual representations based on the operating system.
 * For example, "cmd" on Mac vs "ctrl" on Windows.
 */
export interface SpecificKeyboardKeyMap {
  /** Custom display text for the alt key */
  alt: string;
  /** Custom display text for the ctrl key */
  ctrl: string;
  /** Custom display text for the meta key */
  meta: string;
}

/**
 * Union type that accepts either built-in keyboard keys or custom key strings.
 * Use built-in keys for standard keyboard keys, or custom strings for any other key identifier.
 */
export type KeyboardKeyValue = BuiltinKeyboardKey | (string & {});

/**
 * Props for the KeyboardKey component.
 * Renders a visual representation of one or more keyboard keys.
 *
 * @template T - Type of the keyboard key value(s), defaults to KeyboardKeyValue
 *
 * @example
 * // Single key
 * <KeyboardKey value="enter" />
 *
 * @example
 * // Key combination (multiple keys)
 * <KeyboardKey value={['ctrl', 'c']} />
 *
 * @example
 * // Custom rendering of key values
 * <KeyboardKey value={['cmd', 'shift', 'p']}>
 *   {(values) => values.join(' + ')}
 * </KeyboardKey>
 */
export interface KeyboardKeyProps<T extends KeyboardKeyValue | KeyboardKeyValue[] = KeyboardKeyValue>
  extends Omit<HTMLComponentProps<'div'>, 'children'> {
  /**
   * Render function that receives an array of key display values.
   * Used to customize how the keys are rendered and displayed.
   */
  children?: (values: string[]) => React.ReactNode;
  /**
   * The keyboard key(s) to display.
   * Can be a single key, an array of keys, or a keyboard key value.
   */
  value?: T | string[];
  /**
   * Visual variant style for the keyboard key(s).
   */
  variant?: KeyboardKeyVariant;
}

/**
 * Class names for different slots in the keyboard key component.
 * Allows customizing styles for specific parts of the keyboard key.
 */
export type KeyboardKeyClassNames = Partial<Record<KeyboardKeySlots, ClassValue>>;

/**
 * Props for the KeyboardKeyGroup component.
 * Renders multiple keyboard keys with a separator between them.
 *
 * @template T - Type of the keyboard key value(s), defaults to KeyboardKeyValue
 *
 * @example
 * // Keyboard shortcut with default separator
 * <KeyboardKeyGroup values={['ctrl', 'shift', 'k']} />
 *
 * @example
 * // Custom separator and rendering
 * <KeyboardKeyGroup
 *   values={['cmd', 'option', 'j']}
 *   separator=" + "
 *   render={(key) => <span key={key}>{key}</span>}
 * />
 */
export interface KeyboardKeyGroupProps<T extends KeyboardKeyValue | KeyboardKeyValue[] = KeyboardKeyValue>
  extends Omit<KeyboardKeyProps, 'children' | 'value'> {
  /**
   * Class names for customizing different parts of the keyboard key group.
   */
  classNames?: KeyboardKeyClassNames;
  /**
   * Custom render function for individual keys in the group.
   * Each key value will be passed to this function for rendering.
   */
  render?: (value: T) => React.ReactNode;
  /**
   * Content to display between keyboard keys (separator).
   * Defaults to a visual separator if not provided.
   */
  separator?: ReactNode;
  /**
   * Array of keyboard key values to display in the group.
   * Each value will be rendered as a separate key component.
   */
  values: T[];
}

export type { KeyboardKeyVariant };
