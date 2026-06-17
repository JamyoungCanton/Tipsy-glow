<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { persistLocale, supportedLocales, type SupportedLocale } from '@/i18n';

const { locale, t } = useI18n();

const selectedLocale = computed({
  get: () => locale.value as SupportedLocale,
  set: (value: SupportedLocale) => {
    locale.value = value;
    persistLocale(value);
    document.documentElement.lang = value;
  },
});
</script>

<template>
  <label class="inline-flex items-center gap-2 rounded-full border border-rose/15 bg-white px-3 py-2 text-xs font-black text-cocoa shadow-soft">
    <span class="sr-only">{{ t('common.language.label') }}</span>
    <span aria-hidden="true">{{ t('common.language.label') }}</span>
    <select
      v-model="selectedLocale"
      class="max-w-[8.5rem] bg-transparent text-xs font-black text-cocoa outline-none"
      :aria-label="t('common.language.selectLabel')"
    >
      <option v-for="item in supportedLocales" :key="item.code" :value="item.code">
        {{ t(item.labelKey) }}
      </option>
    </select>
  </label>
</template>
