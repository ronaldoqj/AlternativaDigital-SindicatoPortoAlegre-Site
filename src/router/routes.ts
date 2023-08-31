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
          { path: 'convenios', name: 'servicesInsurance', component: () => import('pages/services/InsurancePage.vue') },
          { path: 'arquivo-historico', name: 'servicesHistoryFile', component: () => import('pages/services/HistoryFilePage.vue') },
          { path: 'espacos', name: 'servicesSpaces', component: () => import('pages/services/SpacesPage.vue') },
          { path: 'juridico', name: 'servicesLegal', component: () => import('pages/services/LegalPage.vue') }
        ]
      },
      {
        path: 'departamentos',
        name: 'departmentsIndex',
        component: () => import('pages/departments/IndexPage.vue'),
        children: [
          { path: '', name: 'departments', component: () => import('pages/departments/DepartmentsPage.vue') },
          { path: 'juridico', name: 'departmentsLegal', component: () => import('pages/departments/LegalPage.vue') },
          { path: 'saude-e-condicoes-de-trabalho', name: 'departmentsHealthAndWorkingConditions', component: () => import('pages/departments/HealthAndWorkingConditionsPage.vue') },
          { path: 'juventude-e-genero', name: 'departmentsYouthAndGender', component: () => import('pages/departments/YouthGenderPage.vue') },
          { path: 'diversidade-e-combate-ao-racismo', name: 'departmentsDiversityAndCombatingRacism', component: () => import('pages/departments/DiversityAndCombatingRacismPage.vue') },
          { path: 'esporte-e-lazer', name: 'departmentsSportsAndLeisure', component: () => import('pages/departments/SportsAndLeisurePage.vue') },
          { path: 'cultura-e-sustentabilidade', name: 'departmentsCultureAndSustainability', component: () => import('pages/departments/CultureAndSustainabilityPage.vue') },
          { path: 'aposentados-e-seguridade-social', name: 'departmentsRetireesAndSocialSecurity', component: () => import('pages/departments/RetireesAndSocialSecurityPage.vue') },
          { path: 'formacao', name: 'departmentsFormation', component: () => import('pages/departments/FormationPage.vue') },
          { path: 'financeiras-e-terceirizados-do-ramo-financeiro', name: 'departmentsFinancialInstitutionsAndOutsourcedFinancialSector', component: () => import('pages/departments/FinancialInstitutionsAndOutsourcedFinancialSectorPage.vue') }
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
