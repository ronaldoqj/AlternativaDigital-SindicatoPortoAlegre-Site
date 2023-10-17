<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useQuasar } from 'quasar'
import { reactive, computed, onMounted, watch, shallowRef } from 'vue'

import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import ExpandItem from 'src/pages/syndicate/components/notice/ExpandItem.vue'
import DocumentItem from 'src/pages/syndicate/components/notice/DocumentItem.vue'

const $q = useQuasar()
const freezeComponentDocument = shallowRef(DocumentItem)
const state = reactive({
  items: {
    currentScreen: {} as IDinamicScreen,
    listProp: [] as Array<object>
  } as IDinamicList
})

const setListStatute = () => {
  const item = {
    subtitle: 'Congresso Fetrafi-RS',
    title: 'Edital de convocação de congresso Estadual',
    src: '/assets/svg/icon-pdf.svg#icon_pdf',
    link: ''
  }
  const items = [item, item, item, item, item, item]
  const list = [
    { title: '2023', items, open: true },
    { title: '2024', items, open: false },
    { title: '2025', items, open: false },
    { title: '2026', items, open: false }
  ]

  state.items.listProp = list
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
        <TitleDefault class="q-mb-xl" title="Acordos e Convenções" />
        <ExpandItem
          v-for="(item, key) in (state.items.listProp)" :key="key"
          :listItems="item"
          :component-item="freezeComponentDocument"
        />

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
