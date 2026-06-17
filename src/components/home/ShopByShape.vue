<script setup lang="ts">
import { shapes } from '@/data/home';
</script>

<template>
  <section class="bg-porcelain py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-xs font-black uppercase tracking-[0.18em] text-rose">{{ $t('home.shopByShape.eyebrow') }}</p>
        <h2 class="mt-3 font-display text-3xl font-black tracking-normal text-cocoa sm:text-4xl">
          {{ $t('home.shopByShape.title') }}
        </h2>
      </div>

      <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink
          v-for="shape in shapes"
          :key="shape.id"
          to="/shop"
          class="group block overflow-hidden rounded-brand bg-white p-2 shadow-soft ring-1 ring-rose/10 transition duration-700 ease-brand hover:-translate-y-1 hover:shadow-ambient"
        >
          <div class="overflow-hidden rounded-[1.35rem]">
            <img
              :src="shape.image"
              :alt="$t('home.shopByShape.imageAlt', { shape: $t(`common.productLabels.shapes.${shape.name}`) })"
              class="h-56 w-full object-cover transition duration-700 ease-brand group-hover:scale-105"
            />
          </div>
          <div class="p-5">
            <h3 class="text-xl font-black text-cocoa">{{ $t(`common.productLabels.shapes.${shape.name}`) }}</h3>
            <p class="mt-2 text-sm leading-6 text-graphite">{{ $t(shape.descriptionKey) }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
