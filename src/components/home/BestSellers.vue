<script setup lang="ts">
import { bestSellers } from '@/data/home';
import ProductCard from '@/components/product/ProductCard.vue';
</script>

<template>
  <section class="bg-porcelain py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-black uppercase tracking-[0.18em] text-rose">{{ $t('home.bestSellers.eyebrow') }}</p>
          <h2 class="mt-3 font-display text-3xl font-black tracking-normal text-cocoa sm:text-4xl">
            {{ $t('home.bestSellers.title') }}
          </h2>
        </div>
        <RouterLink
          to="/shop"
          class="inline-flex w-max items-center rounded-full border border-rose/20 bg-white px-5 py-3 text-sm font-black text-cocoa shadow-soft transition duration-500 ease-brand hover:-translate-y-0.5 hover:border-rose/45"
        >
          {{ $t('common.buttons.viewAllStyles') }}
        </RouterLink>
      </div>

      <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard v-for="product in bestSellers" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
