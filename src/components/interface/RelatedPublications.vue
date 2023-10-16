<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import { reactive, onMounted, computed } from 'vue'
import { getValidImage, defaultImage, convertURL } from 'src/helpers/helpers'

const props = defineProps({
  title: {
    type: String,
    require: false
  },
  list: {
    type: Array,
    require: true
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
  console.log('List of RelatedPublications', props.list)
})
</script>

<template>
  <div class="q-mt-xl">
    <TitleDefault :title="resolveTitle" />
    <div class="row q-my-sm q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-lg-4" v-for="(row, key) in (props.list as any)" :key="key">
        <NewsItem
          :src="getValidImage(row, 'imageNews')"
          :subject="row.subject"
          :title="row.title"
          :route="convertURL(row.id, row.title)"
          :description="row.description"
        />
      </div>
    </div>
  </div>
</template>
