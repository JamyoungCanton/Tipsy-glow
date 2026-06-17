<script setup lang="ts">
import { categories } from '@/data/home';
</script>

<template>
  <section class="bg-cream py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-xs font-black uppercase tracking-[0.18em] text-rose">{{ $t('home.categories.eyebrow') }}</p>
        <h2 class="mt-3 font-display text-3xl font-black tracking-normal text-cocoa sm:text-4xl">{{ $t('home.categories.title') }}</h2>
      </div>
      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <article
          v-for="category in categories"
          :key="category.id"
          class="group overflow-hidden rounded-brand bg-white p-2 shadow-soft ring-1 ring-rose/10 transition duration-700 ease-brand hover:-translate-y-1 hover:shadow-ambient"
        >
          <div class="relative overflow-hidden rounded-[1.35rem]">
            <img
              :src="category.image"
              :alt="$t(category.altKey)"
              class="h-72 w-full object-cover transition duration-700 ease-brand group-hover:scale-105"
            />
            <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-rose shadow-soft">
              {{ $t(category.accentKey) }}
            </span>
          </div>
          <div class="p-5">
            <h3 class="text-xl font-black text-cocoa">{{ $t(category.titleKey) }}</h3>
            <p class="mt-2 text-sm leading-6 text-graphite">{{ $t(category.subtitleKey) }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
