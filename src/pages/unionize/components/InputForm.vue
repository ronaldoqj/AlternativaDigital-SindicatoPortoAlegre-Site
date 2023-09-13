<script setup lang="ts">
const props = defineProps({
  label: {
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
    <span class="label__form">{{ props.label }}</span>
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
    font-size: 15px;
    color: $quinary;
  }

  .box__input
  {
    border-radius: 40px;
    width: auto;
    height: 40px;
    border: solid 1px $quinary;
    padding: 0 20px;
    box-shadow: 0px 3px 4px #9E9B9B60;

    input {
      color: $accent;
    }

    &.textarea {
      height: 200px;
    }
  }

}
</style>
