<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';

import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';

const isOpen = ref(false);
const route = useRoute();
const { t } = useI18n();

const navItems = [
  { labelKey: 'common.nav.home', to: '/' },
  { labelKey: 'common.nav.shop', to: '/shop' },
  { labelKey: 'common.nav.booking', to: '/booking' },
  { labelKey: 'common.nav.admin', to: '/admin' },
];

const currentPath = computed(() => route.path);

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-rose/10 bg-porcelain/88 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-rose text-sm font-black text-white shadow-petal transition duration-500 ease-brand group-hover:scale-105">
          {{ t('common.brand.initials') }}
        </span>
        <span>
          <span class="block font-display text-base font-extrabold tracking-[0.08em] text-cocoa">{{ t('common.brand.name') }}</span>
          <span class="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mauve">{{ t('common.brand.tagline') }}</span>
        </span>
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold transition duration-500 ease-brand hover:text-rose"
          :class="currentPath === item.to ? 'text-rose' : 'text-graphite'"
        >
          {{ t(item.labelKey) }}
        </RouterLink>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <LanguageSwitcher />
        <RouterLink
          to="/shop"
          class="rounded-full bg-cocoa px-5 py-2.5 text-sm font-bold text-white shadow-soft transition duration-500 ease-brand hover:-translate-y-0.5 hover:bg-rose active:translate-y-0"
        >
          {{ t('common.buttons.shopSets') }}
        </RouterLink>
      </div>

      <button
        class="relative flex h-11 w-11 items-center justify-center rounded-full border border-rose/15 bg-white text-cocoa shadow-soft transition duration-500 ease-brand active:scale-95 md:hidden"
        type="button"
        :aria-expanded="isOpen"
        :aria-label="t('common.nav.toggle')"
        @click="isOpen = !isOpen"
      >
        <span class="relative h-4 w-5">
          <span
            class="absolute left-0 top-1 h-0.5 w-5 rounded-full bg-cocoa transition duration-500 ease-brand"
            :class="isOpen ? 'translate-y-[5px] rotate-45' : ''"
          />
          <span
            class="absolute bottom-1 left-0 h-0.5 w-5 rounded-full bg-cocoa transition duration-500 ease-brand"
            :class="isOpen ? '-translate-y-[5px] -rotate-45' : ''"
          />
        </span>
      </button>
    </nav>

    <div v-if="isOpen" class="border-t border-rose/10 bg-porcelain px-4 py-5 shadow-ambient md:hidden">
      <div class="mx-auto flex max-w-7xl flex-col gap-2">
        <div class="px-1 pb-3">
          <LanguageSwitcher />
        </div>
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-3 text-base font-bold transition duration-500 ease-brand"
          :class="currentPath === item.to ? 'bg-petal/65 text-cocoa' : 'text-graphite hover:bg-white'"
          @click="closeMenu"
        >
          {{ t(item.labelKey) }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
