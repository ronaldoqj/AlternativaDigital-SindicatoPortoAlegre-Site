<script setup lang="ts">
import { PropType } from 'vue'

type TFormType = 'number' | 'textarea' | 'time' | 'text' | 'password' | 'email' | 'search' | 'tel' | 'file' | 'url' | 'date' | undefined

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
    type: String as PropType<TFormType>,
    default: 'text',
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
      :type="props.type"
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
      textarea {
        height: 195px;
      }
    }
  }

}
</style>
