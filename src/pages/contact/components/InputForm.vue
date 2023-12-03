<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  modelValue: {
    type: String as PropType<string | number | null | undefined>,
    default: () => ('')
  },
  title: {
    type: String,
    default: '',
    require: false
  },
  name: {
    type: String,
    required: true
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
      <q-input
      :model-value="(modelValue as string | null)"
      @update:model-value="(event) => $emit('update:modelValue', event)"
      borderless
      :name="props.name"
      dense
      ></q-input>
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
