<script setup lang="ts">
import { shallowRef, reactive, computed, onMounted, watch } from 'vue'
import { AxiosError } from 'axios'
import { useQuasar } from 'quasar'
import { baseURL, getValidImage } from 'src/helpers/helpers'
import DepartmentService from 'src/services/GenericPageService'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import DocumentItem from './components/DocumentItem.vue'
import MembersItem from './components/MembersItem.vue'
import NewsService from 'src/services/NewsService'
import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import { INews, IResponseRelated } from 'src/types/INews'
import { IGenericPage, IResponseGenericPage } from 'src/types/IGenericPage'

interface IItemMember {
  title: string
  surname: string
  subtitle: string
  description: string
  image: string
}

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
    departmentId: 3,
    limit: 6,
    list: [] as INews[]
  },
  controlsPage: {
    loading: true
  }
})

const setListDocuments = () => {
  state.documents.items.listProp.push({ title: 'Guia 2023 1', description: 'Lorem ipsum dolor sit amet, consectetuer 1', src: '/assets/svg/icon-xml.svg#icon_xml' })
  state.documents.items.listProp.push({ title: 'Guia 2023 2', description: 'Lorem ipsum dolor sit amet, consectetuer 2', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 3', description: 'Lorem ipsum dolor sit amet, consectetuer 3', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 4', description: 'Lorem ipsum dolor sit amet, consectetuer 4', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 5', description: 'Lorem ipsum dolor sit amet, consectetuer 5', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 6', description: 'Lorem ipsum dolor sit amet, consectetuer 6', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 7', description: 'Lorem ipsum dolor sit amet, consectetuer 7', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 8', description: 'Lorem ipsum dolor sit amet, consectetuer 8', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 9', description: 'Lorem ipsum dolor sit amet, consectetuer 9', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 10', description: 'Lorem ipsum dolor sit amet, consectetuer 10', src: '/assets/svg/icon-xml.svg#icon_xml' })
}

const setListLegalMembers = () => {
  state.legalMembers.items.listProp.push({ title: 'Claudia Stella', surname: 'Rodrigues Santana de Resende', subtitle: 'Juventude e Gênero', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/009_JUVENTUDE_GENERO-Claudia.jpg` })
  state.legalMembers.items.listProp.push({ title: 'Bianca', surname: 'Garbelini', subtitle: 'Juventude e Gênero', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/009_JUVENTUDE_GENERO-Bianca.jpg` })
  state.legalMembers.items.listProp.push({ title: 'Fernanda', surname: 'Umsza', subtitle: 'Juventude e Gênero', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/009_JUVENTUDE_GENERO-Fernanda.jpg` })
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
  DepartmentService.get({ id })
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

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  getGenericPage(3)
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
        <div class="content" v-html="state.department.text"></div>
      </div>
      <q-inner-loading
        :showing="state.controlsPage.loading"
        label="Por favor espere..."
        label-class="text-primary"
        color="primary"
        label-style="font-size: 1.1em"
      />
    </LayoutSection>

    <LayoutSection v-if="false" background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Documentos" />
      <CarouselSlide v-if="state.documents.items.listProp.length" :listItems="state.documents.items" :component-item="freezeComponentDocument" item-class="departments__legal--document-item" />
    </LayoutSection>

    <!-- <LayoutSection background="tertiary" cornerColor="quaternary"> -->
    <LayoutSection background="quaternary" cornerColor="tertiary">
      <RelatedPublications v-if="state.relatedDepartments.list.length" :list="state.relatedDepartments.list" />
      <div v-else>
        <TitleDefault title="Publicações Relacionadas" />
        <TitleDefault class="q-my-xl" title="Nenhuma publicação relacionada encontrada" only-text />
      </div>
    </LayoutSection>

    <!-- <LayoutSection background="quaternary" cornerColor="secondary"> -->
    <LayoutSection background="tertiary" cornerColor="secondary">
      <TitleDefault class="q-mb-xl" title="Membros por equipe" />
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(member, key) in (state.legalMembers.items.listProp as IItemMember[])" :key="key">
          <MembersItem :title="member.title" :surname="member.surname" :subtitle="member.subtitle" :description="member.description" :image="member.image" />
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
