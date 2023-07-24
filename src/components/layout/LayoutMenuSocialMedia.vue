<script setup lang="ts">
// import { PropType } from 'vue'
// import { type ratioType } from '../_models/interfaces/ImageDefault'
import ImageDefault from 'components/interface/ImageDefault.vue'

// const props = defineProps({
//   menu: {
//     type: Object as PropType<ratioType>,
//     required: false
//   }
// })
</script>

<template>
    <q-btn size="sm" outline round color="text-inverse">
      <ImageDefault :size="{width: 8, height: 14}" src="/assets/svg/icon-facebook.svg"></ImageDefault>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <ImageDefault :size="{width: 14, height: 14}" src="/assets/svg/icon-instagram.svg"></ImageDefault>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <ImageDefault :size="{width: 15, height: 12}" src="/assets/svg/icon-twitter.svg"></ImageDefault>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <ImageDefault :size="{width: 13, height: 13}" src="/assets/svg/icon-watsapp.svg"></ImageDefault>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <ImageDefault :size="{width: 14, height: 10}" src="/assets/svg/icon-youtube.svg"></ImageDefault>
    </q-btn>
</template>

<style lang="scss">
$borderRadius: 20px;
</style>
