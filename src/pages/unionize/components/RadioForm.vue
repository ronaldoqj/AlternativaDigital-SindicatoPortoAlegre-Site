<script setup lang="ts">
import { PropType, computed, reactive, ref } from 'vue'

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
  gender: {
    type: Boolean,
    default: false,
    required: false
  },
  readOnly: {
    type: Boolean,
    default: false,
    require: false
  },
  size: {
    type: String,
    default: 'xl',
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

const shape = ref('')
const state = reactive({
  labels: {
    first: 'Não',
    last: 'Sim'
  }
})

const firstLabel = computed((): string => {
  return props.gender ? 'Masculino' : state.labels.first
})
const lastLabel = computed((): string => {
  return props.gender ? 'Feminino' : state.labels.last
})

const showFirstRadio = computed((): boolean => {
  let show = true
  if (props.readOnly && shape.value === 'y') { show = false }
  return show
})
const showLastRadio = computed((): boolean => {
  let show = true
  if (props.readOnly && shape.value === 'n') { show = false }
  return show
})

</script>

<template>
  <div :class="`page__contact--component-radio ${props.required ? 'required' : ''} ${props.toPrint ? 'to--print' : ''}`">
    <span class="label__form">{{ props.label }}</span>
    <div :class="`box__input`">
      <q-radio :size="props.size" :model-value="(modelValue as string | null)" @update:model-value="(event) => $emit('update:modelValue', event)" :keep-color="props.required" color="primary" val="n" :label="firstLabel" v-if="showFirstRadio" />
      <q-radio :size="props.size" :model-value="(modelValue as string | null)" @update:model-value="(event) => $emit('update:modelValue', event)" :keep-color="props.required" color="primary" val="y" :label="lastLabel" v-if="showLastRadio" />
    </div>
  </div>
</template>

<style lang="scss">
.page__contact--component-radio
{
  .label__form {
    color: $text-inverse;
    font-size: 15px;
    color: $quinary;
  }

  .box__input
  {
    width: auto;
    margin: -10px;

    .q-radio__inner {
      color: $quinary;
    }

    .q-radio__label {
      color: $quinary;
      margin-left: -8px;
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

      .q-field__control {
        height: 20px;
      }

      .q-radio__label {
        font-size: 12px;
      }
    }
  }
}
</style>
