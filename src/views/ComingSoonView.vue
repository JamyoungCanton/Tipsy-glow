<template>
  <section class="bg-porcelain py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <p class="text-xs font-black uppercase tracking-[0.18em] text-rose">{{ $t('common.status.comingSoon') }}</p>
      <h1 class="mt-4 font-display text-4xl font-black tracking-normal text-cocoa sm:text-5xl">
        {{ $t('system.comingSoon.title') }}
      </h1>
      <p class="mx-auto mt-5 max-w-xl text-base leading-8 text-graphite">
        {{ $t('system.comingSoon.copy') }}
      </p>
      <RouterLink
        to="/"
        class="mt-8 inline-flex rounded-full bg-cocoa px-6 py-3.5 text-sm font-black text-white shadow-petal transition duration-500 ease-brand hover:-translate-y-0.5 hover:bg-rose"
      >
        {{ $t('common.buttons.backHome') }}
      </RouterLink>
    </div>
  </section>
</template>
