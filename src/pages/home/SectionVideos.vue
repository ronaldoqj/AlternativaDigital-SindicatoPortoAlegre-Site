<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import VideoDefault from 'src/components/interface/VideoDefault.vue'
import { useQuasar } from 'quasar'
import { ref, reactive, computed, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

type CarouselType = 'mobile' | 'desktop'
interface ICarouselItem {
  id: number
  image: string
  title: string
  video: string
}

interface ICarouselDesktop {
  firstItem: ICarouselItem
  item: Array<ICarouselItem>
}

interface ICarouselMobile {
  firstItem: ICarouselItem
  item: Array<ICarouselItem>
  item2: Array<ICarouselItem>
}

const $q = useQuasar()
const slide = ref(1)
const state = reactive({
  dialog: {
    fullWidth: false,
    video: '',
    title: ''
  },
  carousel: {
    data: [] as Array<ICarouselItem>,
    carouselData: [] as Array<ICarouselMobile | ICarouselDesktop>,
    storeCarouselData: {
      mobile: [] as Array<ICarouselMobile>,
      desktop: [] as Array<ICarouselDesktop>
    }
  }
})

const showCarousel = computed((): boolean => {
  return !!state.carousel.carouselData.length
})

const currentCarouselType = computed((): CarouselType => {
  const type = $q.screen.lt.lg ? 'mobile' : 'desktop'
  // console.log('slide', slide)
  sortCarouselData(type)
  return type
})

const sortCarouselData = (carouselType:CarouselType): void => {
  if (state.carousel.data.length) {
    switch (carouselType) {
      case 'desktop':
        state.carousel.carouselData = state.carousel.storeCarouselData.desktop
        break
      case 'mobile':
      default:
        state.carousel.carouselData = state.carousel.storeCarouselData.mobile
        break
    }

    slide.value = 0
  }
}

/**
 * -------------------------------------------
 * Functions to sort Objects into array
 * -------------------------------------------
 */

const sortDesktop = (blocksDesktop: Array<ICarouselItem[]>): ICarouselDesktop[] => {
  const itemCarousel:Array<ICarouselDesktop> = []

  blocksDesktop.forEach((item:Array<ICarouselItem>) => {
    switch (item.length) {
      case 3:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1], item[2]]
        } as ICarouselDesktop)
        break
      case 2:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1]]
        } as ICarouselDesktop)
        break
      case 1:
      default:
        itemCarousel.push({ firstItem: item[0] } as ICarouselDesktop)
        break
    }
  })

  // console.log('sortDesktop', JSON.parse(JSON.stringify(itemCarousel)))
  return JSON.parse(JSON.stringify(itemCarousel))
}

const sortMobile = (blocksMobile: Array<ICarouselItem[]>): ICarouselMobile[] => {
  const itemCarousel: Array<ICarouselMobile> = []

  blocksMobile.forEach((item:Array<ICarouselItem>) => {
    switch (item.length) {
      case 5:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1], item[2]],
          item2: [item[3], item[4]]
        } as ICarouselMobile)
        break
      case 4:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1], item[2]],
          item2: [item[3]]
        } as ICarouselMobile)
        break
      case 3:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1], item[2]]
        } as ICarouselMobile)
        break
      case 2:
        itemCarousel.push({
          firstItem: item[0],
          item: [item[1]]
        } as ICarouselMobile)
        break
      case 1:
      default:
        itemCarousel.push({ firstItem: item[0] } as ICarouselMobile)
        break
    }
  })

  // console.log('sortMobile', JSON.parse(JSON.stringify(itemCarousel)))
  return JSON.parse(JSON.stringify(itemCarousel))
}

const setStoreDatas = (carouselData: Array<ICarouselItem>) : void => {
  const blocksMobile = arrayChunk(carouselData, 5)
  const blocksDesktop = arrayChunk(carouselData, 3)
  state.carousel.storeCarouselData.mobile = sortMobile(blocksMobile)
  state.carousel.storeCarouselData.desktop = sortDesktop(blocksDesktop)
}

const getData = (): void => {
  const newData = [
    { id: 1, image: '/assets/image/apresentation/home/videos/001.jpg', title: 'OP SindBancários - COPA DO BRASIL KIDS 2023: Nem o mau tempo impediu o futebol da criançada', video: 'https://youtu.be/9oZYy2-lpQo?si=8WfbxoDMubQRE7ia' },
    { id: 2, image: '/assets/image/apresentation/home/videos/002.jpg', title: 'VISTA BRANCO E PARTICIPE! Dia Nacional de Luta em Defesa do Saúde Caixa 🔵🟠 (17.10)', video: 'https://youtu.be/nfqpaMCGESw?si=O6GQNgdhNKi3qNn6' },
    { id: 3, image: '/assets/image/apresentation/home/videos/003.jpg', title: 'Podcast De Fato #10|Frei Sérgio Görgen - A Teologia da Libertação está viva ⛪✝️', video: 'https://youtu.be/CYT-TLLGV1g?si=7jADZweOHqKEIRKu' },
    { id: 4, image: '/assets/image/apresentation/home/videos/004.jpg', title: '⚡E AGORA - Vem aí Energia Bancária (21/10): esporte, cultura e lazer para a categoria', video: 'https://youtu.be/xpkf3oEGQNI?si=hEylqh1fWYkNi4es' },
    { id: 5, image: '/assets/image/apresentation/home/videos/005.jpg', title: 'Minidoc 15 anos CineBancários', video: 'https://youtu.be/mu0SSeJVwcw?si=WqXY40U_QDEXJQaq' },
    { id: 6, image: '/assets/image/apresentation/home/videos/006.jpg', title: 'DO LADO DE CÁ - Privatização da Carris: o que esperar do sistema de ônibus de Porto Alegre? 🚌🏙️', video: 'https://youtu.be/9U_jUzzKkD0?si=-5lsQDB35FBWGVAz' },
    { id: 7, image: '/assets/image/apresentation/home/videos/007.jpg', title: 'Novos banrisulenses são recepcionados por diretoras do SindBancários 🤗🏦', video: 'https://youtu.be/sNALoW18jLE?si=oXE7OGCSnLhr_xk0' },
    { id: 8, image: '/assets/image/apresentation/home/videos/008.jpg', title: 'Podcast De Fato #09|Professora Jaqueline Moll - Educação Pública, uma barreira contra o fascismo 🤓🏫', video: 'https://youtu.be/g87rW6nzz8Q?si=UOYh-Q7Qc7FB4lBg' },
    { id: 9, image: '/assets/image/apresentation/home/videos/009.jpg', title: '🎬🎼 Agenda Cultural: CULTURA EM MOVIMENTO:', video: 'https://youtu.be/6pEC1pDAElk?si=ta3Expe7mThMEozt' }
  ]

  state.carousel.data = newData
  // console.log(state.carousel.data)
  setStoreDatas(state.carousel.data)
  sortCarouselData(currentCarouselType as unknown as CarouselType)
}

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

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default section__videos">
    <TitleDefault title="Vídeos" color="tertiary" />
    <!-- {{ currentCarouselType }} -->
    <div v-if="!showCarousel">Loading</div>
    <div v-else class="section__videos--carousel">
      <q-carousel
        class="carousel-videos"
        control-color="tertiary"
        swipeable
        animated
        v-model="slide"
        :autoplay="7000000"
        navigation
        infinite
      >
      <q-carousel-slide v-for="(news, key) in (state.carousel.carouselData as ICarouselMobile[])" :key="key" :name="key" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${currentCarouselType}`">
            <q-img class="first-item rounded-borders" :src="news.firstItem.image" @click="openVideo(news.firstItem)">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="/assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item" :name="key">
              <q-img class="item rounded-borders" :src="item.image" v-for="(item, key2) in news.item" :key="key2" @click="openVideo(item)">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="/assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <!-- <q-img class="item rounded-borders" src="assets/image/tests/test-3.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img> -->
            </div>
            <div class="last-item last-item-2" v-if="currentCarouselType === 'mobile'">
              <q-img class="item rounded-borders" :src="item2.image" v-for="(item2, key3) in news.item2" :key="key3" @click="openVideo(item2)">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="/assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <!-- <q-img class="item rounded-borders" src="assets/image/tests/test-3.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img> -->
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <!-- <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${currentCarouselType}`">
            <q-img class="first-item rounded-borders" src="assets/image/tests/test-4.jpg">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item">
              <q-img class="item rounded-borders" src="assets/image/tests/test-5.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <q-img class="item rounded-borders" src="assets/image/tests/test-6.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${currentCarouselType}`">
            <q-img class="first-item rounded-borders" src="assets/image/tests/test-7.jpg">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item">
              <q-img class="item rounded-borders" src="assets/image/tests/test-1.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <q-img class="item rounded-borders" src="assets/image/tests/test-2.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${currentCarouselType}`">
            <q-img class="first-item rounded-borders" src="assets/image/tests/test-3.jpg">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item">
              <q-img class="item rounded-borders" src="assets/image/tests/test-4.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <q-img class="item rounded-borders" src="assets/image/tests/test-5.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-carousel-slide> -->
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
$background-color:  $dark-hover-90;
$border-radius-control-banner: 20px;
$space-between-cols-items: 5px;
$space-between-rows-items: 10px;
$height-item: 400px;
$height-small-items: $height-item / 2 - $space-between-rows-items;
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
      max-height: $max-height-and-padding-bottom;

      .video--dialog {
        border-radius: 15px;
        padding-bottom: $max-height-and-padding-bottom !important;

        iframe {
          max-height: $max-height-and-padding-bottom;
        }
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
          // transform: scaleX(-1);
          // transform: scaleY(-1);
          rotate: 180deg;
        }
      }
    }
  }
}

.section__videos
{
  .section__videos--carousel
  {
    .carousel-videos
    {
      background-color: transparent;
      height: inherit;
      padding-bottom: 20px;

      .carousel--slide
      {
        padding: 10px 4px 30px 0px;

        .mosaic
        {
          /**
           * |-------------------------------------|
           * | .mobile is default below            |
           * |-------------------------------------|
           */

          display: flex;
          flex-direction: column;
          width: inherit;
          height: inherit;

          .rounded-borders {
            border-radius: 20px;
          }

          .first-item {
            width: auto;
            height: $height-item;
            margin-right: $space-between-cols-items;
            margin-bottom: 5px;
          }

          .last-item
          {
            margin: 5px 0;
            width: auto;
            margin-left: $space-between-cols-items;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .item {
              &:first-child {
                margin-right: 5px;
              }
              &:last-child {
                margin-left: 5px;
              }

              height: $height-small-items;
            }
          }

          .box__icon--play
          {
            background: none;
            transition: 500ms ease-in-out;
            cursor: pointer;

            span {
              transition: 500ms ease-in-out;
            }

            &:hover
            {
              background: $background-color;
              span {
                opacity: 0.8;
              }
            }
          }

          &.desktop
          {
            width: inherit;
            height: $height-item;
            flex-direction: row;

            .rounded-borders {
              border-radius: 20px;
            }

            .first-item {
              width: 70%;
              height: $height-item;
              margin-right: $space-between-cols-items;
            }

            .last-item
            {
              margin: 0;
              width: 30%;
              margin-left: $space-between-cols-items;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .item {
                height: $height-small-items;
              }

              &.last-item-2 {
                display: none;
              }
            }
          }

        }
      }

      .q-carousel__control {
        bottom: -5px;
      }
    }
  }
}

</style>
