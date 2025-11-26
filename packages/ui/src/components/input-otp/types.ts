import type { RenderProps } from 'input-otp';
import type { HTMLComponentProps, ClassValue, ThemeSize } from '@/types/shared';
import type { InputOTPSlots } from './input-otp-variants';

type OverrideProps<T, R> = Omit<T, keyof R> & R;

type OTPInputRootStyledComponentProps = OverrideProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    className?: ClassValue;
    containerClassName?: string;
    maxLength: number;
    noScriptCSSFallback?: string | null;
    onChange?: (newValue: string) => unknown;
    onComplete?: (...args: any[]) => unknown;
    pasteTransformer?: (pasted: string) => string;
    pushPasswordManagerStrategy?: 'increase-width' | 'none';
    size?: ThemeSize;
    textAlign?: 'center' | 'left' | 'right';
    value?: string;
  }
>;

type InputOTPRenderFn = (props: RenderProps) => React.ReactNode;

export type InputOTPGroupProps = HTMLComponentProps<'div'> & {
  separate?: boolean;
};

export type InputOTPRootProps = OTPInputRootStyledComponentProps
  & (
    | {
      children?: never;
      render: InputOTPRenderFn;
    }
    | {
      children: React.ReactNode;
      render?: never;
    }
  );

export interface InputOTPSeparatorProps extends HTMLComponentProps<'div'> {}

export interface InputOTPSlotProps extends HTMLComponentProps<'div'> {
  index: number;
  mask?: boolean;
  separate?: boolean;
}

export type InputOTPClassNames = Partial<Record<InputOTPSlots, ClassValue>>;

export type InputOTPProps = Omit<OTPInputRootStyledComponentProps, 'maxLength' | 'separate'> & {
  classNames?: InputOTPClassNames;
  inputCount?: number;
  mask?: boolean;
  separator?: React.ReactNode | true;
  size?: ThemeSize;
};
