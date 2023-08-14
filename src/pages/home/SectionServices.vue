<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref } from 'vue'

const slide = ref(1)
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Vídeos" color="tertiary" />
    <div class="section__videos--carousel">
      <q-carousel
        class="carousel"
        control-color="tertiary"
        swipeable
        animated
        v-model="slide"
        :autoplay="200000"
        navigation
        infinite
      >
      <q-carousel-slide :name="1" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.section__videos--carousel
{
  .carousel
  {
    background-color: transparent;

    .carousel--slide  {
      padding: 0 5px 30px 5px;
      div {
        div {
          border-radius: 20px;
        }
      }
    }

    .q-carousel__control {
      bottom: -5px;
    }
  }
}
</style>
