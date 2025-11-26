import type { ComponentPropsWithRef } from 'react';
import type { BaseNodeProps } from '@/types/shared';

export type InputProps = BaseNodeProps<Omit<ComponentPropsWithRef<'input'>, 'size'>>;
