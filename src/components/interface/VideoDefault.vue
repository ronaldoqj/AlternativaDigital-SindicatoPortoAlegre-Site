<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ImageDefaultSize, type ratioType } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  ratio: {
    type: Number as PropType<ratioType>,
    default: 16 / 9,
    required: false
  },
  size: {
    type: Object as PropType<ImageDefaultSize>,
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

const resolveSrc = computed(() => {
  const src = props.src ? props.src : ''
  let returnUrl = ''
  if (src.length) {
    const url = src
    const lastSlashIndex = url.lastIndexOf('/')
    const textAfterLastSlash = url.substring(lastSlashIndex + 1)
    returnUrl = `https://www.youtube.com/embed/${textAfterLastSlash}`
  }
  return returnUrl
})

</script>

<template>
  <q-video
    class="q-my-xl"
    :style="resolveStyle"
    :src="resolveSrc"
    :ratio="props.ratio"
  />
</template>
