<script setup lang="ts">
import { computed } from 'vue'
// import { colors, setCssVar } from 'quasar'
import ReverseCorner from 'components/interface/ReverseCorner.vue'
import { clickRoute } from 'src/helpers/helpers'

// const { getPaletteColor } = colors
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    require: true
  },
  color: {
    type: String,
    default: () => { return 'accent' },
    require: false
  },
  background: {
    type: String,
    default: () => { return 'quaternary' },
    require: false
  },
  route: {
    type: String,
    default: () => { return '#' },
    require: false
  }
})

// const changeScssColor = () => {
//   console.log('getPaletteColor: ', getPaletteColor('color-buffer'))
//   setCssVar('color-buffer', getPaletteColor('secondary'))
// }

const resolveBackground = computed((): string => {
  return props.background ? `bg-${props.background}` : ''
})

const resolveColor = computed((): string => {
  return props.color ? `text-${props.color}` : ''
})
</script>

<template>
  <div
    class="component__interface--card-button"
    :style="`background: url(${props.src}) center/cover;`"
    @click="clickRoute(props.route)"
  >
    <ReverseCorner :size="80" :color="props.background" />
    <div :class="`title ${resolveColor} ${resolveBackground}`" :style="`background-color: $primary`">{{ props.title }}</div>
  </div>
</template>

<style lang="scss">
.component__interface--card-button
{
  cursor: pointer;
  $border-radius-card-top: 40px;
  $border-radius-card-button: 60px;
  $border-radius-title: $border-radius-card-button;

  border-top-left-radius: $border-radius-card-top;
  border-top-right-radius: $border-radius-card-top;
  border-bottom-left-radius: $border-radius-card-button + 5;
  border-bottom-right-radius: $border-radius-card-button + 5;
  height: 386px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.3s ease-in-out;

  .title {
    font-size: 30px;
    font-weight: bold;
    padding: 40px 60px 50px;
    border-radius: $border-radius-title;
    border-top-left-radius: 0;
    line-height: 1.3em;
    transition: 0.3s ease-in-out;
  }

  &:hover
  {
    .title {
      box-shadow: 2px 2px 1px 1px;
    }

    box-shadow: 2px 2px 1px 1px;
  }

  @media only screen and (max-width: $breakpoint-sm) {
    .title {
      padding: 40px 45px 50px;
    }
  }

}
</style>
