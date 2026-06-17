<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import type { Product } from '@/types/product';

const props = defineProps<{
  product: Product;
}>();

const { locale, t } = useI18n();

const currencyFormatter = computed(
  () =>
    new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }),
);

const price = computed(() => currencyFormatter.value.format(props.product.price));
const originalPrice = computed(() =>
  props.product.originalPrice ? currencyFormatter.value.format(props.product.originalPrice) : '',
);
</script>

<template>
  <article class="group overflow-hidden rounded-brand bg-white p-2 shadow-soft ring-1 ring-rose/10 transition duration-700 ease-brand hover:-translate-y-1 hover:shadow-ambient">
    <div class="relative overflow-hidden rounded-[1.35rem] bg-cream">
      <img
        :src="product.image"
        :alt="t(product.altKey)"
        class="aspect-[4/5] w-full object-cover transition duration-700 ease-brand group-hover:scale-105"
      />
      <span class="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-xs font-black text-rose shadow-soft">
        {{ t(product.tagKey) }}
      </span>
    </div>
    <div class="p-4">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="font-black leading-tight text-cocoa">{{ t(product.nameKey) }}</h3>
          <p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-mauve">
            {{ t(`common.productLabels.shapes.${product.shape}`) }} / {{ t(`common.productLabels.lengths.${product.length}`) }}
          </p>
        </div>
        <div class="text-right">
          <p class="font-black text-cocoa">{{ price }}</p>
          <p v-if="product.originalPrice" class="text-xs font-bold text-graphite line-through">{{ originalPrice }}</p>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <p class="text-sm font-bold text-graphite">
          {{ product.rating }} {{ t('common.labels.rating') }} / {{ product.reviewCount }} {{ t('common.labels.reviews') }}
        </p>
        <RouterLink
          to="/shop"
          class="rounded-full bg-petal/65 px-4 py-2 text-xs font-black text-cocoa transition duration-500 ease-brand hover:bg-rose hover:text-white"
        >
          {{ t('common.buttons.view') }}
        </RouterLink>
      </div>
    </div>
  </article>
</template>
