<script setup lang="ts">
import { shallowRef, reactive, computed, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import { baseURL, getValidImage } from 'src/helpers/helpers'
import { useRouter } from 'vue-router'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import DocumentItem from './components/DocumentItem.vue'
import MembersItem from './components/MembersItem.vue'
import NewsService from 'src/services/NewsService'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import { AxiosError } from 'axios'
import { INews, IResponseRelated } from 'src/types/INews'
import { IGenericPage, IResponseGenericPage } from 'src/types/IGenericPage'
import GenericPageService from 'src/services/GenericPageService'

interface IItemMember {
  title: string
  surname: string
  subtitle: string
  description: string
  image: string
}

const router = useRouter()
const $q = useQuasar()
const freezeComponentDocument = shallowRef(DocumentItem)
const state = reactive({
  department: {} as IGenericPage,
  documents: {
    items: {
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  legalMembers: {
    items: {
      screenBreak: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2',
      currentScreen: {} as IDinamicScreen,
      listProp: [] as IItemMember[]
    } as IDinamicList
  },
  departmentPublications: {
    items: {
      screenBreak: 'col-xs-12 col-sm-12 col-md-6 col-xl-4',
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  relatedDepartments: {
    departmentId: 1,
    limit: 6,
    list: [] as INews[]
  },
  controlsPage: {
    loading: true
  }
})

const setListDocuments = () => {
  state.documents.items.listProp.push({ title: 'Agiplan', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/AGIPLAN-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Banrisul', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BANRISUL-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Bradesco', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BRADESCO-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'BRDE', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BRDE-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'CEF', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/CEF-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Hsbc', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/HSBC-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Itaú', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/ITAU-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'NBC', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/NBC-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Renner', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/RENNER-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Safra', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/SAFRA-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Santander', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/SANTANDER-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Banco do Brasil', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BANCO-DO-BRASIL-RELATORIO_ACOES_COLETIVAS.pdf` })
}

const setListLegalMembers = () => {
  state.legalMembers.items.listProp.push({ title: 'Priscila', surname: 'Aguirres', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/008_JURIDICO-Priscila.jpg` })
  state.legalMembers.items.listProp.push({ title: 'Jonas', surname: 'Castilhos', subtitle: 'Jurídico', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/008_JURIDICO-Jonas.jpg` })
  state.legalMembers.items.listProp.push({ title: 'Ricardo', surname: 'Stumpf', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/008_JURIDICO-Ricardo.jpg` })
}

const setDepartmentPublications = () => {
  const limitImages = 7
  let countImages = 0

  for (let index = 0; index < 16; index++) {
    if (countImages === limitImages) {
      countImages = 0
    }
    countImages += 1

    const title = 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú'
    const description = 'Assembleia Legislativa'

    state.departmentPublications.items.listProp.push({ subject: `Subject ${index}`, title: `${title} ${index}`, description: `${description} ${index}` })
  }
}

const currentScreenSize = computed((): TScreenSize => {
  return $q.screen.name
})

const changeOrderList = (screenSize: TScreenSize) => {
  let blockSizeDocument:number
  let blockSizeDepartmentPublications:number

  switch (screenSize) {
    case 'md':
      blockSizeDocument = 2
      blockSizeDepartmentPublications = 6
      blockSizeDocument = 2
      break
    case 'lg':
      blockSizeDocument = 3
      blockSizeDepartmentPublications = 6
      break
    default:
      blockSizeDocument = 4
      blockSizeDepartmentPublications = 9
      break
  }

  state.documents.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
  state.departmentPublications.items.currentScreen = { screen: screenSize, blockSize: blockSizeDepartmentPublications }
  state.legalMembers.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
}

const getRelatedDepartments = () => {
  NewsService.relatedDepartment({ department_id: state.relatedDepartments.departmentId, limit: state.relatedDepartments.limit })
    .then((response:IResponseRelated) => {
      state.relatedDepartments.list = response.data
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const getGenericPage = (id:number) => {
  GenericPageService.get({ id })
    .then((response:IResponseGenericPage) => {
      state.department = response.data as IGenericPage
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      state.controlsPage.loading = false
    })
}

const clickButton = () => {
  router.push({ name: 'servicesLegal' })
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  getGenericPage(1)
  setListDocuments()
  setDepartmentPublications()
  setListLegalMembers()
  changeOrderList(currentScreenSize.value)
  getRelatedDepartments()
})
</script>

<template>
  <div id="page__departments--default-open" class="col">

    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="getValidImage(state.department.image)" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <div id="content__page--departments-default-open">
        <TitleDefault class="q-mb-xl" :title="state.department.title as string" />
        <div>
          <div class="content" v-html="state.department.text"></div>
          <div class="box__btn--more q-mt-xl q-mb-lg">
            <ButtonDefault
              rounded
              unradiusTopLeft
              noCaps
              title="Veja os serviços jurídicos disponíveis"
              color="primary"
              :size="{maxWidth: '400px'}"
              style="flex:max-content;"
              @click="clickButton()"
            />
          </div>
        </div>
      </div>
      <q-inner-loading
        :showing="state.controlsPage.loading"
        label="Por favor espere..."
        label-class="text-primary"
        color="primary"
        label-style="font-size: 1.1em"
      />
    </LayoutSection>

    <LayoutSection background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Documentos para processos" />
      <!-- <DocumentItem title="Guia 2023" description="Lorem ipsum dolor sit amet, consectetuer" />
      <component :is="documentItem" v-bind="props"></component> -->
      <!-- <CarouselSlide :list="state.documents.listDocuments" :screen-block="state.documents.screenBlock"></CarouselSlide> -->
      <CarouselSlide v-if="state.documents.items.listProp.length" :listItems="state.documents.items" :component-item="freezeComponentDocument" item-class="departments__legal--document-item" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <RelatedPublications v-if="state.relatedDepartments.list.length" :list="state.relatedDepartments.list" />
      <div v-else>
        <TitleDefault title="Publicações Relacionadas" />
        <TitleDefault class="q-my-xl" title="Nenhuma publicação relacionada encontrada" only-text />
      </div>
      <!-- <CarouselSlide v-if="state.departmentPublications.items.listProp.length" :listItems="state.departmentPublications.items" :items-screen-break="state.departmentPublications.items.screenBreak" :component-item="freezeComponentDepartmentPublications" item-class="" /> -->
    </LayoutSection>

    <!-- <LayoutSection background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Vídeos do departamento jurídico" />
      <SectionVideos />
    </LayoutSection> -->

    <LayoutSection background="quaternary" cornerColor="secondary">
      <TitleDefault class="q-mb-xl" title="Membros por equipe" />
      <!-- <p class="subtitle__legal-members">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
        facilisi.
      </p> -->
      <!-- <CarouselSlide v-if="state.legalMembers.items.listProp.length" :listItems="state.legalMembers.items" :component-item="freezeComponentMembersItem" /> -->

      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(member, key) in (state.legalMembers.items.listProp as IItemMember[])" :key="key">
          <MembersItem :title="member.title" :surname="member.surname" :subtitle="member.subtitle" :description="member.description" :image="member.image" background-color="tertiary" />
        </div>
      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__departments--default-open
{
  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  #content__page--departments-default-open
  {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 5px 0;
      font-size: 25px;
      font-weight: bold;
      line-height: 1.2em;
      color: $accent;
    }

    p {
      text-align: justify;
    }

    .space__between {
      margin: 10px 0;
      clear: both;
    }
  }

  .subtitle__legal-members {
    margin: -50px 0 30px;
  }

  @media only screen and (min-width: $breakpoint-sm)
  {
    .images__floats
    {
      width: 400px;

      &.left {
        float: left;
        margin-right: 10px;
      }

      &.right {
        float: right;
        margin-left: 10px;
      }
    }
  }
}
</style>
