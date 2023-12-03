<script setup lang="ts">
// import { PropType } from 'vue'

const props = defineProps({
  // modelValue: {
  //   type: Object as PropType<string | number | null | undefined>,
  //   default: () => ({})
  // },
  options: {
    type: Array,
    required: true
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
  },
  mask: {
    type: String,
    require: false
  },
  toPrint: {
    type: Boolean,
    require: false
  },
  required: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div :class="`page__contact--component-input-select ${props.type} ${props.readOnly ? 'read__only' : ''} ${props.required ? 'required' : ''} ${props.toPrint ? 'to--print' : ''}`">
    <span class="label__form">{{ props.label }}</span>
    <div class="box__input">
      <q-select
        model-value="modelValue"
        :options="props.options"
        @update:model-value="(event) => $emit('update:modelValue', event)"
        :readonly="props.readOnly"
        borderless
        :name="props.name"
        :class="props.readOnly ? 'read__only--input' : ''"
        :mask="props.mask"
        dense
        >
      </q-select>
    </div>
  </div>
</template>

<style lang="scss">
.page__contact--component-input-select
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

    span {
      color: $accent;
    }

    &.textarea {
      height: 200px;
    }
  }

  &.required
  {
    .box__input {
      border: solid 1px $primary;
    }
  }

  &.read__only
  {
    border: 0;
    box-shadow: 0px 3px 4px #fff;
    padding: 0 10px;

    .box__input {
      border: 0;
      padding: 0 10px;
      box-shadow: 0px 3px 4px #fff;
    }

    span {
      font-weight: 400;
    }

    .read__only--input
    {
      font-size: 18px;

      input {
        font-weight: 400;
      }
    }
  }

  &.to--print
  {
    .label__form {
      font-size: 12px;
    }

    .box__input
    {
      height: 20px;

      .q-field {
        font-size: 12px;
        height: 20px;

        .q-field__control {
          margin-top: -10px;
          font-size: 12px;
        }
      }

      input {
        color: $accent;
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
}
</style>
