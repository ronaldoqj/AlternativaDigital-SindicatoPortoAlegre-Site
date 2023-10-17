<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  modelValue: {
    type: String as PropType<string | number | null | undefined>,
    default: () => ('')
  },
  label: {
    type: String,
    default: '',
    require: false
  },
  type: {
    type: String,
    default: '',
    require: false
  },
  name: {
    type: String,
    required: true
  },
  readOnly: {
    type: Boolean,
    default: false,
    require: false
  }
})
</script>

<template>
  <div class="page__contact--component-input">
    <span class="label__form">{{ props.label }}</span>
    <div :class="`box__input ${props.type} ${props.readOnly ? 'read__only' : ''}`">
      <q-input
        :model-value="(modelValue as string | null)"
        @update:model-value="(event) => $emit('update:modelValue', event)"
        :readonly="props.readOnly"
        borderless
        :name="props.name"
        :class="props.readOnly ? 'read__only--input' : ''"
        dense
        >
      </q-input>
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
    transition: 0.2s ease-in-out;

    input {
      color: $accent;
      font-weight: normal;
    }

    &.textarea {
      height: 200px;
    }

    &.read__only {
      border: 0;
      box-shadow: 0px 3px 4px #fff;
      padding: 0 10px;

      .read__only--input
      {
        font-size: 18px;

        input {
          font-weight: bold;
        }
      }
    }
  }

}
</style>
