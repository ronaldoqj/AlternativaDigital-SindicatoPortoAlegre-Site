<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const props = defineProps({
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
  <div class="page__contact--component-radio">
    <span class="label__form">{{ props.label }}</span>
    <div :class="`box__input`">
      <q-radio size="xl" v-model="shape" color="primary" val="n" :label="firstLabel" v-if="showFirstRadio" />
      <q-radio size="xl" v-model="shape" color="primary" val="y" :label="lastLabel" v-if="showLastRadio" />
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

}
</style>
