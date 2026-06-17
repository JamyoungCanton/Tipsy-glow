<script setup lang="ts">
import { steps } from '@/data/home';
</script>

<template>
  <section class="bg-cream py-16 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start lg:px-8">
      <div class="md:sticky md:top-28">
        <p class="text-xs font-black uppercase tracking-[0.18em] text-rose">{{ $t('home.howItWorks.eyebrow') }}</p>
        <h2 class="mt-3 font-display text-3xl font-black tracking-normal text-cocoa sm:text-4xl">
          {{ $t('home.howItWorks.title') }}
        </h2>
        <p class="mt-5 max-w-md text-base leading-8 text-graphite">
          {{ $t('home.howItWorks.copy') }}
        </p>
      </div>

      <div class="grid gap-4">
        <article
          v-for="(step, index) in steps"
          :key="step.id"
          class="rounded-brand bg-white p-6 shadow-soft ring-1 ring-rose/10 transition duration-700 ease-brand hover:-translate-y-1 hover:shadow-ambient"
        >
          <div class="flex gap-5">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petal text-sm font-black text-cocoa">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <div>
              <h3 class="text-xl font-black text-cocoa">{{ $t(step.titleKey) }}</h3>
              <p class="mt-2 text-sm leading-7 text-graphite">{{ $t(step.copyKey) }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
