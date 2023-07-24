<script setup lang="ts">
import { ref } from 'vue'
// import IconDefault from 'components/interface/IconDefault.vue'

const slide = ref(1)
</script>

<template>
  <div class="box__carousel--banner--top">
    <q-carousel
      class="carousel__banner--top"
      animated
      v-model="slide"
      :autoplay="7000"
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    <!-- <div class="curve-up">
      <IconDefault size="150" color="primary" viewBox="0 0 150 150" src="assets/svg/corner-curve.svg#corner_curve" />
    </div> -->
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.carousel__banner--top {
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
</style>
