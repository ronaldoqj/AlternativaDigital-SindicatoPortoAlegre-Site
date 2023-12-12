<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import AgendaService from 'src/services/AgendaService'
import { baseURL, arrayChunk, carouselSettings, getDates } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useStructureStore } from 'src/stores/structure-store'
import { TStructureScreenSize } from 'src/types/IDefaults'

const router = useRouter()

interface ICarouselItem {
  id: number
  day: number | string
  scheduledDates: any
  month: string
  type?: 'text' | 'image'
  image?: string
  title?: string
  description?: string
}

const state = reactive({
  carousel: {
    data: [] as Array<ICarouselItem>,
    carouselData: [] as Array<ICarouselItem>[],
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
      list = arrayChunk(state.carousel.data, 1)
      break
    case 'sm':
    case 'md':
      list = arrayChunk(state.carousel.data, 2)
      break
    case 'lg':
      list = arrayChunk(state.carousel.data, 3)
      break
    case 'xl':
    default:
      list = arrayChunk(state.carousel.data, 4)
      break
  }

  return list
})

const getAgenda = () => {
  AgendaService.list({})
    .then((response:any) => {
      setAgenda(response.data)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const setAgenda = (agendas: any) => {
  const newData:ICarouselItem[] = []

  agendas.forEach((element:any) => {
    const item: ICarouselItem = {
      id: element.id,
      day: '',
      month: '',
      scheduledDates: getDates(element.scheduled_dates)
    }
    item.type = element.card_image_id != null ? 'image' : 'text'
    item.title = element.title
    item.image = element.card_image_id != null ? `${baseURL}${element.card_image.path}/${element.card_image.file_name}` : ''
    item.description = element.call
    newData.push(item)
  })

  state.carousel.data = newData
}

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

const clickItem = (id: number, name: string) => {
  router.push({ name: 'agenda', params: { id, name } })
}

onMounted(() => {
  getAgenda()
  // getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Agenda" color="tertiary" />
    <div v-if="!state.carousel.data.length">Loading</div>
    <div v-else class="section__agenda--carousel">
      <q-carousel
        class="carousel-section"
        swipeable
        animated
        v-model="state.carousel.slide"
        :autoplay="state.carousel.autoPlay"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(arrayItem, key) in listItems" :key="key" :name="key" class="carousel--slide">
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3" v-for="(item, key2) in arrayItem" :key="key2">
                <div class="container-content" @click="clickItem(item.id, 'agenda')">
                  <div class="content-item">
                    <div class="item-section1">
                      <div><h4>{{ item.scheduledDates.initialDate.day }}</h4><h5>{{ item.scheduledDates.initialDate.month }}</h5></div>
                      <div><h3 v-if="item.scheduledDates.conector !== null">{{ item.scheduledDates.conector }}</h3></div>
                      <div><h4 v-if="item.scheduledDates.conector !== null">{{ item.scheduledDates.finalDate.day }}</h4><h5>{{ item.scheduledDates.finalDate.month }}</h5></div>
                    </div>
                    <q-img v-if="item.type === 'image'" class="item-section2 rounded-borders" :src="item.image" />
                    <div v-else class="item-section2 rounded-borders">
                      <div>
                        <p class="title ellipsis-3-lines">{{ item.title }}</p>
                        <p class="description ellipsis-3-lines">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$height-section2: 200px;

.section__agenda--carousel
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

    .carousel--slide
    {
      padding: 5px;

      .container-content
      {
        width: 100%;
        height: inherit;

        .rounded-borders {
          border-radius: $border-radius-control-banner;
        }

        .content-item
        {
          margin: 5px;
          width: inherit;
          height: inherit;
          cursor: pointer;

          .item-section1
          {
            font-size: 2em;
            color: $text-inverse;
            display: flex;
            align-items: baseline;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: -2px;

            div {
              display: flex;
              align-items: end;
            }

            h3, h4, h5 {
              margin: 0;
              line-height: 1em;
            }

            h3 {
              font-size: 30px;
              margin: 0 25px;
            }

            h4 {
              font-size: 90px;
              font-weight: bold;
              letter-spacing: -0.04em;
              margin-right: 1px;
              line-height: 0.8;
            }

            h5 {
              font-size: 30px;
            }
          }

          .item-section2 {
            height: $height-section2;
            color: $text-inverse;
            background-color: $quaternary;
            padding: 25px;
            display: flex;
            align-items: center;

            .title {
              color: $accent;
              font-size: 24px;
              font-weight: bold;
              line-height: 1.1em;
              margin-bottom: 15px;
            }
            .description {
              font-size: 15px;
              line-height: 1.2em;
              color: $quinary;
              margin: 0;
            }
          }
        }

        // flex-direction: row;

        @media only screen and (max-width: $breakpoint-sm)
        {
          // flex-direction: column;
        }
      }
    }

    .q-carousel__navigation--buttons {
      bottom: 0;
    }
  }
}
</style>
