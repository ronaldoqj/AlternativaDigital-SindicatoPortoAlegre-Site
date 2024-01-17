<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { arrayChunk, baseURL, carouselSettings } from 'src/helpers/helpers'
import _ from 'lodash'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useStructureStore } from 'src/stores/structure-store'
import { TStructureScreenSize } from 'src/types/IDefaults'
import CampaignService from 'src/services/CampaignService'
import { AxiosError } from 'axios'

interface ICarouselItem {
  src: string
  link: string
  target: string
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

const clickLink = (link:string, target:string) => {
  window.open(link, target)
}

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

const getData = (): void => {
  CampaignService.list({})
    // .then((response:IResponseRelated) => {
    .then((response:any) => {
      const item = { src: '', link: '', target: '' }
      response.data.forEach((element: any) => {
        item.src = `${baseURL}${element.image.path}/${element.image.file_name}`
        item.link = element.link
        item.target = element.target
        state.carousel.list.push(_.clone(item))
      })
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
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
              <q-img :ratio="1" class="carousel-item" :src="item.src" @click="clickLink(item.link, item.target)" />
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
