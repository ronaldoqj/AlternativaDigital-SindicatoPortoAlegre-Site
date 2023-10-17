<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

interface ICarouselItem {
  id: number
  image: string
  link: string
}

const slide = ref(1)
const state = reactive({
  carousel: {
    data: [] as Array<ICarouselItem>,
    carouselData: [] as Array<ICarouselItem>[]
  }
})

const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
  state.carousel.carouselData = arrayChunk(carouselData, 3) as unknown as Array<ICarouselItem>[]
}

const clickLink = (link:string) => {
  window.open(link, '_blank')
}

const getData = (): void => {
  const newData:ICarouselItem[] = []
  newData.push({ id: 1, image: 'assets/image/apresentation/home/campaigns/001_saude_mental.jpg', link: 'https://www.instagram.com/p/CyN69NXv-pu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  newData.push({ id: 2, image: 'assets/image/apresentation/home/campaigns/002_energia_bancária.jpg', link: 'https://www.instagram.com/p/CyJ2CABMe6s/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  newData.push({ id: 3, image: 'assets/image/apresentation/home/campaigns/003_outubro_rosa.jpg', link: 'https://www.instagram.com/p/Cx2-NzfObt_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  newData.push({ id: 4, image: 'assets/image/apresentation/home/campaigns/004_doacao_sangue.jpg', link: 'https://www.instagram.com/p/CxYOebMuB_E/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })
  newData.push({ id: 5, image: 'assets/image/apresentation/home/campaigns/005_basta.jpg', link: 'https://www.instagram.com/p/CyOL-YCOEop/?utm_source=ig_web_copy_link' })
  newData.push({ id: 6, image: 'assets/image/apresentation/home/campaigns/006_banrisul.jpg', link: 'https://www.instagram.com/p/CxFtywQtiWZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' })

  state.carousel.data = newData
  setStoreDatas(state.carousel.data)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Campanhas" color="primary" />
    <div v-if="!state.carousel.carouselData.length">Loading</div>
    <div v-else class="section__services--carousel">
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
            <q-img class="rounded-borders content-item" v-for="(item, key2) in arrayItem" :key="key2" :src="item.image" @click="clickLink(item.link)" />
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
$height-item: 360px;

.section__services--carousel
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
      // div
      // {
      //   div {
      //     border-radius: 20px;
      //   }

      //   @media only screen and (max-width: $breakpoint-md)
      //   {
      //     flex-direction: column;
      //     height: inherit;

      //     div {
      //       max-height: 340px;
      //     }
      //   }
      // }
    }

    .q-carousel__control {
      bottom: -5px;
    }

    // @media only screen and (max-width: $breakpoint-md) {
    //   height: inherit;
    // }
  }
}
</style>
