<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import { reactive, onMounted, computed } from 'vue'
import { defaultImage } from 'src/helpers/helpers'

const props = defineProps({
  title: {
    type: String,
    require: false
  }
})

interface IPublicationItem {
  id: number
  image: string
  subject: string
  title: string
  description: string
}

const state = reactive({
  title: 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú',
  relatedPublicationData: [] as Array<IPublicationItem>
})

const resolveTitle = computed((): string => {
  return props.title ? props.title : 'Publicações relacionadas'
})

const getData = (): void => {
  for (let index = 1; index < 7; index++) {
    const item: IPublicationItem = {
      id: index,
      image: defaultImage,
      subject: 'Assembleia Legislativa',
      title: 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú',
      description: 'Cerca de dois meses após ser anunciado como futuro presidente do Banrisul pelo governador Eduar Leite, o nome de Fulano Beltrano Ciclano finalmente foi pautado na Comissão de Finanças da Assembleia Legislativa...'
    }

    state.relatedPublicationData.push(item)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="q-mt-xl q-pt-xl">
    <TitleDefault :title="resolveTitle" />
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm" v-for="(item, key) in state.relatedPublicationData" :key="key">
        <NewsItem :subject="item.subject" :title="item.subject" :description="item.description" :src="item.image" />
      </div>
    </div>
  </div>
</template>
