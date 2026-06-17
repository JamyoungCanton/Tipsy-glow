<template>
  <footer class="border-t border-rose/10 bg-cream">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
      <div>
        <p class="font-display text-xl font-black tracking-[0.08em] text-cocoa">{{ $t('common.brand.name') }}</p>
        <p class="mt-4 max-w-sm text-sm leading-7 text-graphite">
          {{ $t('common.brand.footerDescription') }}
        </p>
      </div>
      <div>
        <p class="text-sm font-black uppercase tracking-[0.16em] text-mauve">{{ $t('common.footer.explore') }}</p>
        <div class="mt-4 grid gap-3 text-sm font-semibold text-graphite">
          <RouterLink to="/" class="transition hover:text-rose">{{ $t('common.nav.home') }}</RouterLink>
          <RouterLink to="/shop" class="transition hover:text-rose">{{ $t('common.nav.shop') }}</RouterLink>
          <RouterLink to="/booking" class="transition hover:text-rose">{{ $t('common.nav.booking') }}</RouterLink>
        </div>
      </div>
      <div>
        <p class="text-sm font-black uppercase tracking-[0.16em] text-mauve">{{ $t('common.footer.studioNotes') }}</p>
        <p class="mt-4 text-sm leading-7 text-graphite">
          {{ $t('common.status.demoNote') }}
        </p>
      </div>
    </div>
    <div class="border-t border-rose/10 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-mauve">
      &copy; 2026 {{ $t('common.brand.name') }}
    </div>
  </footer>
</template>
