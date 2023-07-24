<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ImageDefaultSize, type ratioType } from '../_models/interfaces/ImageDefault'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  ratio: {
    type: Object as PropType<ratioType>,
    required: false
  },
  size: {
    type: Object as PropType<ImageDefaultSize>,
    require: false
  }
})

const resolveStyle = computed(() => {
  let style = ''

  if (props.size?.width) { style += `width:${props.size.width}px;` }
  if (props.size?.minWidth) { style += ` min-width:${props.size.minWidth}px;` }
  if (props.size?.maxWidth) { style += ` max-width:${props.size.maxWidth}px;` }
  if (props.size?.height) { style += ` height:${props.size.height}px;` }
  if (props.size?.minHeight) { style += ` min-height:${props.size.minHeight}px;` }
  if (props.size?.maxHeight) { style += ` max-height:${props.size.maxHeight}px;` }

  return style
})

</script>

<template>
  <q-img
    :style="resolveStyle"
    :src="props.src"
    :ratio="props.ratio"
  />
</template>
