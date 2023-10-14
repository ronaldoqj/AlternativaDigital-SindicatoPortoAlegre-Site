<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'
import { baseURL, convertURL } from 'src/helpers/helpers'
import SkeletonBanner from 'components/interface/skeletons/SkeletonBanner.vue'

const slide = ref(1)

const router = useRouter()
const props = defineProps({
  news: {
    type: Object,
    required: false
  }
  // params: {
  //   type: Object as PropType<IncludeImage>,
  //   default: () => ({}),
  //   required: false
  // }
})

const clickRoute = (route: RouteLocationRaw) => {
  router.push(route)
  // router.replace(route)
}

onMounted(() => {
  console.log('bannerList', props.news)
})
</script>

<template>
  <div class="section__highlights--carousel">
    <q-carousel
      class="carousel-highlights"
      control-color="tertiary"
      swipeable
      animated
      v-model="slide"
      :autoplay="7000"
      navigation
      infinite
    >
      <q-carousel-slide
        v-for="(row, index) in props.news"
        :key="index"
        style="cursor: pointer;"
        @click="clickRoute(convertURL(row.id, row.title))"
        :name="index+1"
        :img-src="`${baseURL}${row.banner_desktop.path}/${row.banner_desktop.file_name}`"
      />

      <!-- <q-carousel-slide :name="2" img-src="/assets/image/apresentation/home/banner/BANNER_PRINCIPAL_002.jpg" /> -->
      <q-carousel-slide v-if="!props.news" name="1">
        <SkeletonBanner />
      </q-carousel-slide>

    </q-carousel>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.section__highlights--carousel {
  .carousel-highlights {
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
