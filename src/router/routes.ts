import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homeIndex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home/IndexPage.vue') },
      { path: 'noticias', name: 'news', component: () => import('pages/news/IndexPage.vue') },
      { path: 'artigo', name: 'article', component: () => import('pages/article/IndexPage.vue') },
      {
        path: 'servicos',
        name: 'servicesIndex',
        component: () => import('pages/services/IndexPage.vue'),
        children: [
          { path: '', name: 'services', component: () => import('pages/services/ServicesPage.vue') },
          { path: 'convenios', name: 'insurance', component: () => import('pages/services/InsurancePage.vue') },
          { path: 'arquivo-historico', name: 'historyFile', component: () => import('pages/services/HistoryFilePage.vue') },
          { path: 'espacos', name: 'spaces', component: () => import('pages/services/SpacesPage.vue') },
          { path: 'juridico', name: 'legal', component: () => import('pages/services/LegalPage.vue') }
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
