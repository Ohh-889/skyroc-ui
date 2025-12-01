'use client';

import { useTranslations } from 'next-intl';
import { ButtonIcon, DropdownMenu, Icon } from 'skyroc-ui';
import { useRouter, usePathname } from '../i18n/navigation';
import { locales, localeNames, type Locale } from '../i18n/config';

const LocaleSwitcher = () => {
  const t = useTranslations('header');

  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu
      items={locales.map(loc => ({

        label: localeNames[loc],
        onSelect: () => handleLocaleChange(loc)
      }))}
    >
      <ButtonIcon
        aria-label={t('switchLanguage')}
        size="lg"
        variant="ghost"
      >
        <Icon icon="lucide:languages" />
      </ButtonIcon>
    </DropdownMenu>

  );
};

export default LocaleSwitcher;
