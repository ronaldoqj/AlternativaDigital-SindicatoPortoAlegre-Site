<script setup lang="ts">
import { baseURL } from 'src/helpers/helpers'
import { useQuasar } from 'quasar'
import { computed, onMounted, reactive, watch } from 'vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import SectionVideos from 'src/pages/departments/components/legal/SectionVideos.vue'
import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'

interface IItemMember {
  title: string
  surname: string
  subtitle: string
  description: string
  image: string
}

const $q = useQuasar()
const state = reactive({
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
  state.legalMembers.items.listProp.push({ title: 'Ronaldo', surname: 'Zeni', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: '/assets/image/apresentation/quem-somos/directorship/011.jpg' })
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

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListDocuments()
  setDepartmentPublications()
  setListLegalMembers()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__syndicate--studio-rao" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="`${baseURL}temporary/images/quem-somos/estudio-rao/BANNERS_MODELO.jpg`" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <div class="section-1">
        <TitleDefault class="q-mb-xl" title="Estúdio RAO" />
        <div>
          <p>
            Conectada aos novos formatos e linguagens, a sala de estúdio complementa os demais canais de comunicação do Sindicato dos Bancários, que em outras épocas chegou a abrigar uma gráfica própria. Com o investimento em tecnologia, o Sindicato busca acompanhar os novos tempos e ampliar o diálogo com seus sócios e sócias e demais profissionais da categoria bancária.
          </p>
          <p>
            A estreia do estúdio ocorre no mês em que o SindBancários completa 90 anos de história, em um evento de inauguração para convidados, às 17h, na Casa dos Bancários. Além de gravação ao vivo com participações especiais, a atividade terá um coquetel com a presença de autoridades, sindicalistas, sindicatos e profissionais de comunicação que se identificam com o Sindicato.
          </p>
        </div>
      </div>
      <div class="row q-col-gutter-sm q-my-xl">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-img :ratio="1" class="content-item" :src="`${baseURL}temporary/images/quem-somos/estudio-rao/imagem_001.jpg`" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-img :ratio="1" class="content-item" :src="`${baseURL}temporary/images/quem-somos/estudio-rao/imagem_002.jpg`" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-img :ratio="1" class="content-item" :src="`${baseURL}temporary/images/quem-somos/estudio-rao/imagem_003.jpg`" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-img :ratio="1" class="content-item" :src="`${baseURL}temporary/images/quem-somos/estudio-rao/BANNERS_MODELO.jpg`" />
        </div>
      </div>
    </LayoutSection>

    <LayoutSection v-if="false" background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Vídeos do estúdio RAO" />
      <SectionVideos />
    </LayoutSection>

    <!-- <LayoutSection background="tertiary" cornerColor="secondary"> -->
    <LayoutSection background="quaternary" cornerColor="secondary">
      <div class="q-my-xl"></div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">

#page__syndicate--studio-rao
{
  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  .section-1
  {
    margin-bottom: 30px;

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

  .content-item {
    border-radius: 25px;
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
