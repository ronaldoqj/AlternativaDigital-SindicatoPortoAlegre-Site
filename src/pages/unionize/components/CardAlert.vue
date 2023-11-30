<script setup lang="ts">
import { PropType } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

type TColor = 'error' | 'success'

const emits = defineEmits(['clickToSend'])

const props = defineProps({
  // clickToSend: {
  //   type: Boolean,
  //   required: false
  // },
  step: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  titleBtn: {
    type: String,
    default: '',
    require: false
  },
  showBtn: {
    type: Boolean,
    default: false,
    required: false
  },
  color: {
    type: String as PropType<TColor>,
    require: true
  },
  rotateArrow: {
    type: Boolean,
    default: false,
    required: false
  }
})

const triggerClickToSend = () => {
  console.log('click triggerClickToSend')
  emits('clickToSend', true)
}
// const state = {
//   iconFile: IItemPublication = {
//     subtitle: 'Congresso Fetrafi-RS',
//     title: 'Edital de convocação de congresso Estadual',
//     src: '/assets/svg/icon-pdf.svg#icon_pdf',
//     link: ''
//   }
// }
</script>

<template>
  <div :class="`unionize__component--card-alert ${props.color}`">
    <div :class="`dialog--box`">
      <div class="dialog--content">
        <IconDefault :size="70" class="icon--default" :color="props.color" viewBox="0 0 103 106" src="/assets/svg/icon-pdf.svg#icon_pdf" />
        <div class="q-px-md content--slot">
          <p class="click--paragraphe">Clique para</p>

            <slot></slot>

        </div>
        <IconDefault :size="70" :class="`icon--default ${props.rotateArrow ? 'rotate' : ''}`" :color="props.color" viewBox="0 0 52.52 67.38" src="/assets/svg/arrows.svg#arrows" />
      </div>
      <div @click="triggerClickToSend" :class="`extend ${props.showBtn ? 'show-btn' : ''}`">
        {{ titleBtn }}
      </div>
    </div>
  </div>
  <!-- <div :class="`unionize__component--card-alert ${props.cardStyle} ${props.color}`">
    <div :class="`dialog--box`">
      <div class="dialog--content">
        <IconDefault :size="70" class="icon--default" :color="props.color" viewBox="0 0 103 106" src="/assets/svg/icon-pdf.svg#icon_pdf" />
        <div class="q-px-md">
          <p class="click--paragraphe">Clique para</p>
          <p>{{ props.title }}</p>
        </div>
        <IconDefault :size="70" :class="`icon--default ${props.rotateArrow ? 'rotate' : ''}`" :color="props.color" viewBox="0 0 52.52 67.38" src="/assets/svg/arrows.svg#arrows" />
      </div>
      <div v-if="props.cardStyle === 'extend'" :class="`extend ${props.showBtn ? 'show-btn' : ''}`">
        {{ titleBtn }}
      </div>
    </div>
  </div> -->
</template>

<style lang="scss">
.unionize__component--card-alert
{
  $border-radius: 40px;
  color: $text-inverse;

  font-weight: bold;
  font-size: 20px;

  .dialog--box
  {
    cursor: pointer;

    .dialog--content
    {
      position: relative;
      border-radius: $border-radius;
      padding: 50px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // margin: 60px auto;
      // max-width: 800px;
      z-index: 1;
      transition: 0.2s ease-in-out;

      .content--slot {
        flex-grow: 1;
        max-width: 600px;
      }

      @media only screen and (min-width: $breakpoint-xs)
      {
        padding: 100px 60px;
      }

      p {
        margin: 0;

        &.click--paragraphe {
          font-weight: normal;
          font-size: 14px;
        }
      }

      .rotate {
        rotate: 180deg;
      }
    }

  }

  &.error
  {
    .dialog--box
    {
      .dialog--content {
        background-color: $primary;
      }
      .extend {
        background-color: $accent;
      }
    }
  }

  &.success
  {
    .dialog--box
    {
      .dialog--content {
        background-color: $nonary;
      }
      .extend {
        background-color: $octal;
      }
    }
  }

  .dialog--box
  {
    .extend
    {
      position: relative;
      // margin-top: - $border-radius;
      // padding: 60px 20px 20px;
      height: 0;
      text-align: center;
      background: black;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      z-index: 0;
      transition: 0.2s ease-in-out;

      &.show-btn {
        margin-top: - $border-radius;
        padding: 60px 20px 20px;
        height: auto;
      }

      &:hover {
        padding: 60px 20px 25px;
      }
    }
  }
}
</style>
