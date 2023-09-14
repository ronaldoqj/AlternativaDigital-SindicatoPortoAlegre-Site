<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
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
      <q-carousel-slide :name="1" img-src="/assets/image/apresentation/home/banner/banner-home.jpg" />
      <q-carousel-slide :name="2" img-src="/assets/image/apresentation/home/banner/BANNER_PRINCIPAL_002.jpg" />
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
