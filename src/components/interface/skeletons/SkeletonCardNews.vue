<script setup lang="ts">
</script>

<template>
  <div class="component__skeleton--news">
  <!-- <q-skeleton type="text" height="50px" width="35%" class="text-subtitle1" /> -->

  <!-- <q-skeleton type="text" height="80px" class="text-title-line-midle" /> -->

  <div class="row no-wrap q-mt-sm">
    <div class="col-12">
      <q-skeleton height="175px" width="100%" class="image" square animation="fade" />
    </div>
  </div>
  <div class="row no-wrap q-mt-sm">
    <div class="col-12 content">
      <q-skeleton type="text" height="30px" class="text-title" square animation="fade" />
      <q-skeleton type="text" height="55px" class="text-title text-title-line-first" />
      <q-skeleton type="text" height="55px" class="text-title text-title-line-midle" />
      <q-skeleton type="text" width="30%" height="30px" class="text-title text-title-line-last" square animation="fade" />
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  .component__skeleton--news
  {
    .text-title
    {
      margin: 0 10px;

      &.text-title-line-first {
        margin-top: -10px;
      }
      &.text-title-line-midle {
        margin-top: -20px;
        margin-bottom: -20px;
      }

      &.text-title-line-last {
        margin-top: 15px;
      }
    }

    .image {
      border-radius: 40px;
    }
  }
</style>
