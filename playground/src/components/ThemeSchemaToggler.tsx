'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { Icon, Switch } from 'skyroc-ui';

const ThemeSchemaToggler = () => {
  const t = useTranslations('header');
  const { setTheme, theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const isDark = theme === 'dark';

  function changeTheme() {
    setTheme(isDark ? 'light' : 'dark');
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return null;

  return (
    <Switch
      aria-label={isDark ? t('switchToLight') : t('switchToDark')}
      checked={isDark}
      color="accent"
      defaultChecked={isDark}
      size="lg"
      onCheckedChange={changeTheme}
    >
      <Icon icon={isDark ? 'lucide:moon' : 'lucide:sun'} />
    </Switch>
  );
};

export default ThemeSchemaToggler;
