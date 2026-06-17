<script setup lang="ts">
import AnnouncementBar from '@/components/layout/AnnouncementBar.vue';
import FooterSection from '@/components/layout/FooterSection.vue';
import Navbar from '@/components/layout/Navbar.vue';
</script>

<template>
  <div class="min-h-[100dvh] bg-porcelain text-cocoa antialiased">
    <AnnouncementBar />
    <Navbar />
    <main>
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>
