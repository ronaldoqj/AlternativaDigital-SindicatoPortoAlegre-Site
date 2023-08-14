<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
</script>

<template>
  <div class="section__highlights--carousel">
    <q-carousel
      class="carousel"
      control-color="tertiary"
      animated
      v-model="slide"
      :autoplay="7000"
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="/assets/image/tests/test-1.jpg" />
      <q-carousel-slide :name="2" img-src="/assets/image/tests/test-2.jpg" />
      <q-carousel-slide :name="3" img-src="/assets/image/tests/test-3.jpg" />
      <q-carousel-slide :name="4" img-src="/assets/image/tests/test-4.jpg" />
      <q-carousel-slide :name="5" img-src="/assets/image/tests/test-5.jpg" />
      <q-carousel-slide :name="6" img-src="/assets/image/tests/test-6.jpg" />
      <q-carousel-slide :name="7" img-src="/assets/image/tests/test-7.jpg" />
    </q-carousel>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.section__highlights--carousel {
  .carousel {
    border-top-right-radius: $top-radius;
    border-top-left-radius: $top-radius;
    height: $banner-height;
  }

  .q-carousel__control {
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
</style>
