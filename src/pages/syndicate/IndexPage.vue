<script setup lang="ts">
// import LayoutSection from 'layouts/components/LayoutSection.vue'
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__syndicate" class="col">
      <router-view />
    </div>
  </q-page>
</template>

<style lang="scss">
#page__syndicate
{
  #content__page--service {
    margin: 30px 0;
  }
}
</style>
