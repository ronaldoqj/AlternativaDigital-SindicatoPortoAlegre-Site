<script setup lang="ts">
import { PropType, computed } from 'vue'
import ReverseCorner from 'components/interface/ReverseCorner.vue'
import { RouteLocationRaw, useRouter } from 'vue-router'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    default: '',
    require: false
  },
  description: {
    type: String,
    default: '',
    require: false
  },
  color: {
    type: String,
    default: () => { return 'accent' },
    require: false
  },
  backgroundColor: {
    type: String,
    default: () => { return 'quaternary' },
    require: false
  },
  route: {
    type: Object as PropType<RouteLocationRaw>,
    default: () => ({ name: 'servicos' }),
    required: false
  }
})

const router = useRouter()

const resolveBackground = computed((): string => {
  return props.backgroundColor ? `bg-${props.backgroundColor}` : ''
})

const resolveColor = computed((): string => {
  return props.color ? `text-${props.color}` : ''
})

const clickRoute = (route: RouteLocationRaw) => {
  router.push(route)
  // router.replace(route)
}

// const changeScssColor = () => {
//   console.log('getPaletteColor: ', getPaletteColor('color-buffer'))
//   setCssVar('color-buffer', getPaletteColor('secondary'))
// }
</script>

<template>
  <div class="component__interface--card-members">
    <div
      class="content"
      :style="`background: url(${props.image}) center/cover;`"
      @click="clickRoute(props.route)"
    >
      <ReverseCorner :size="80" :color="props.backgroundColor" />
      <div :class="`title ${resolveColor} ${resolveBackground}`" :style="`background-color: $primary`">
        <div class="texts">
          <p class="name">{{ props.title }}</p>
          <p class="surname">sobrenome</p>
          <p class="position">Presidente</p>
          <p class="company">Banrisul</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.component__interface--card-members
{
  width: auto;

  .content
  {
    position: relative;
    margin: 0 auto 20px;
    cursor: pointer;
    $border-radius-card-top: 100px;
    $border-radius-card-button: 100px;
    $border-radius-title: $border-radius-card-button;
    $width-card: 380px;
    $height-card: 600px;

    border-top-left-radius: $border-radius-card-top;
    border-top-right-radius: $border-radius-card-top;
    border-bottom-left-radius: $border-radius-card-button + 5;
    border-bottom-right-radius: $border-radius-card-button + 5;
    height: $height-card;
    width: $width-card;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: 0.3s ease-in-out;

    .title {
      // padding: 40px 60px 50px;
      border-radius: $border-radius-title;
      border-top-left-radius: 0;
      transition: 0.3s ease-in-out;
      // padding: 40px 45px 80px;
      padding: 40px 45px 40px;

      .texts {
        height: 140px;
      }

      p
      {
        margin: 0;

        &.name {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.1em;
        }

        &.surname {
          font-size: 18px;
          font-weight: bold;
        }

        &.position {
          color: $septenary;
          font-size: 14px;
        }

        &.company {
          color: $senary;
          font-size: 13px;
        }

      }

    }

    &:hover
    {
      .title {
        box-shadow: 2px 2px 1px 1px;
      }

      box-shadow: 2px 2px 1px 1px;
    }

    @media only screen and (max-width: $breakpoint-xs) {
      width: 100%;
    }

    @media only screen and (max-width: $breakpoint-sm) {
      .title {

      }

    }

  }

}
</style>
