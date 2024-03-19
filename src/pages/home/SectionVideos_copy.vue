<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import { useQuasar } from 'quasar'
import { ref, reactive, computed, onMounted } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'

type CarouselType = 'mobile' | 'desktop'
interface ICarouselData {
  id: number
  image: string
}

const $q = useQuasar()
const slide = ref(1)
const state = reactive({
  carousel: {
    data: [] as Array<ICarouselData>,
    items: [] as Array<[ICarouselData, [ICarouselData, ICarouselData]]>,
    itemsMobile: [] as Array<[ICarouselData, [ICarouselData, ICarouselData]]>,
    itemsDeskop: [] as Array<[ICarouselData, [ICarouselData, ICarouselData]]>
  }
})

const sortItems = (carouselType:CarouselType) => {
  state.carousel.data.forEach((element:ICarouselData) => {
    if (state.carousel.data.length) {
      switch (carouselType) {
        case 'desktop':
          // const test = element
          // console.log(element)

          break
        case 'mobile':
        default:
          //
          break
      }
    }
  })

  // console.log('function Test', carouselType)
}

/**
 * -------------------------------------------
 * Functions to sort Objects into array
 * -------------------------------------------
 */
const blocksOfThree = (carouselData: Array<ICarouselData>) : Array<ICarouselData[]> => {
  const blocksMobile = arrayChunk(carouselData, 5)
  const blocksDesktop = arrayChunk(carouselData, 3)
  // console.log('blocksMobile', blocksMobile)
  // console.log('blocksDesktop', blocksDesktop)
  // console.log('chunkMobile', chunkMobile(blocksMobile, 4))
  // console.log('chunkDesktop', chunkDesktop(blocksDesktop, 2))

  return blocksMobile
}

interface ICarouselItem {
  id: number
  image: string
}

interface ICarouselDeskot {
  firstItem: ICarouselItem
  item: Array<ICarouselItem[]>
}

interface ICarouselMobile {
  firstItem: ICarouselItem
  item: Array<ICarouselItem[]>
}

const chunkDesktop = (blocksDesktop: Array<any>, chunkSize: number) => {
  const chunks:Array<ICarouselDeskot> = []

  blocksDesktop.forEach((item:Array<ICarouselData>) => {
    const firstItem: ICarouselItem = { id: item[0].id, image: item[0].image }
    let items: ICarouselItem[] = []
    const itemCarousel: ICarouselDeskot = { firstItem, item: [] }

    switch (item.length) {
      case 3:
        items = [item[1], item[2]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        // chunks.push(itemCarousel)
        break
      case 2:
        items = [item[1]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        // chunks.push(itemCarousel)
        break
      case 1:
      default:
        items = [] as Array<ICarouselItem>
        break
    }
    // itemCarousel.item.push(items)
    chunks.push(itemCarousel)
  })

  return JSON.parse(JSON.stringify(chunks))
}

const chunkMobile = (blocksMobile: Array<any>, chunkSize: number) => {
  const chunks:Array<ICarouselMobile> = []

  blocksMobile.forEach((item:Array<ICarouselData>) => {
    const firstItem: ICarouselItem = { id: item[0].id, image: item[0].image }
    let items: ICarouselItem[] = []
    const itemCarousel: ICarouselMobile = { firstItem, item: [] }

    switch (item.length) {
      case 5:
        // chunks.push([item[0], [item[1], item[2]], [item[3], item[4]]])
        items = [item[1], item[2]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        items = [item[3], item[4]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        break
      case 4:
        // chunks.push([item[0], [item[1], item[2]], [item[3]]])
        items = [item[1], item[2]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        items = [item[3]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        break
      case 3:
        // chunks.push([item[0], [item[1], item[2]]])
        items = [item[1], item[2]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        break
      case 2:
        // chunks.push([item[0], [item[1]]])
        items = [item[1]] as Array<ICarouselItem>
        itemCarousel.item.push(items)
        break
      case 1:
      default:
        // chunks.push([item[0], []])
        break
    }

    chunks.push(itemCarousel)
  })

  return JSON.parse(JSON.stringify(chunks))
}
// const chunkMobile = (blocksMobile: Array<any>, chunkSize: number) => {
//   const chunks:Array<any> = []

//   blocksMobile.forEach((item:Array<ICarouselData>) => {
//     switch (item.length) {
//       case 5:
//         chunks.push([item[0], [item[1], item[2]], [item[3], item[4]]])
//         break
//       case 4:
//         chunks.push([item[0], [item[1], item[2]], [item[3]]])
//         break
//       case 3:
//         chunks.push([item[0], [item[1], item[2]]])
//         break
//       case 2:
//         chunks.push([item[0], [item[1]]])
//         break
//       case 1:
//       default:
//         chunks.push([item[0], []])
//         break
//     }
//   })

//   return JSON.parse(JSON.stringify(chunks))
// }

const treatItems = (blocks:any) => {
  // blocks = arrayChunk(blocks, 3)
  // console.log('arrayChunk', blocks)

  return blocks
}

const carouselType = computed(() => {
  sortItems($q.screen.lt.lg ? 'mobile' : 'desktop')
  return $q.screen.lt.lg ? 'mobile' : 'desktop'
})

const getData = () => {
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
  // console.log(state.carousel.data)
  blocksOfThree(state.carousel.data)
}

onMounted(() => {
  // console.log('onMounted')
  getData()
})
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Vídeos" color="tertiary" />
    {{ carouselType }}
    <div class="section__videos--carousel">
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
      <q-carousel-slide :name="1" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${carouselType}`">
            <q-img class="first-item rounded-borders" src="assets/image/tests/test-1.jpg">
              <div class="absolute-full box__icon--play flex flex-center">
                <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
              </div>
            </q-img>
            <div class="last-item">
              <q-img class="item rounded-borders" src="assets/image/tests/test-2.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <q-img class="item rounded-borders" src="assets/image/tests/test-3.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
            </div>
            <div class="last-item last-item-2">
              <q-img class="item rounded-borders" src="assets/image/tests/test-2.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
              <q-img class="item rounded-borders" src="assets/image/tests/test-3.jpg">
                <div class="absolute-full box__icon--play flex flex-center">
                  <IconDefault :size="90" color="tertiary" viewBox="0 0 90 100" src="assets/svg/icon-play.svg#icon_play" />
                </div>
              </q-img>
            </div>

          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
        <div class="row fit justify-start q-gutter-xs no-wrap">
          <div :class="`mosaic ${carouselType}`">
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
          <div :class="`mosaic ${carouselType}`">
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
          <div :class="`mosaic ${carouselType}`">
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
      </q-carousel-slide>
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
