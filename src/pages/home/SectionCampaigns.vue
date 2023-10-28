<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { arrayChunk, baseURL, carouselSettings } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useStructureStore } from 'src/stores/structure-store'
import { TStructureScreenSize } from 'src/types/IDefaults'

interface ICarouselItem {
  src: string
  link: string
}

const state = reactive({
  carousel: {
    list: [] as ICarouselItem[],
    slide: 0,
    autoPlay: carouselSettings.autoPlay
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
    case 'md':
    case 'lg':
      list = arrayChunk(state.carousel.list, 3)
      break
    case 'sm':
    case 'xl':
    default:
      list = arrayChunk(state.carousel.list, 4)
      break
  }

  return list
})

const clickLink = (link:string) => {
  window.open(link, '_blank')
}

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

const getData = (): void => {
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/001_saude_mental.jpg`, link: 'https://www.instagram.com/p/CyN69NXv-pu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/002_energia_bancaria.jpg`, link: 'https://www.instagram.com/p/CyJ2CABMe6s/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/003_outubro_rosa.jpg`, link: 'https://www.instagram.com/p/Cx2-NzfObt_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/004_doacao_sangue.jpg`, link: 'https://www.instagram.com/p/CxYOebMuB_E/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/005_basta.jpg`, link: 'https://www.instagram.com/p/CyOL-YCOEop/?utm_source=ig_web_copy_link' })
  state.carousel.list.push({ src: `${baseURL}temporary/images/home/campaigns/006_banrisul.jpg`, link: 'https://www.instagram.com/p/CxFtywQtiWZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Campanhas" color="primary" />
    <div v-if="!state.carousel.list.length">Loading</div>
    <div v-else class="section__services--carousel">
      <q-carousel
        class="carousel-section"
        control-color="accent"
        swipeable
        animated
        v-model="state.carousel.slide"
        :autoplay="state.carousel.autoPlay"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(items, key) in listItems" :key="key" :name="key" class="carousel--slide">
          <div class="row q-col-gutter-sm justify-center">
            <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3 text-center" v-for="(item, keyItem) in items" :key="keyItem">
              <q-img :ratio="1" class="carousel-item" :src="item.src" @click="clickLink(item.link)" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
.section__services--carousel
{
  $border-radius-control-banner: 20px;
  $max-width: 450px;
  $padding-bottom: 50px;

  .carousel--slide {
    /** put space to not cut shadow over effect */
    padding: 5px;
  }

  .carousel-section
  {
    /** extra down space to bullets controls */
    padding-bottom: $padding-bottom;
    /** Force carousel item height when necessary be dynamic height */
    height: inherit;

    background-color: transparent;
  }

  .q-carousel__navigation--buttons {
    bottom: 0;
  }

  .carousel-item {
    border-radius: $border-radius-control-banner;
    max-width: $max-width;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover
    {
      box-shadow: 2px 2px 1px 1px;
    }
  }
}
</style>
