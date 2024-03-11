<script setup lang="ts">
import { reactive, computed, onMounted, PropType } from 'vue'
import { baseURL, arrayChunk, carouselSettings } from 'src/helpers/helpers'
import _ from 'lodash'
import IconDefault from 'components/interface/IconDefault.vue'
import VideoDefault from 'src/components/interface/VideoDefault.vue'
import CardVideoThumb from 'components/interface/CardVideoThumb.vue'
import { TStructureScreenSize } from 'src/types/IDefaults'
import { useStructureStore } from 'src/stores/structure-store'
import VideoService from 'src/services/VideoService'
import { type TSectionVideoColor } from 'components/models/interfaces/InterfacesDefault'
import { AxiosError } from 'axios'

const props = defineProps({
  page: {
    type: Number,
    required: false
  },
  color: {
    type: String as PropType<TSectionVideoColor>,
    required: false
  }
})

interface ICarouselItem {
  id: number
  image: string
  title: string
  video: string
}

interface IItemList {
  first: ICarouselItem
  second: ICarouselItem[]
}

const state = reactive({
  dialog: {
    fullWidth: false,
    video: '',
    title: ''
  },
  carousel: {
    list: [] as Array<ICarouselItem>,
    slide: 0,
    autoPlay: carouselSettings.autoPlay
  }
})

const colorCarousel = computed((): string => {
  return props.color ?? 'tertiary'
})

const showCarousel = computed((): boolean => {
  return !!state.carousel.list.length
})

const listItems = computed(() => {
  let list: ICarouselItem[][] = [[{} as ICarouselItem]]
  const listReturn: IItemList[] = []
  resetCarouselSlide()

  switch (structureStore.value) {
    case 'sm':
    case 'md':
      list = arrayChunk(state.carousel.list, 3)
      break
    case 'lg':
    case 'xs':
    case 'xl':
    default:
      list = arrayChunk(state.carousel.list, 5)
      break
  }

  list.forEach((item: ICarouselItem[]) => {
    const buildItem = { first: {}, second: [] as ICarouselItem[] }
    item.forEach((carouselItem, index) => {
      if (index === 0) {
        buildItem.first = carouselItem
      } else {
        buildItem.second.push(carouselItem)
      }
    })

    listReturn.push(buildItem as IItemList)
  })

  return listReturn
})

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

const resolveSrc = (src:string) => {
  let returnUrl = ''
  if (src.length) {
    const url = src
    const lastSlashIndex = url.lastIndexOf('/')
    const textAfterLastSlash = url.substring(lastSlashIndex + 1)
    returnUrl = `https://www.youtube.com/embed/${textAfterLastSlash}`
  }
  return returnUrl
}

const openVideo = (item:ICarouselItem) => {
  state.dialog.title = item.title
  state.dialog.video = resolveSrc(item.video)
  state.dialog.fullWidth = true
}

const resetCarouselSlide = () => {
  state.carousel.slide = 0
}

const getData = (): void => {
  VideoService.list({ page: props.page })
    // .then((response:IResponseRelated) => {
    .then((response:any) => {
      // state.relatedDepartments.list = response.data
      const item = { id: 0, image: '', title: '', video: '' }
      response.data.forEach((element: any) => {
        //
        item.id = element.id
        item.image = `${baseURL}${element.image.path}/${element.image.file_name}`
        item.title = element.title
        item.video = element.video
        state.carousel.list.push(_.clone(item))
      })
      console.log('listVideos', response.data)
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
    <div v-if="!showCarousel">Loading</div>
    <div v-else class="component__videos--carousel">
      <q-carousel
        class="carousel-section"
        :control-color="colorCarousel"
        swipeable
        animated
        v-model="state.carousel.slide"
        :autoplay="state.carousel.autoPlay"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(news, key) in listItems" :key="key" :name="key" class="carousel--slide">
          <div class="row q-col-gutter-sm" :ratio="16/9">
            <div class="col-xs-12 col-md-8 col-lg-6">
              <CardVideoThumb :src="news.first.image" @click="openVideo(news.first)" :icon-size="90" icon-view-box="0 0 90 100" />
            </div>
            <div class="col-xs-12 col-md-4 col-lg-6">
              <div class="row q-col-gutter-xs">
                <div class="col-xs-6 col-md-12 col-lg-6" v-for="(item, key2) in news.second" :key="key2">
                  <CardVideoThumb :src="item.image" @click="openVideo(item)" :icon-size="90" icon-view-box="0 0 90 100" />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-dialog
      v-model="state.dialog.fullWidth"
      full-width
      class="component__section--videos-dialog"
    >
      <q-card class="content--card">
        <q-card-section class="section--header">
          <div class="header-1">
            <IconDefault :size="120" class="corner corner--down" color="accent" viewBox="0 0 120 120" src="/assets/svg/corner-curve.svg#corner_curve" />
          </div>
          <div class="header-2">
            <q-btn flat color="text-inverse" v-close-popup>
              <IconDefault :size="45" class="corner corner--down" color="text-inverse" viewBox="0 0 46.24 46.25" src="/assets/svg/x.svg#icon_x" />
            </q-btn>
          </div>
        </q-card-section>

        <q-card-section class="section--content">
          <VideoDefault class="video--dialog" :src="state.dialog.video" />
        </q-card-section>

        <q-card-actions class="section--footer">
          <div class="footer--1">
            {{ state.dialog.title }}
          </div>
          <div class="footer--2">
            <IconDefault :size="120" class="corner corner--down" color="accent" viewBox="0 0 120 120" src="/assets/svg/corner-curve.svg#corner_curve" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="scss">
/*
 | -----------------------------------------------------|
 |  Layout Desktop                                      |
 | -----------------------------------------------------|
**/
$max-height-and-padding-bottom: 45vh;

.component__section--videos-dialog
{
  .q-dialog__inner--minimized {
    padding: 0;
  }

  .content--card
  {
    background-color: transparent;
    box-shadow: none;

    .section--header
    {
      padding: 0;

      .header-1 {
        // border: solid 1px white;
      }
      .header-2 {
        border-top-right-radius: $top-radius * 3;
        background-color: $accent;
        text-align: right;
        padding: 60px 10% 20px;
      }
    }

    .section--content
    {
      background-color: $accent;
      padding: 0 10%;

      .video--dialog {
        border-radius: 15px;
      }
    }

    .section--footer
    {
      align-items: flex-start;
      flex-direction: column;
      padding: 0;

      .footer--1 {
        width: 100%;
        border-bottom-left-radius: $top-radius * 3;
        background-color: $accent;
        padding: 25px 10% 50px;
        color: $text-inverse;
        font-size: 1.3em;
        font-weight: bold;
      }
      .footer--2
      {
        width: 100%;
        text-align: right;

        .corner--down {
          rotate: 180deg;
        }
      }
    }

    @media only screen and (min-width: $breakpoint-lg)
    {
      .section--content
      {
        max-height: $max-height-and-padding-bottom;

        .video--dialog {
          padding-bottom: $max-height-and-padding-bottom !important;

          iframe {
            max-height: $max-height-and-padding-bottom;
          }
        }
      }
    }
  }
}

.component__videos--carousel
{
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
}
</style>
