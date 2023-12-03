<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    require: true
  },
  label: {
    type: String,
    default: '',
    require: false
  },
  color: {
    type: String,
    default: 'primary',
    require: false
  },
  size: {
    type: String,
    default: 'lg',
    require: false
  },
  disable: {
    type: Boolean,
    default: false,
    require: false
  },
  required: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <q-checkbox
    class="page__contact--component-check-box"
    :label="props.label"
    :model-value="(modelValue as boolean)"
    @update:model-value="(event) => $emit('update:modelValue', event)"
    :val="true"
    :color="props.color"
    :size="props.size"
    :disable="props.disable" />
</template>

<style lang="scss">
.page__contact--component-check-box
{
  //
}
</style>
