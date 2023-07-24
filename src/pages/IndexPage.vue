<template>
  <q-page class="row justify-evenly">
    <div id="page__content" class="col">
      <LayoutSection type="banner" background="primary" cornerColor="tertiary">
        <SectionHighlights />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="secondary">
        <SectionDefault />
      </LayoutSection>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LayoutSection from 'components/layout/LayoutSection.vue'
import SectionHighlights from 'components/interface/SectionHighlights.vue'
import SectionDefault from 'components/interface/SectionDefault.vue'
</script>

<style lang="scss">
</style>
