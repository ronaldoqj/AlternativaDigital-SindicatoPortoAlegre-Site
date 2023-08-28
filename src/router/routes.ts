import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/IndexPage.vue') },
      { path: 'news', component: () => import('pages/news/IndexPage.vue') },
      { path: 'article', component: () => import('pages/article/IndexPage.vue') },
      {
        path: 'services',
        component: () => import('pages/services/IndexPage.vue'),
        children: [
          { path: '', component: () => import('pages/services/ServicesPage.vue') },
          { path: 'insurance', component: () => import('pages/services/InsurancePage.vue') },
          { path: 'history-file', component: () => import('pages/services/HistoryFilePage.vue') },
          { path: 'spaces', component: () => import('pages/services/SpacesPage.vue') }
        ]
      }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
