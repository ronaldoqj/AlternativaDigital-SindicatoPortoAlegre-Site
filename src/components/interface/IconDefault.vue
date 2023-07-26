<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    require: false
  },
  viewBox: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: false
  }
})
</script>

<template>
  <q-icon
    :size="`${props.size}px`"
    :color="props.color"
    :name="`svguse:${props.src}|${props.viewBox}`"
  />
  <!-- <q-icon size="150px" color="accent" name="svguse:assets/svg/corner-curve.svg#corner_curve|0 0 150 150"></q-icon> -->
</template>
