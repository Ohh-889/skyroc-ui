import { cn } from '@/lib';
import type { KbdValue } from '../keyboard-key';
import { Kbd } from '../keyboard-key';
import { menuVariants } from './menu-variants';
import type { MenuShortcutProps } from './types';

const MenuShortcut = (props: MenuShortcutProps) => {
  const { className, size, value, ...rest } = props;

  const { shortcut } = menuVariants({ size });

  const mergedCls = cn(shortcut(), className);

  return (
    <div
      className={mergedCls}
      {...rest}
    >
      <Kbd
        size={size}
        value={value as KbdValue}
      />
    </div>
  );
};

MenuShortcut.displayName = 'MenuShortcut';

export default MenuShortcut;
