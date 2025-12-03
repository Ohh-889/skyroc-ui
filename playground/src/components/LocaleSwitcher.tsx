'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ButtonIcon, DropdownMenu, Icon } from 'skyroc-ui';
import { useRouter, usePathname } from '../i18n/navigation';
import { locales, localeNames, type Locale } from '../i18n/config';

const LocaleSwitcher = () => {
  const t = useTranslations('header');

  const router = useRouter();

  const pathname = usePathname();

  const locale = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu
      items={
        [
          {
            type: 'radio',
            value: locale,
            children: locales.map(loc => ({
              label: localeNames[loc],
              value: loc
            })),
            onValueChange: (value: string) => handleLocaleChange(value as Locale)
          }
        ]
      }
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
