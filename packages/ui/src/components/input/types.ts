import type { ComponentPropsWithRef } from 'react';
import type { StyledComponentProps } from '@/types/shared';

export type InputProps = StyledComponentProps<Omit<ComponentPropsWithRef<'input'>, 'size'>>;
