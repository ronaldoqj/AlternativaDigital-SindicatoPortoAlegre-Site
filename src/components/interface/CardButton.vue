<script setup lang="ts">
import { PropType, computed } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'
import ReverseCorner from 'components/interface/ReverseCorner.vue'
// import { colors, setCssVar } from 'quasar'

// const { getPaletteColor } = colors
const props = defineProps({
  image: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    require: false
  },
  color: {
    type: String,
    default: () => { return 'accent' },
    require: false
  },
  maxWidth: {
    type: String,
    require: false
  },
  background: {
    type: String,
    default: () => { return 'quaternary' },
    require: false
  },
  route: {
    type: Object as PropType<RouteLocationRaw>,
    default: () => ({ }),
    required: false
  }
})

const router = useRouter()

const resolveBackground = computed((): string => {
  return props.background ? `bg-${props.background}` : ''
})

const resolveColor = computed((): string => {
  return props.color ? `text-${props.color}` : ''
})

const resolveMaxWidth = computed((): string => {
  return props.maxWidth ? `max-width: ${props.maxWidth};` : ''
})

const clickRoute = (route: any | RouteLocationRaw) => {
  if ('name' in route && route.name.includes('://')) {
    window.open(route.name, '_blank') // https://portal.sindbancarios.org.br/
  } else {
    router.push(route)
  }
  // router.replace(route)
}
</script>

<template>
  <div
    class="component__interface--card-button"
    :style="`background: url(${props.image}) center/cover; ${resolveMaxWidth}`"
    @click="clickRoute(props.route)"
  >
    <ReverseCorner :size="80" :color="props.background" />
    <div :class="`title ${resolveColor} ${resolveBackground}`" :style="`background-color: $primary`">
      <slot></slot>
      {{ props.title }}
      <div v-if="props.subtitle" class="subtitle">{{ props.subtitle }}</div>
    </div>
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

    .subtitle {
      font-size: 14px;
      line-height: 1em;
      font-weight: normal;
    }
  }

  &:hover
  {
    .title {
      box-shadow: 2px 2px 1px 1px;
      line-height: 1.2em;
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
