import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homeIndex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home/IndexPage.vue') },
      {
        path: 'o-sindicato',
        name: 'aboutIndex',
        component: () => import('pages/syndicate/IndexPage.vue'),
        children: [
          { path: 'quem-somos', name: 'about', component: () => import('pages/syndicate/AboutPage.vue') },
          { path: 'acordos-e-convencoes', name: 'agreementsConventions', component: () => import('pages/syndicate/AgreementConventionPage.vue') },
          { path: 'editais', name: 'notice', component: () => import('pages/syndicate/NoticePage.vue') },
          { path: 'publicacoes', name: 'publications', component: () => import('pages/syndicate/PublicationsPage.vue') },
          { path: 'estudio', name: 'studioRAO', component: () => import('pages/syndicate/StudioRaoPage.vue') }
          // { path: 'estudio-rao', name: 'studioRAO', component: () => import('pages/syndicate/StudioRaoPage.vue') }
        ]
      },
      { path: 'busca', name: 'search', component: () => import('pages/search/SearchPage.vue') },
      { path: 'noticias', name: 'allNews', component: () => import('pages/news/AllNewsPage.vue') },
      { path: 'noticia/:id/:title', name: 'news', component: () => import('pages/news/IndexPage.vue') },
      { path: 'artigo/:id/:title', name: 'article', component: () => import('pages/article/IndexPage.vue') },
      {
        path: 'agenda',
        name: 'agendaIndex',
        component: () => import('pages/agenda/IndexPage.vue'),
        children: [
          { path: ':id', name: 'agenda', component: () => import('pages/agenda/AgendaPage.vue') }
        ]
      },
      {
        path: 'servicos',
        name: 'servicesIndex',
        component: () => import('pages/services/IndexPage.vue'),
        children: [
          { path: '', name: 'services', component: () => import('pages/services/ServicesPage.vue') },
          { path: 'convenios', name: 'servicesInsurance', component: () => import('pages/services/InsurancePage.vue') },
          { path: 'arquivo-historico', name: 'servicesHistoryFile', component: () => import('pages/services/HistoryFilePage.vue') },
          { path: 'espacos', name: 'servicesSpaces', component: () => import('pages/services/SpacesPage.vue') },
          { path: 'juridico', name: 'servicesLegal', component: () => import('pages/services/LegalPage.vue') },
          { path: 'casa-dos-bancarios', name: 'bankersHouse', component: () => import('pages/services/BankersHousePage.vue') }
        ]
      },
      {
        path: 'departamentos',
        name: 'departmentsIndex',
        component: () => import('pages/departments/IndexPage.vue'),
        children: [
          { path: '', name: 'departments', component: () => import('pages/departments/DepartmentsPage.vue') },
          { path: 'juridico', name: 'departmentsLegal', component: () => import('pages/departments/LegalPage.vue') },
          { path: 'saude-e-condicoes-de-trabalho', name: 'saude', component: () => import('pages/departments/SaudePage.vue') },
          { path: 'juventude-e-genero', name: 'juventude', component: () => import('pages/departments/JuventudePage.vue') },
          { path: 'diversidade-e-combate-ao-racismo', name: 'diversidade', component: () => import('pages/departments/DiversidadePage.vue') },
          { path: 'esporte-e-lazer', name: 'esporte', component: () => import('pages/departments/EsportePage.vue') },
          { path: 'cultura-e-sustentabilidade', name: 'cultura', component: () => import('pages/departments/CulturaPage.vue') },
          { path: 'aposentados-e-seguridade-social', name: 'aposentados', component: () => import('pages/departments/AposentadosPage.vue') },
          { path: 'formacao', name: 'formacao', component: () => import('pages/departments/FormacaoPage.vue') },
          { path: 'financeiras-e-terceirizados-do-ramo-financeiro', name: 'financeiras', component: () => import('pages/departments/FinanceirasPage.vue') },
          { path: 'comunicacao', name: 'comunicacao', component: () => import('pages/departments/ComunicacaoPage.vue') }
          // { path: 'saude-e-condicoes-de-trabalho', name: 'departmentsHealthAndWorkingConditions', component: () => import('pages/departments/HealthAndWorkingConditionsPage.vue') },
          // { path: 'juventude-e-genero', name: 'departmentsYouthAndGender', component: () => import('pages/departments/YouthGenderPage.vue') },
          // { path: 'diversidade-e-combate-ao-racismo', name: 'departmentsDiversityAndCombatingRacism', component: () => import('pages/departments/DiversityAndCombatingRacismPage.vue') },
          // { path: 'esporte-e-lazer', name: 'departmentsSportsAndLeisure', component: () => import('pages/departments/SportsAndLeisurePage.vue') },
          // { path: 'cultura-e-sustentabilidade', name: 'departmentsCultureAndSustainability', component: () => import('pages/departments/CultureAndSustainabilityPage.vue') },
          // { path: 'aposentados-e-seguridade-social', name: 'departmentsRetireesAndSocialSecurity', component: () => import('pages/departments/RetireesAndSocialSecurityPage.vue') },
          // { path: 'formacao', name: 'departmentsFormation', component: () => import('pages/departments/FormationPage.vue') },
          // { path: 'financeiras-e-terceirizados-do-ramo-financeiro', name: 'departmentsFinancialInstitutionsAndOutsourcedFinancialSector', component: () => import('pages/departments/FinancialInstitutionsAndOutsourcedFinancialSectorPage.vue') }
        ]
      },
      {
        path: 'sindicalize-se',
        name: 'unionizeIndex',
        component: () => import('pages/unionize/IndexPage.vue'),
        children: [
          { path: '', name: 'unionize', component: () => import('pages/unionize/IntroductionPage.vue') },
          { path: 'formulario', name: 'unionizeForm', component: () => import('pages/unionize/UnionizePage.vue') },
          { path: 'encontrar-formulario', name: 'findForm', component: () => import('pages/unionize/FindFormPage.vue') },
          { path: 'enviar-arquivo/:cpf?', name: 'uploadFile', component: () => import('pages/unionize/UploadFilePage.vue') }
        ]
      },
      {
        path: 'contato',
        name: 'contactIndex',
        component: () => import('pages/contact/IndexPage.vue'),
        children: [
          { path: '', name: 'contact', component: () => import('pages/contact/ContactPage.vue') }
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
