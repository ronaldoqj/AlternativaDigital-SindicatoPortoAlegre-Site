<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref } from 'vue'

const slide = ref(1)
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Serviços" color="primary" />
    <div class="section__videos--services">
      <q-carousel
        class="carousel-section"
        control-color="accent"
        swipeable
        animated
        v-model="slide"
        :autoplay="700000"
        navigation
        infinite
      >
      <q-carousel-slide :name="1" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="carousel--slide column no-wrap">
        <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
          <q-img class="rounded-borders col-12 col-lg-4 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 630px;

.section__videos--services
{
  .carousel-section
  {
    background-color: transparent;

    .carousel--slide
    {
      padding-bottom: 45px;

      div
      {
        div {
          border-radius: 20px;
        }

        @media only screen and (max-width: $breakpoint-md)
        {
          flex-direction: column;
          height: inherit;

          div {
            max-height: 340px;
          }
        }
      }
    }

    .q-carousel__control {
      bottom: -5px;
    }

    @media only screen and (max-width: $breakpoint-md) {
      height: inherit;
    }
  }
}
</style>
