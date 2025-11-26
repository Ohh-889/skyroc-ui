import type {
  AvatarFallbackProps as _AvatarFallbackProps,
  AvatarImageProps as _AvatarImageProps,
  AvatarProps as _AvatarRootProps
} from '@radix-ui/react-avatar';
import type { StyledComponentProps, ClassValue } from '@/types/shared';
import type { AvatarSlots } from './avatar-variants';

export type AvatarUi = Partial<Record<AvatarSlots, ClassValue>>;

export interface AvatarRootProps extends StyledComponentProps<_AvatarRootProps> {}

export interface AvatarFallbackProps extends StyledComponentProps<_AvatarFallbackProps> {}

export interface AvatarImageProps extends StyledComponentProps<_AvatarImageProps> {}

export interface AvatarProps extends AvatarImageProps, Pick<AvatarFallbackProps, 'delayMs'> {
  classNames?: AvatarUi;
  fallback?: React.ReactNode;
}
