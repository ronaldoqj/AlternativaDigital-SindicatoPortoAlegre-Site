<script setup lang="ts">
</script>

<template>
  <div class="row fit justify-start no-wrap component__skeleton--banner">
    <div class="col-12">
      <q-spinner
        color="primary"
        size="6em"
        :thickness="2"
        class="content"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component__skeleton--banner {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin-top: -70px;
  }
}
</style>
