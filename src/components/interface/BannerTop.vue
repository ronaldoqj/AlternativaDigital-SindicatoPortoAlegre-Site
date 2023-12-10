<script setup lang="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import { defaultImage } from 'src/helpers/helpers'

const props = defineProps({
  src: {
    type: String,
    default: defaultImage,
    required: false
  },
  menu: {
    type: Boolean,
    required: false
  }
})

// const slide = ref(1)
</script>

<template>
  <div class="section__banner-top--carousel">
    <ImageDefault class="image-box" :src="props.src" />
  </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$banner-height: 600px;

.section__banner-top--carousel {
  .image-box {
    border-top-right-radius: $top-radius;
    border-top-left-radius: $top-radius;
    height: $banner-height;
  }
}
</style>
