<script setup lang="ts">
import IconDefault from 'components/interface/IconDefault.vue'

const props = defineProps({
  src: {
    type: String,
    requied: true
  },
  colorIcon: {
    type: String,
    default: 'tertiary',
    require: false
  },
  iconSize: {
    type: Number,
    default: 90,
    require: false
  },
  iconViewBox: {
    type: String,
    default: '0 0 24 24',
    require: false
  }
})
</script>

<template>
  <!-- 0 0 90 100 -->
  <q-img :ratio="16/9" class="component__card--tumb-video" :src="props.src">
    <div class="box__icon--play flex flex-center">
      <IconDefault class="icon--test" :size="iconSize" :color="props.colorIcon" :viewBox="iconViewBox" src="/assets/svg/icon-play.svg#icon_play" />
    </div>
  </q-img>
</template>

<style lang="scss">
.component__card--tumb-video
{
  $background-color:  $dark-hover-90;
  border-radius: 20px;
  width: 100%;

  .box__icon--play
  {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;

    background: none;
    transition: 500ms ease-in-out;
    cursor: pointer;

    span {
      transition: 500ms ease-in-out;
      max-width: 60%;
      max-height: 60%;
    }

    &:hover
    {
      background: $background-color;
      span {
        opacity: 0.8;
      }
    }
  }
}
</style>
