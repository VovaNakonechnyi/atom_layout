import { RouteRecordRaw } from 'vue-router';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    footer: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: {
      footer: 'AppFooter',
    },
  },
  {
    path: '/registration',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/registration/IndexPage.vue') },
    ],
    meta: {
      footer: 'AppInfoBlocksFooter',
    },
  },
  {
    path: '/lessons',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/lessons/IndexPage.vue') },
    ],
    meta: {
      footer: 'AppFooter',
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
