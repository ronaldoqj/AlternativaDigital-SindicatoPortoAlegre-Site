<script setup lang="ts">
import { PropType, computed, reactive } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

type layoutType = 'top' | 'banner' | 'normal'

const props = defineProps({
  type: {
    type: String as PropType<layoutType>,
    default: () => { return 'normal' },
    // default: () => ({}),
    required: false
  },
  background: {
    type: String,
    required: false
  },
  marginTop: {
    type: String,
    require: false
  },
  cornerColor: {
    type: String,
    require: false
  }
})

const state = reactive({
  showCornerCurveTop: false,
  showCornerCurveBottom: true
})

const resolveType = computed(() => {
  let style = ''

  switch (props.type) {
    case 'top':
      style = 'section__top'
      break
    case 'banner':
      style = 'section__banner'
      break
    case 'normal':
    default:
      style = 'section__normal'
      break
  }

  return style
})

const resolveBackground = computed(() => {
  let background = ''

  if (props.background) {
    background = `bg-${props.background}`
  }

  return background
})

</script>

<template>
  <div :class="`layout__section ${resolveType} ${resolveBackground}`">
    <div class="box__section">
      <slot v-if="resolveType === 'section__banner'"></slot>
      <div v-else class="section--content">
        {{ resolveType }}
        <slot></slot>
      </div>
      <div v-if="state.showCornerCurveBottom" class="corner-curve curve-up">
        <IconDefault size="120" :color="props.cornerColor" viewBox="0 0 120 120" src="assets/svg/corner-curve.svg#corner_curve" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.layout__section {
  position: relative;

  .box__section
  {
    .section--content {
      padding: 40px 100px;
    }

    .corner-curve {
      position: relative;
      bottom: $negative-bottom;
    }
  }

  &.section__top {
    margin-bottom: -$negative-bottom;
    margin-top: 0;
    border-top-right-radius: $top-radius;
    border-top-left-radius: $top-radius;
  }

  &.section__banner
  {
    margin-top: 0;
    border-top-right-radius: $top-radius;
    border-top-left-radius: $top-radius;

    .corner-curve {
      position: absolute;
      bottom: $negative-bottom;
    }
  }

  &.section__normal
  {
    margin-bottom: -$negative-bottom;
    margin-top: -$negative-bottom;
    border-top-right-radius: $corner-curve;
  }

}
</style>
