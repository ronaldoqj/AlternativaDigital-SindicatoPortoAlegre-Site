<script setup lang="ts">
// import LayoutSection from 'layouts/components/LayoutSection.vue'
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    require: false
  }
})
</script>

<template>
  <!-- Preencher os dados -->
  <div :class="`component__unionize--separator-step bg-${color}`" ></div>
</template>

<style lang="scss">
.component__unionize--separator-step
{
  $size: 30px;
  width: $size;
  height: 1px;
}
</style>
