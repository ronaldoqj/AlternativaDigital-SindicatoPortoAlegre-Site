<script setup lang="ts">
import { PropType } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

export type typeCorner = string | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

const props = defineProps({
  type: {
    type: String as PropType<typeCorner>,
    default: () => { return 'bottom-left' },
    required: false
  },
  size: {
    type: Number,
    default: () => { return 100 },
    required: false
  },
  color: {
    type: String,
    default: () => { return 'quaternary' },
    required: false
  }

})
</script>

<template>
  <IconDefault class="component__interface--reverse-corner" :size="props.size" :color="props.color" viewBox="0 0 120 120" src="/assets/svg/corner-curve.svg#corner_curve" />
</template>
