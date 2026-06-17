import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/ComingSoonView.vue'),
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('@/views/ComingSoonView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/ComingSoonView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
