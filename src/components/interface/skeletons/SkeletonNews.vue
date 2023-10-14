<script setup lang="ts">
</script>

<template>
  <div class="component__skeleton--news">
  <q-skeleton type="text" height="50px" width="35%" class="text-subtitle1" />
  <q-skeleton type="text" height="80px" class="text-title-line-1" />
  <q-skeleton type="text" height="80px" class="text-title-line-2" />

  <div class="row items-start no-wrap q-mt-sm">
    <q-skeleton size="495px" class="image" square animation="fade" />

    <div class="col q-pl-sm content">
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
      <q-skeleton type="text" height="30px" square animation="fade" />
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  .component__skeleton--news {
    .text-title-line-1 {
      margin-top: -10px;
    }
    .text-title-line-2 {
      margin-top: -30px;
    }

    .image {
      border-radius: 40px;
    }

    .content {
      margin-top: -8px;
    }
  }
</style>
