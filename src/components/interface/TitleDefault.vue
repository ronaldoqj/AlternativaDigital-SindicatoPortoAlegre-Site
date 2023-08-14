<script setup lang="ts">
import IconDefault from 'components/interface/IconDefault.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary',
    require: false
  }
})
</script>

<template>
  <div class="title__default">
    <IconDefault :size="56" :color="props.color" viewBox="0 0 56 30" src="assets/svg/icon-bullet-point-title.svg#bullet_point" />
    <span color="primary" :class="`text-${props.color} title`">{{ props.title }}</span>
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .title__default {
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;

    .title {
      margin-left: 10px;
    }
  }
</style>
