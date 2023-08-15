<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

interface ICarouselItem {
  id: number
  image: string
}

const slide = ref(1)
const state = reactive({
  carousel: {
    data: [] as Array<ICarouselItem>,
    carouselData: [] as Array<ICarouselItem>[]
  }
})

const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
  state.carousel.carouselData = arrayChunk(carouselData, 4) as unknown as Array<ICarouselItem>[]
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
      image: `assets/image/tests/test-${countImages}.jpg`
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
    <TitleDefault title="SindBancários nas redes" color="primary" />
    <div v-if="!state.carousel.carouselData.length">Loading</div>
    <div v-else class="section__social-media--carousel">
      <q-carousel
        class="carousel-section"
        control-color="accent"
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
            <q-img class="rounded-borders content-item" v-for="(item, key2) in arrayItem" :key="key2" :src="item.image" />
          </div>
        </div>
      </q-carousel-slide>
      <!--
        <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
          <div class="row fit justify-start q-gutter-sm no-wrap">
            <div class="container-content">
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/quasar.jpg" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/quasar.jpg" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="carousel--slide column no-wrap">
          <div class="row fit justify-start q-gutter-sm no-wrap">
            <div class="container-content">
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/material.png" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/donuts.png" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/donuts.png" />
            </div>
          </div>
        </q-carousel-slide>
      -->
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$height-item: 270px;

.section__social-media--carousel
{
  .carousel-section
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

        .content-item {
          margin: 5px;
          height: $height-item;
          cursor: pointer;
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
