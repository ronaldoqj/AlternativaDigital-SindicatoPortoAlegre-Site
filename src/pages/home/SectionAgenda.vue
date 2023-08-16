<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

interface ICarouselItem {
  id: number
  day: number
  month: string
  type?: 'text' | 'image'
  image?: string
  title?: string
  description?: string
}

const slide = ref(0)
const state = reactive({
  carousel: {
    data: [] as Array<ICarouselItem>,
    carouselData: [] as Array<ICarouselItem>[]
  }
})

const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
  state.carousel.carouselData = arrayChunk(carouselData, 3) as unknown as Array<ICarouselItem>[]
}

const getData = (): void => {
  const limitImages = 7
  let countImages = 0
  const newData:ICarouselItem[] = []

  for (let index = 1; index < 16; index++) {
    if (countImages === limitImages) {
      countImages = 0
    }
    countImages += 1

    const item: ICarouselItem = {
      id: index,
      day: 11,
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
  setStoreDatas(state.carousel.data)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Agenda" color="tertiary" />
    <div v-if="!state.carousel.carouselData.length">Loading</div>
    <div v-else class="section__agenda--carousel">
      <q-carousel
        class="carousel-agenda"
        swipeable
        animated
        v-model="slide"
        :autoplay="700000"
        navigation
        infinite
      >
      <q-carousel-slide v-for="(arrayItem, key) in (state.carousel.carouselData as Array<ICarouselItem>[])" :key="key" :name="key" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-sm no-wrap">
          <div class="container-content">
            <div class="content-item" v-for="(item, key2) in arrayItem" :key="key2">
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
      </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
// $height-item: 270px;
$height-section2: 200px;

.section__agenda--carousel
{
  .carousel-agenda
  {
    background-color: transparent;
    height: inherit;

    .carousel--slide
    {
      padding: 10px 0 50px 0;

      .container-content
      {
        display: flex;
        flex-direction: column;
        width: inherit;
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

        @media only screen and (min-width: $breakpoint-md)
        {
          flex-direction: row;
        }
      }
    }

    .q-carousel__control {
      bottom: -5px;
    }
  }
}
</style>
