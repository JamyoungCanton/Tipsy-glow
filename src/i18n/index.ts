import { createI18n } from 'vue-i18n';

import en from '@/locales/en';
import ja from '@/locales/ja';
import ko from '@/locales/ko';
import vi from '@/locales/vi';
import zhCN from '@/locales/zh-CN';
import zhTW from '@/locales/zh-TW';

export const defaultLocale = 'en';
export const localeStorageKey = 'maison-mani-locale';

export const supportedLocales = [
  { code: 'en', labelKey: 'common.language.en' },
  { code: 'zh-CN', labelKey: 'common.language.zhCN' },
  { code: 'zh-TW', labelKey: 'common.language.zhTW' },
  { code: 'ja', labelKey: 'common.language.ja' },
  { code: 'ko', labelKey: 'common.language.ko' },
  { code: 'vi', labelKey: 'common.language.vi' },
] as const;

export type SupportedLocale = (typeof supportedLocales)[number]['code'];

const messages = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  ko,
  vi,
};

function isSupportedLocale(locale: string | null): locale is SupportedLocale {
  return supportedLocales.some((item) => item.code === locale);
}

function getInitialLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem(localeStorageKey);
  return isSupportedLocale(savedLocale) ? savedLocale : defaultLocale;
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: defaultLocale,
  messages,
});

export function persistLocale(locale: SupportedLocale) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(localeStorageKey, locale);
  }
}
