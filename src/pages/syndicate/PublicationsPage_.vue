<script setup lang="ts">
import { useQuasar } from 'quasar'
import { baseURL } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { reactive, computed, onMounted, watch } from 'vue'
// import { shallowRef } from 'vue'

import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
// import ExpandItem from 'src/pages/syndicate/components/notice/ExpandItem.vue'
import DocumentItem from 'src/pages/syndicate/components/notice/DocumentItem.vue'

interface IItemPublication {
  title: string
  subtitle: string
  src: string
  link: string
}

const $q = useQuasar()
// const freezeComponentDocument = shallowRef(DocumentItem)
const state = reactive({
  items: {
    currentScreen: {} as IDinamicScreen,
    listProp: [] as IItemPublication[]
  } as IDinamicList
})

const setListStatute = () => {
  const item: IItemPublication = {
    subtitle: 'Jornal - NOV 2023',
    title: 'O Bancário',
    src: '/assets/svg/icon-pdf.svg#icon_pdf',
    link: `${baseURL}temporary/documents/syndicate/publications/o-bancario-novembro-2023.pdf`
  }
  // state.items.listProp = [item, item, item, item, item, item]
  state.items.listProp = [item]
}

const currentScreenSize = computed((): TScreenSize => {
  return $q.screen.name
})

const changeOrderList = (screenSize: TScreenSize) => {
  let blockSizeDocument:number

  switch (screenSize) {
    case 'md':
      blockSizeDocument = 2
      blockSizeDocument = 2
      break
    case 'lg':
      blockSizeDocument = 3
      break
    default:
      blockSizeDocument = 4
      break
  }

  state.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListStatute()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__syndicate--notice" class="col">
    <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
      <div id="content__page--syndicate">
        <TitleDefault class="q-mb-xl" title="Publicações" />
        <!-- <ExpandItem
          v-for="(item, key) in (state.items.listProp)" :key="key"
          :listItems="item"
          :component-item="freezeComponentDocument"
        /> -->

        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-4" v-for="(item, key) in (state.items.listProp as IItemPublication[])" :key="key">
            <DocumentItem
              :title="item.title"
              :subtitle="item.subtitle"
              :src="item.src"
              :link="item.link"
            />
          </div>
        </div>

        <!-- <ExpandItem :listItems="state.items.listProp" :component-item="freezeComponentDocument" />
        <ExpandItem :listItems="state.items.listProp" :component-item="freezeComponentDocument" />
        <ExpandItem :listItems="state.items.listProp" :component-item="freezeComponentDocument" />
        <ExpandItem :listItems="state.items.listProp" :component-item="freezeComponentDocument" /> -->
      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">

.q-expansion-item {
  border-top-left-radius: 0 !important;
}

#page__syndicate--notice
{
  #content__page--syndicate
  {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
  }

  .header__expansion--item {
    font-weight: bold;
    font-size: 25px;
    border-top-left-radius: 0;
  }

  // @media only screen and (min-width: $breakpoint-sm)
  // {

  // }
}
</style>
