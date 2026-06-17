<template>
  <section class="overflow-hidden bg-porcelain">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:items-center md:pb-24 md:pt-16 lg:px-8">
      <div class="relative z-10">
        <p class="inline-flex rounded-full border border-rose/15 bg-white px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-mauve shadow-soft">
          {{ $t('home.hero.eyebrow') }}
        </p>
        <h1 class="mt-7 max-w-3xl font-display text-5xl font-black leading-[0.98] tracking-normal text-cocoa sm:text-6xl lg:text-7xl">
          {{ $t('home.hero.title') }}
        </h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-graphite sm:text-lg">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/shop"
            class="group inline-flex items-center justify-center gap-3 rounded-full bg-cocoa px-6 py-3.5 text-sm font-black text-white shadow-petal transition duration-500 ease-brand hover:-translate-y-0.5 hover:bg-rose active:translate-y-0"
          >
            {{ $t('common.buttons.shopBestSellers') }}
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/14 transition duration-500 ease-brand group-hover:translate-x-1">
              &rarr;
            </span>
          </RouterLink>
          <RouterLink
            to="/booking"
            class="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white px-6 py-3.5 text-sm font-black text-cocoa shadow-soft transition duration-500 ease-brand hover:-translate-y-0.5 hover:border-rose/40 active:translate-y-0"
          >
            {{ $t('common.buttons.requestStyle') }}
          </RouterLink>
        </div>
        <div class="mt-10 grid max-w-md grid-cols-3 gap-3">
          <div class="rounded-brand-sm bg-white p-4 shadow-soft">
            <p class="text-xl font-black text-cocoa">24</p>
            <p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-mauve">{{ $t('home.hero.stats.styles') }}</p>
          </div>
          <div class="rounded-brand-sm bg-white p-4 shadow-soft">
            <p class="text-xl font-black text-cocoa">4.8</p>
            <p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-mauve">{{ $t('home.hero.stats.rating') }}</p>
          </div>
          <div class="rounded-brand-sm bg-white p-4 shadow-soft">
            <p class="text-xl font-black text-cocoa">7d</p>
            <p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-mauve">{{ $t('home.hero.stats.wear') }}</p>
          </div>
        </div>
      </div>

      <div class="relative min-h-[560px]">
        <div class="absolute left-5 top-0 h-52 w-52 rounded-full bg-petal/55 blur-3xl" />
        <div class="absolute bottom-12 right-6 h-44 w-44 rounded-full bg-cream blur-3xl" />
        <div class="relative ml-auto max-w-[620px] rounded-[2.2rem] bg-white/70 p-2 shadow-ambient ring-1 ring-rose/10">
          <div class="overflow-hidden rounded-[1.75rem] bg-cream">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=88"
              :alt="$t('home.hero.imageAlt')"
              class="h-[520px] w-full object-cover"
            />
          </div>
        </div>
        <div class="absolute bottom-6 left-0 max-w-[270px] rounded-[1.5rem] bg-white p-4 shadow-ambient ring-1 ring-rose/10 sm:left-4">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-rose">{{ $t('home.hero.mood.eyebrow') }}</p>
          <p class="mt-2 text-lg font-black text-cocoa">{{ $t('home.hero.mood.title') }}</p>
          <p class="mt-2 text-sm leading-6 text-graphite">{{ $t('home.hero.mood.copy') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
