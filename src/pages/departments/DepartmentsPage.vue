<script setup lang="ts">
import { getValidImage } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import { onMounted, reactive } from 'vue'
import GenericPageService from 'src/services/GenericPageService'
import { AxiosError } from 'axios'
import { IGenericPage, IResponseGenericPage } from 'src/types/IGenericPage'

const state = reactive({
  list: [] as IGenericPage[],
  controlsPage: {
    loading: true
  }
})

const getGenericPages = () => {
  GenericPageService.list({ withoutText: true, group_page: 'department' }).then((response:IResponseGenericPage) => {
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

const getRouteName = (id:number) => {
  let routeName:string

  switch (id) {
    case 1:
      routeName = 'departmentsLegal'
      break
    case 2:
      routeName = 'saude'
      break
    case 3:
      routeName = 'juventude'
      break
    case 4:
      routeName = 'diversidade'
      break
    case 5:
      routeName = 'esporte'
      break
    case 6:
      routeName = 'cultura'
      break
    case 7:
      routeName = 'aposentados'
      break
    case 8:
      routeName = 'formacao'
      break
    case 9:
      routeName = 'financeiras'
      break
    case 10:
      routeName = 'comunicacao'
      break
    default:
      routeName = ''
      break
  }
  return routeName
}

onMounted(() => {
  getGenericPages()
})
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
  <div id="page__departments" class="col">
      <TitleDefault title="Departamentos" />
      <div id="content__page--department">
        <div class="row q-col-gutter-md">

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
#page__departments
{
  #content__page--department {
    margin: 30px 0;
  }
}
</style>
