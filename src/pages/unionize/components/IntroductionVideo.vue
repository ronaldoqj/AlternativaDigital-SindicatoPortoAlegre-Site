<script setup lang="ts">
import CardVideoThumb from 'components/interface/CardVideoThumb.vue'
import { defaultImage } from 'src/helpers/helpers'
</script>

<template>
  <!-- Preencher os dados -->
  <div class="component__unionize--intruduciton-video">
    <CardVideoThumb class="thumb--video" :src="defaultImage" :icon-size="90" icon-view-box="0 0 90 100" />
  </div>
</template>

<style lang="scss">
.component__unionize--intruduciton-video
{
  display: flex;
  justify-content: center;

  .thumb--video {
    max-width: 800px;
  }
}
</style>
