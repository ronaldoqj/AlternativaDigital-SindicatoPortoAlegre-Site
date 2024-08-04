<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ImageDefaultSize, type ratioType, classType } from 'components/models/interfaces/InterfacesDefault'

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
  },
  class: {
    type: Object as PropType<classType>,
    require: false
  }
})

const resolveStyle = computed(() => {
  let style = ''

  if (props.size?.width) { style += `width:${props.size.width};` }
  if (props.size?.minWidth) { style += ` min-width:${props.size.minWidth};` }
  if (props.size?.maxWidth) { style += ` max-width:${props.size.maxWidth};` }
  if (props.size?.height) { style += ` height:${props.size.height};` }
  if (props.size?.minHeight) { style += ` min-height:${props.size.minHeight};` }
  if (props.size?.maxHeight) { style += ` max-height:${props.size.maxHeight};` }

  return style
})

</script>

<template>
  <q-img
    :style="resolveStyle"
    :src="props.src"
    :ratio="props.ratio"
    :class="props.class"
  />
</template>

<style lang="scss" scoped>
  .rounded-borders {
    border-radius: 7%;
  }
</style>
