'use client';

import { useComponentConfig } from '../config-provider/context';
import FormFieldUI from './FormFieldUI';
import type { FormFieldProps } from './types';

const FormField = <Values = any,>(props: FormFieldProps<Values>) => {
  const config = useComponentConfig('formField');

  const mergedProps = {
    ...config,
    ...props
  };

  return (
    <FormFieldUI
      {...mergedProps}
    />
  );
};

FormField.displayName = 'FormField';

export default FormField;
