<script setup lang="ts">
import { reactive, onMounted, computed, watch } from 'vue'
import { useStructureStore } from 'stores/structure-store'
import { baseURL, arrayChunk } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import { TStructureScreenSize } from 'src/types/IDefaults'

interface ICarouselItem {
  image: string
  title: string
  route: {
    name: string
  }
}

const state = reactive({
  carousel: {
    list: [] as ICarouselItem[],
    slide: 0
  }
})

const resetCarouselSlide = () => {
  state.carousel.slide = 0
}

const listItems = computed(() => {
  let list: ICarouselItem[][] = [[{} as ICarouselItem]]
  resetCarouselSlide()

  switch (structureStore.value) {
    case 'xs':
    case 'sm':
    case 'md':
      list = arrayChunk(state.carousel.list, 1)
      break
    case 'lg':
    case 'xl':
    default:
      list = arrayChunk(state.carousel.list, 2)
      break
  }

  return list
})

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

const getData = (): void => {
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/001_Juridico.png`, title: 'Jurídico', route: { name: 'departmentsLegal' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/002_Saude.png`, title: 'Saúde e condições de trabalho', route: { name: 'saude' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/003_Juventude.png`, title: 'Juventude e gênero', route: { name: 'juventude' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/004_Diversidade.png`, title: 'Diversidade e combate ao racismo', route: { name: 'diversidade' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/005_Esporte.png`, title: 'Esporte e lazer', route: { name: 'esporte' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/006_Cultura.png`, title: 'Cultura e sustentabilidade', route: { name: 'cultura' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/007_Aposentados.png`, title: 'Aposentados e seguridade social', route: { name: 'aposentados' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/008_Formacao.png`, title: 'Formação', route: { name: 'formacao' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/009_Financeiras.png`, title: 'Financeiras e terceirizados do ramo financeiro', route: { name: 'financeiras' } })
  state.carousel.list.push({ image: `${baseURL}temporary/images/departamentos/010_Comunicacao.jpg`, title: 'Comunicaçao', route: { name: 'comunicacao' } })
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Departamentos" color="primary" />
    <div v-if="!listItems.length">Loading</div>
    <div v-else class="section__departments--carousel">
      <q-carousel
        class="carousel-section"
        control-color="accent"
        swipeable
        animated
        v-model="state.carousel.slide"
        :autoplay="7000"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(items, key) in listItems" :key="key" :name="key" class="carousel--slide">
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-lg-6" v-for="(item, keyItem) in items" :key="keyItem">
              <CardButton :image="item.image" :title="item.title" :route="item.route" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
.section__departments--carousel
{
  .carousel--slide {
    /** put space to not cut shadow over effect */
    padding: 5px;
  }

  .carousel-section
  {
    /** extra down space to bullets controls */
    padding-bottom: 50px;
    /** Force carousel item height when necessary be dynamic height */
    height: inherit;

    background-color: transparent;
  }

  .q-carousel__navigation--buttons {
    bottom: 0;
  }
}
</style>
