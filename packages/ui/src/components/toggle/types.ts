import type { ToggleProps as _ToggleProps } from '@radix-ui/react-toggle';
import type { StyledComponentProps } from '@/types/shared';
import type { ToggleVariant } from './toggle-variants';

export interface ToggleProps extends StyledComponentProps<_ToggleProps> {
  variant?: ToggleVariant;
}
