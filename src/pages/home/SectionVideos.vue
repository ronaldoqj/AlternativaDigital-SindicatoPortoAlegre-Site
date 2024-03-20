<script setup lang="ts">
import CarouselVideos from 'components/interface/CarouselVideos.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import { EPages } from 'src/types/IPages'
</script>

<template>
  <div class="section__default section__videos">
    <TitleDefault title="Vídeos" color="tertiary" />
    <CarouselVideos :page="EPages.home" />
  </div>
</template>

<style lang="scss">
// styles
</style>
