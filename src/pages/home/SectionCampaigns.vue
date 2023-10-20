<script setup lang="ts">
import { baseURL } from 'src/helpers/helpers'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, onMounted } from 'vue'
// import { arrayChunk } from 'src/helpers/helpers'

// interface ICarouselItem {
//   id: number
//   image: string
//   link: string
// }

const slide = ref(1)
// const state = reactive({
//   carousel: {
//     data: [] as Array<ICarouselItem>,
//     carouselData: [] as Array<ICarouselItem>[]
//   }
// })

// const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
//   state.carousel.carouselData = arrayChunk(carouselData, 3) as unknown as Array<ICarouselItem>[]
// }

const clickLink = (link:string) => {
  window.open(link, '_blank')
}

onMounted(() => {
  // getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Campanhas" color="primary" />
    <!-- <div v-if="!state.carousel.carouselData.length">Loading</div> -->
    <!-- <div v-else class="section__services--carousel"> -->
    <div class="section__services--carousel">
      <q-carousel
        class="carousel-section"
        control-color="accent"
        swipeable
        animated
        v-model="slide"
        :autoplay="7000"
        navigation
        infinite
      >
        <q-carousel-slide :name="1" class="carousel--slide column no-wrap">
          <div class="row fit q-col-gutter-sm">
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/001_saude_mental.jpg`" @click="clickLink('https://www.instagram.com/p/CyN69NXv-pu/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')" /></div>
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/002_energia_bancaria.jpg`" @click="clickLink('https://www.instagram.com/p/CyJ2CABMe6s/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')" /></div>
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/003_outubro_rosa.jpg`" @click="clickLink('https://www.instagram.com/p/Cx2-NzfObt_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')" /></div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
          <div class="row fit q-col-gutter-sm">
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/004_doacao_sangue.jpg`" @click="clickLink('https://www.instagram.com/p/CxYOebMuB_E/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')" /></div>
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/005_basta.jpg`" @click="clickLink('https://www.instagram.com/p/CyOL-YCOEop/?utm_source=ig_web_copy_link')" /></div>
            <div class="col-xs-12 col-md-4 container-content"><q-img :ratio="1" class="rounded-borders content-item" :src="`${baseURL}temporary/images/home/campaigns/006_banrisul.jpg`" @click="clickLink('https://www.instagram.com/p/CxFtywQtiWZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==')" /></div>
          </div>
        </q-carousel-slide>
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
      margin-bottom: 30px;

      .container-content
      {

        // display: flex;
        // flex-direction: column;
        // width: inherit;
        text-align: center;
        height: inherit;

        .rounded-borders {
          border-radius: $border-radius-control-banner;
        }

        .content-item {
          // margin: 5px;
          // height: $height-item;
          max-width: 450px;
          cursor: pointer;
        }

        @media only screen and (max-width: $breakpoint-sm)
        {
          // width: 460px;
        }

        @media only screen and (min-width: $breakpoint-sm)
        {
          // flex-direction: row;
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
