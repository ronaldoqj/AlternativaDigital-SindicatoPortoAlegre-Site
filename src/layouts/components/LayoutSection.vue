<script setup lang="ts">
import { PropType, computed } from 'vue'
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
  },
  twoCorners: {
    type: Boolean,
    default: false,
    require: false
  },
  withoutCurveTop: {
    type: Boolean,
    default: false,
    require: false
  },
  withoutCurveBootom: {
    type: Boolean,
    default: false,
    require: false
  }
})

// const state = reactive({
//   showCornerCurveTop: false,
//   showCornerCurveBottom: true
// })

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

const resolveWithoutCurveTop = computed(() => {
  return props.withoutCurveTop ? 'without__curve--top' : ''
})

</script>

<template>
  <div :class="`layout__section ${resolveType} ${resolveBackground} ${resolveWithoutCurveTop}`">
    <div class="box__section">
      <slot v-if="resolveType === 'section__banner'"></slot>
      <div v-else class="section--content">
        <slot></slot>
      </div>
      <div v-show="!withoutCurveBootom" class="corner-curve curve-up">
        <IconDefault :size="120" :color="props.cornerColor" viewBox="0 0 120 120" src="assets/svg/corner-curve.svg#corner_curve" />
        <IconDefault v-show="twoCorners" :size="120" :color="props.cornerColor" viewBox="0 0 120 120" src="assets/svg/corner-curve.svg#corner_curve" />
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
      position: relative;
      padding: 40px 100px;
      z-index: $z-index-content;
    }

    @media only screen and (max-width: $breakpoint-sm) {
      .section--content {
        padding: 40px 30px;
      }
    }

    .corner-curve {
      position: relative;
      bottom: $negative-bottom;
      // Add to align two corner on bottom
      display: flex;
      justify-content: space-between;
      z-index: $z-index-min;

      span {
        &:last-child {
          transform: scaleX(-1);
        }
      }
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
    margin-top: -$negative-bottom;
    border-top-right-radius: $corner-curve;
  }

  &.without__curve--top {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

}
</style>