<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ButtonDefaultSize } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  title: {
    type: String,
    require: false
  },
  size: {
    type: Object as PropType<ButtonDefaultSize>,
    require: false
  },
  color: {
    type: String,
    require: false
  },
  rounded: {
    type: Boolean,
    require: false
  },
  round: {
    type: Boolean,
    require: false
  },
  flat: {
    type: Boolean,
    require: false
  },
  outline: {
    type: Boolean,
    require: false
  },
  unelevated: {
    type: Boolean,
    require: false
  },
  push: {
    type: Boolean,
    require: false
  },
  unradiusTopLeft: {
    type: Boolean,
    require: false
  },
  noCaps: {
    type: Boolean,
    require: false
  },
  loading: {
    type: Boolean,
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

const resolveRadius = computed(() => {
  let cssClass = ''

  if (props.unradiusTopLeft) { cssClass += 'unradiusTopLeft' }

  return cssClass
})

</script>

<template>
  <q-btn
    :rounded="props.rounded"
    :round="props.round"
    :flat="props.flat"
    :outline="props.outline"
    :unelevated="props.unelevated"
    :push="props.push"
    :class="`button-default ${resolveRadius}`"
    :no-caps="props.noCaps"

    :loading="props.loading"
    :color="props.color"
    :style="resolveStyle">
    {{ props.title }}
    <template v-slot:loading>
      <q-spinner-hourglass class="on-left" />
      Carregando...
    </template>
  </q-btn>
</template>

<style lang="scss">
  .button-default
  {
    &.unradiusTopLeft {
      border-top-left-radius: 0;
    }
  }
</style>
