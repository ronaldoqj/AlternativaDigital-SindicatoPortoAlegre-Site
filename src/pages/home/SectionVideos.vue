<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import { useQuasar } from 'quasar'
import { ref, reactive, computed, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

type CarouselType = 'mobile' | 'desktop'
interface ICarouselItem {
  id: number
  image: string
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
  console.log('slide', slide)
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
  const limitImages = 7
  let countImages = 0
  const newData = []

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
  console.log(state.carousel.data)
  setStoreDatas(state.carousel.data)
  sortCarouselData(currentCarouselType as unknown as CarouselType)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default">
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
            <q-img class="first-item rounded-borders" :src="news.firstItem.image">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item" :name="key">
              <q-img class="item rounded-borders" :src="item.image" v-for="(item, key2) in news.item" :key="key2">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <!-- <q-img class="item rounded-borders" src="assets/image/tests/test-3.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img> -->
            </div>
            <div class="last-item last-item-2" v-if="currentCarouselType === 'mobile'">
              <q-img class="item rounded-borders" :src="item2.image" v-for="(item2, key3) in news.item2" :key="key3">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
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
</style>
