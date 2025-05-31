<script setup lang="ts">
import { getValidImage } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import GenericPageService from 'src/services/GenericPageService'
import { AxiosError } from 'axios'
import { onMounted, reactive } from 'vue'
import { IGenericPage, IResponseGenericPage } from 'src/types/IGenericPage'

const state = reactive({
  list: [] as IGenericPage[],
  servicesMemberPortal: '',
  controlsPage: {
    loading: true
  }
})

const getRouteName = (id:number) => {
  let routeName:string

  switch (id) {
    case 11:
      routeName = 'bankersHouse'
      break
    case 12:
      routeName = 'servicesInsurance'
      break
    case 13:
      routeName = 'servicesHistoryFile'
      break
    case 14:
      routeName = state.servicesMemberPortal
      break
    case 15:
      routeName = 'servicesLegal'
      break

    default:
      routeName = ''
      break
  }
  return routeName
}

const getGenericPages = () => {
  GenericPageService.list({ withoutText: true, group_page: 'service' }).then((response:IResponseGenericPage) => {
    state.list = response.data as IGenericPage[]
    console.log('state.list = ', state.list)
  })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      state.controlsPage.loading = false
    })
}

const getServicePageLink = () => {
  GenericPageService.get({ id: 14 }).then((response: IResponseGenericPage) => {
    state.servicesMemberPortal = response.data.link as string
    console.log('state.genericpage = ', response.data.link)
  })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

onMounted(() => {
  getGenericPages()
  getServicePageLink()
})
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
  <div id="page__services" class="col">
      <TitleDefault title="Serviços" />
      <div id="content__page--service">
        <div class="row q-col-gutter-md">
          <!-- <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-5.jpg" title="Espaços" :route="{name: 'servicesSpaces'}" /></div> -->
          <!-- <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/casa-dos-bancarios.jpg`" title="Casa dos Bancários" :route="{name: 'bankersHouse'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/convenios.jpg`" title="Convênios" :route="{name: 'servicesInsurance'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/arquivo-historico.jpg`" title="Arquivo Histórico" :route="{name: 'servicesHistoryFile'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/portal-do-associado.jpg`" title="Portal do Associado" @click="openLink('https://portal.sindbancarios.org.br/')" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/juridico.jpg`" title="Jurídico" :route="{name: 'servicesLegal'}" /></div> -->

          <div class="col-xs-12 col-lg-6" v-for="(row, index) in state.list" :key="index">
            <CardButton :image="getValidImage(row.image)" :title="row.title" :route="{name: getRouteName(row.id as number)}" />
          </div>

          <q-inner-loading
            :showing="state.controlsPage.loading"
            label="Por favor espere..."
            label-class="text-primary"
            color="primary"
            label-style="font-size: 1.1em"
          />
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<style lang="scss">
#page__services
{
  #content__page--service {
    margin: 30px 0;
  }
}
</style>
