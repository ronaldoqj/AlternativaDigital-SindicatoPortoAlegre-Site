<script setup lang="ts">
import { reactive, computed, onMounted, watch, shallowRef } from 'vue'
import { useQuasar } from 'quasar'
import { baseURL } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'

import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import ExpandItem from 'src/pages/syndicate/components/notice/ExpandItem.vue'
import DocumentItem from 'src/pages/syndicate/components/notice/DocumentItem.vue'
import AgreementConventionService from 'src/services/AgreementConventionService'
import { AxiosError } from 'axios'

const $q = useQuasar()
const freezeComponentDocument = shallowRef(DocumentItem)
const state = reactive({
  items: {
    currentScreen: {} as IDinamicScreen,
    listProp: [] as Array<object>
  } as IDinamicList
})

// const setListStatute = () => {
//   // const item = {
//   //   subtitle: 'Congresso Fetrafi-RS',
//   //   title: 'Edital de convocação de congresso Estadual',
//   //   src: '/assets/svg/icon-pdf.svg#icon_pdf',
//   //   link: ''
//   // }
//   const items2022 = [
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2022_-_2024/005-fenaban-cct-gratificacao-de-funcao-2022-2024_compressed.pdf`, title: 'Fenaban CCT 2022-2024' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2022_-_2024/002fenaban_-_cct_plr_2022-2023-20220921_133021-215617_compressed-1.pdf`, title: 'Fenaban CCT - Participação dos Empregados nos Lucros ou Resultados dos Bancos / Exercícios 2022 e 2023' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2022_-_2024/003-1.22.-CCT-Aditiva-Regional-Rio-Grande-do-Sul-1-3.pdf`, title: 'Fenaban CCT aditiva Regional - RS e SC' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2022_-_2024/004-fenaban-cct-aditiva-2022-2024_compressed.pdf`, title: 'Fenaban CCT Aditiva 2022 - 2024' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2022_-_2024/001fenaban_-_cct_geral.pdf`, title: 'Fenaban CCT 2022-20224 - Gratificação de Função' }
//   ]
//   const items2020 = [
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/001_-_ACT-Teletrabalho-BRDE-11-2021.pdf`, title: 'ACT Teletrabalho BRDE' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/002_-_ACT_Banrisul_2020-2022.pdf`, title: 'cordo Coletivo de Trabalho Banrisul 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/003_-_CCT_-Aditiva_ERS_2020.pdf`, title: 'Aditivo Rio Grande do Sul 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/004_-_ACT-Controle-Eletronico-de-Jornada-Banrisul.pdf`, title: 'ACT Ponto Eletrônico Banrisul' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/005_-_ACT-TeletrabalhoBanrisul.pdf`, title: 'ACT Teletrabalho Banrisul' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/006_-_11-cct-data-base-003.pdf`, title: 'Fenaban - CCT 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/007_-_13-cct-plr`, title: 'CCT - PLR - 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/008_-_act-bb-2020-2022-assinada.pdf`, title: 'ACT BB 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/009_-_act-plr-bb-2020-2021-assinado.pdf`, title: 'PLR BB 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/010_-_ACT-Geral-Caixa-versao-final.pdf`, title: 'ACT Caixa 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/011_-_ACT-PLR-Caixa-versao-final.pdf`, title: 'PLR Caixa 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/012_-_CCT-Financeiras-2020-2022c.pdf`, title: 'CCT Financeiras RS 2020 - 2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/013_-_act-teletrabalho-bradesco.pdf`, title: 'ACT Teletrabalho Bradesco' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/014_-_ACT-BRDE-2020-2022-POA-FLO-CUR.pdf`, title: 'ACT BRDE 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/015_-_ACT_Badesul_2020.pdf`, title: 'ACT Badesul 2020' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/016_-_CCT_Data_base_2020_2022.pdf`, title: 'ACT Data Base 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/017_-_cct-financiarios-2020-2022.pdf`, title: 'CCT Fenacrefi 2020-2022' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/2020_-_2022/018_-_cct-prl-financiarios-2020-2021.pdf`, title: 'CCT - PLR Fenacrefi 2020-2022' }
//   ]
//   const fenaban = [
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/001_-_acodo-aditivo-rs-bancarios-2018-2020.pdf`, title: 'Aditivo Rio Grande do Sul 2018-2020' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/002_-_CCT-Bancarios-2018-2020.pdf.pdf`, title: 'Fenaban - CCT 2018-2020' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/003_-_PLR-2018-2019.pdf.pdf`, title: 'CCT - PLR - 2018-2020' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/004_-_cct_FENABAN_2016_2018_red.pdf`, title: 'Fenaban - CCT 2016-2018' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/005_-_FENABAN_CCT.pdf`, title: 'Fenaban - CCT 2013' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/006_-_FENABAN_PLR.pdf`, title: 'Fenaban - PLR 2013' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/007_-_cctfenaban20122013.pdf`, title: 'Fenaban - CCT 2012/2013' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/008_-_cctfenaban20122013.pdf`, title: 'Fenaban - PLR 2012/ 2013' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/009_-_Aditivo-RS-2014.pdf`, title: 'Aditivo RS 2014/2015' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/010_-_aditivo_aditivo_rs_2013_2014.pdf`, title: 'Aditivo RS - 2013/2014' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/fenaban/011_-_plr20102011.pdf`, title: 'Aditivo do RS - 2012/2013' }
//   ]
//   const badesul = [
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/001_-_ACT-aditivo-2018-2019-Badesul-compressed.pdf`, title: 'ACT 2018 - 2019' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/002_-_ACT-aditivo-2016-2018-Badesul-compressed.pdf`, title: 'ACT 2016 - 2018' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/003_-_acordo2016_1.pdf`, title: 'Badesul - Acordo Coletivo de Trabalho - 2016-2018' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/004_-_AcordoColetivodeTrabalho_Badesul_20142015.pdf`, title: 'Badesul - Acordo Coletivo de Trabalho - 2014/2015' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/005_-_AcordoColetivodeTrabalho_Badesul_20132014.pdf`, title: 'Badesul - Acordo Coletivo de Trabalho - 2013/2014' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/badesul/006_-_acordocoletivobadesul201120121.pdf`, title: 'Badesul - Convenção Coletiva Aditiva 2011/2012' }
//   ]
//   const bancoDaProvincia = [
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/banco_da_provincia/001_-_CCT_Cia_Provincia_2012_2013.pdf`, title: 'Cia Província de Crédito Imobiliário - Convenção Coletiva de Trabalho 2012/2013' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/banco_da_provincia/002_-_CCT_Cia_Provincia_2011_2012.pdf`, title: 'Cia Província de Crédito Imobiliário - Convenção Coletiva de Trabalho 2011/2012' },
//     { subtitle: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreements/banco_da_provincia/003_-_CCT_CIA_PROVINCIA_2010_2011.pdf`, title: 'Província de Crédito - Convenção Coletiva de Trabalho 2010/2011' }
//   ]
//   const list = [
//     { title: '2022 - 2024', open: true, items: items2022 },
//     { title: '2020 - 2022', open: false, items: items2020 },
//     { title: 'FENABAN', open: false, items: fenaban },
//     { title: 'BADESUL', open: false, items: badesul },
//     { title: 'BANCO DA PROVÍNCIA', open: false, items: bancoDaProvincia }
//   ]

//   // const items = [item, item, item, item, item, item]
//   // const list = [
//   //   { title: '2022 - 2024', open: true, items: [{ subtitle: '', title: '', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/agreement/file.pdf` }] },
//   //   { title: '2020 - 2022', open: false, items },
//   //   { title: 'FENABAN', open: false, items },
//   //   { title: 'BADESUL', open: false, items },
//   //   { title: 'BANCO DA PROVÍNCIA', open: false, items }
//   // ]

//   state.items.listProp = list
// }

interface IList {
  id: number
  title: string
  open: boolean
  items: Array<any>
  // items: {
  //   subtitle: string
  //   src: string
  //   link: string
  //   title: string
  // }
}

const getNewItemList = (data: any) => {
  const newItem = {
    id: data.category_id,
    title: data.category.name,
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
  console.log('list', list)
  return list
}

const getData = (): void => {
  AgreementConventionService.list({ })
    // .then((response:IResponseRelated) => {
    .then((response:any) => {
      state.items.listProp = groupResponse(response.data)
      console.log('listAgreementConvention', response.data)
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
