'use client';

import { useMemo } from 'react';
import { ConfigContext } from './context';
import type { ComponentConfig, ConfigProviderProps } from './types';

const COMPONENT_KEYS = [
  'accordion',
  'alert',
  'alertDialog',
  'aspectRatio',
  'avatar',
  'badge',
  'breadcrumb',
  'bottomSheet',
  'button',
  'card',
  'carousel',
  'checkbox',
  'chip',
  'collapsible',
  'command',
  'contextMenu',
  'dialog',
  'divider',
  'drawer',
  'dropdownMenu',
  'formField',
  'hoverCard',
  'icon',
  'input',
  'inputOtp',
  'keyboardKey',
  'label',
  'layout',
  'numberInput',
  'pagination',
  'popover',
  'password',
  'progress',
  'radio',
  'scrollArea',
  'segment',
  'select',
  'skeleton',
  'slider',
  'sonner',
  'switch',
  'tabs',
  'textarea',
  'toggle',
  'tooltip'
] satisfies (keyof ComponentConfig)[];

const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, direction = 'ltr', size = 'md', theme = { color: 'default' }, ...rest } = props;

  const componentConfig = useMemo(() => {
    return Object.fromEntries(
      COMPONENT_KEYS.map(key => [
        key,
        {
          color: theme.color,
          dir: direction,
          size,
          ...rest[key]
        }
      ])
    );
  }, [direction, size, rest, theme.color]);

  return (
    <ConfigContext.Provider value={componentConfig}>

      {children}

    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
