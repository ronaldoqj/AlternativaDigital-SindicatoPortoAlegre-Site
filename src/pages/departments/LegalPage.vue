<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import { useQuasar } from 'quasar'
import { shallowRef, reactive, computed, onMounted, watch } from 'vue'

import DocumentItem from './components/DocumentItem.vue'
// import IconDefault from 'components/interface/IconDefault.vue'
// import ImageDefault from 'components/interface/ImageDefault.vue'

import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'

// const state = reactive({
//   item: {
//     title: 'Clinica Odontológica update',
//     subject: 'Desconto de 25% em compras acima de R$ 150,00 update',
//     phone: '3325 5036 update',
//     mail: 'farmacia@donjoaoxii.com.br update',
//     socialMedia: ['facebook', 'instagram', 'twitter', 'whatsapp', 'youtube']
//   }
// })

// const props = {
//   title: 'Guia 2023',
//   description: 'Lorem ipsum dolor sit amet, consectetuer',
//   src: '/assets/svg/icon-xml.svg#icon_xml'
// }

const $q = useQuasar()
const freezeComponent = shallowRef(DocumentItem)
const state = reactive({
  documents: {
    items: {
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  }
})

const setListDocuments = () => {
  state.documents.items.listProp.push({ title: 'Guia 2023 1', description: 'Lorem ipsum dolor sit amet, consectetuer 1', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 2', description: 'Lorem ipsum dolor sit amet, consectetuer 2', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 3', description: 'Lorem ipsum dolor sit amet, consectetuer 3', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 4', description: 'Lorem ipsum dolor sit amet, consectetuer 4', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 5', description: 'Lorem ipsum dolor sit amet, consectetuer 5', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 6', description: 'Lorem ipsum dolor sit amet, consectetuer 6', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 7', description: 'Lorem ipsum dolor sit amet, consectetuer 7', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 8', description: 'Lorem ipsum dolor sit amet, consectetuer 8', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 9', description: 'Lorem ipsum dolor sit amet, consectetuer 9', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.documents.items.listProp.push({ title: 'Guia 2023 10', description: 'Lorem ipsum dolor sit amet, consectetuer 10', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
}

const currentScreenSize = computed((): TScreenSize => {
  return $q.screen.name
})

const changeOrderList = (screenSize: TScreenSize) => {
  let blockSize:number

  switch (screenSize) {
    case 'md':
      blockSize = 2
      break
    case 'lg':
      blockSize = 3
      break
    default:
      blockSize = 4
      break
  }

  state.documents.items.currentScreen = { screen: screenSize, blockSize }
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListDocuments()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__departments--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop src="/assets/image/tests/test-6.jpg" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <div id="content__page--departments-default-open">
        <TitleDefault class="q-mb-xl" title="Departamento Jurídico" />

        <div>
          <!-- <ImageDefault class="images__floats left" src="/assets/image/tests/test-1.jpg" /> -->
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
        </div>
      </div>
    </LayoutSection>

    <LayoutSection background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Documentos" />
      <!-- <DocumentItem title="Guia 2023" description="Lorem ipsum dolor sit amet, consectetuer" />
      <component :is="documentItem" v-bind="props"></component> -->
      <!-- <CarouselSlide :list="state.documents.listDocuments" :screen-block="state.documents.screenBlock"></CarouselSlide> -->
      <CarouselSlide v-if="state.documents.items.listProp.length" :listItems="state.documents.items" :component-item="freezeComponent" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <TitleDefault class="q-mb-xl" title="Publicações do departamento" />
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </LayoutSection>

    <LayoutSection background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Vídeos do departamento jurídico" />
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <TitleDefault class="q-mb-xl" title="Membros do departamento jurídico" />
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
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
