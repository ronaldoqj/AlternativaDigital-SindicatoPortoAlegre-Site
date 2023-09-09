<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
    require: false
  },
  type: {
    type: String,
    default: '',
    require: false
  }
})
</script>

<template>
  <div class="page__contact--component-input">
    <span class="label__form">{{ props.title }}</span>
    <div :class="`box__input ${props.type}`">
      <q-input dense borderless model-value=""></q-input>
    </div>
  </div>
</template>

<style lang="scss">
.page__contact--component-input
{
  .label__form {
    color: $text-inverse;
  }

  .box__input
  {
    border-radius: 40px;
    width: auto;
    height: 40px;
    background-color: $tertiary;
    padding: 0 20px;

    &.textarea {
      height: 200px;
    }
  }

}
</style>
