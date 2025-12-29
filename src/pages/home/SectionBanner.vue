<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { baseURL, convertURL, carouselSettings, defaultImage } from 'src/helpers/helpers'
import { useQuasar } from 'quasar'
import { RouteLocationRaw, useRouter } from 'vue-router'
import SkeletonBanner from 'components/interface/skeletons/SkeletonBanner.vue'

const props = defineProps({
  news: {
    type: Object,
    required: false
  }
})

type CarouselType = 'mobile' | 'desktop'
const $q = useQuasar()
const router = useRouter()

const state = reactive({
  typeImage: 'mobile' as CarouselType,
  sectionNews: {},
  carousel: {
    slide: 0,
    autoPlay: carouselSettings.autoPlay
  }
})

const screenSize = (): CarouselType => {
  return $q.screen.lt.md ? 'mobile' : 'desktop'
}

const clickRoute = (route: RouteLocationRaw) => {
  router.push(route)
  // router.replace(route)
}

const clickLink = (link:string, target:string) => {
  window.open(link, target)
}

const resolveImage = (type:string, news:any): string => {
  const banner = type === 'mobile' ? news.banner_mobile : news.banner_desktop
  const path = banner?.path
  const fileName = banner?.file_name
  const src = path && fileName ? `${baseURL}${path}/${fileName}` : defaultImage

  return src
}

watch(screenSize, (newValue) => {
  state.typeImage = newValue
})

onMounted(() => {
  state.typeImage = screenSize()
})
</script>

<template>
  <div class="section__highlights--carousel">
    <q-carousel
      control-color="tertiary"
      swipeable
      animated
      v-model="state.carousel.slide"
      :autoplay="state.carousel.autoPlay"
      navigation
      infinite
      class="carousel-highlights"
    >
      <q-carousel-slide
        v-for="(row, index) in props.news"
        :key="index"
        style="cursor: pointer;"
        @click="row.entityType === 'campaign' ? clickLink(row.link, row.target) : clickRoute(convertURL(row.id, row.title))"
        :name="index"
        :img-src="resolveImage(state.typeImage, row)"
      />
      <q-carousel-slide v-if="!props.news" name="0">
        <SkeletonBanner />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.section__highlights--carousel
{
  .carousel-highlights
  {
    border-top-right-radius: $top-radius;
    border-top-left-radius: $top-radius;
    height: $banner-height;

    .q-carousel__control
    {
      width: fit-content;
      margin: 0 auto;
      padding: 0 20px;
      border-top-right-radius: $border-radius-control-banner;
      border-top-left-radius: $border-radius-control-banner;
      background-color: $accent;
      bottom: $negative-bottom;

      button {
        padding: 0;
      }
    }
  }
}
</style>
