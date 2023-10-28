<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import { arrayChunk, carouselSettings } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { useStructureStore } from 'src/stores/structure-store'
import { TStructureScreenSize } from 'src/types/IDefaults'

interface ICarouselItem {
  id: number
  day: number
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
    case 'xl':
    default:
      list = arrayChunk(state.carousel.data, 4)
      break
  }

  return list
})

// const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
//   state.carousel.carouselData = arrayChunk(carouselData, 2) as unknown as Array<ICarouselItem>[]
// }

const getData = (): void => {
  const limitImages = 7
  let countImages = 0
  const newData:ICarouselItem[] = []

  for (let index = 1; index < 9; index++) {
    if (countImages === limitImages) {
      countImages = 0
    }
    countImages += 1

    const item: ICarouselItem = {
      id: index,
      day: 1 + index,
      month: 'APR'
    }

    if (index % 2) {
      item.type = 'image'
      item.image = `assets/image/tests/test-${countImages}.jpg`
    } else {
      item.type = 'text'
      item.title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      item.description = 'Gravida neque convallis a cras. Turpis massa sed elementum tempus egestas sed sed risus. Elit pellentesque habitant morbi tristique.'
    }

    newData.push(item)
  }

  state.carousel.data = newData
  // setStoreDatas(state.carousel.data)
}

const structureStore = computed((): null | TStructureScreenSize => {
  return useStructureStore().currentSize
})

onMounted(() => {
  getData()
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
            <div class="col-xs-12 col-sm-6 col-lg-3" v-for="(item, key2) in arrayItem" :key="key2">
                <div class="container-content">
                  <div class="content-item">
                    <div class="item-section1"><h4>{{ item.day }}</h4><h5>{{ item.month }}</h5></div>
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
            margin-left: 15px;
            margin-bottom: -15px;

            h4, h5 {
              margin: 0;
            }

            h4 {
              // font-size: 3.56em;
              font-size: 100px;
              font-weight: bold;
              line-height: 1em;
              letter-spacing: -0.04em;
              margin-right: 5px;
            }

            h5 {
              // font-size: 1.1em;
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
