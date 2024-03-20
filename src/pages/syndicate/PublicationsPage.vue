<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useQuasar } from 'quasar'
import { baseURL } from 'src/helpers/helpers'
import { reactive, computed, onMounted, watch, shallowRef } from 'vue'

import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import ExpandItem from 'src/pages/syndicate/components/publication/ExpandItem.vue'
import DocumentItem from 'src/pages/syndicate/components/publication/DocumentItem.vue'
import PublicationService from 'src/services/PublicationService'
import { AxiosError } from 'axios'

interface IList {
  id: number
  title: string
  open: boolean
  items: Array<any>
}

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

const getNewItemList = (data: any) => {
  const newItem = {
    id: data.category_id,
    title: data.categories.name,
    open: false,
    items: []
  } as IList
  return newItem
}

const groupResponse = (data:Array<any>) => {
  const list:IList[] = []

  data.forEach((element:any) => {
    const idExists = list.some(item => item.id === element.category_id)

    if (!idExists) {
      list.push(getNewItemList(element))
    }

    const index = list.findIndex(item => item.id === element.category_id)
    list[index].items.push({
      subtitle: element.file.description,
      link: `${baseURL}${element.file.path}/${element.file.file_name}`,
      title: element.file.name
    })
  })

  if (list.length) {
    list[0].open = true
  }

  return list
}

const getData = (): void => {
  PublicationService.list({ })
    // .then((response:IResponseRelated) => {
    .then((response:any) => {
      state.items.listProp = groupResponse(response.data)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
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
  getData()
  // setListStatute()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__syndicate--publication" class="col">
    <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
      <div id="content__page--publication">
        <TitleDefault class="q-mb-xl" title="Publicações" />
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

#page__syndicate--publication
{
  #content__page--publication
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
