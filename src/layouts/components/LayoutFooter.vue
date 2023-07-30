<script setup lang="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'

</script>

<template>
  <div id="container__footer" class="text-text-inverse">
    <LayoutSection background="secondary" cornerColor="primary">
        <div id="content__footer">
          <ImageDefault :size="{width: '290px', 'height': '34px'}" src="assets/svg/portal-parceiro-bancariosrs.svg"></ImageDefault>
        </div>
    </LayoutSection>
    <LayoutSection background="primary" cornerColor="accent">
        <div>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
        </div>
    </LayoutSection>
    <LayoutSection background="accent" withoutCurveBootom>
        <div id="content__footer">
          <ImageDefault :size="{width: '290px', height: '34px'}" src="assets/svg/portal-parceiro-bancariosrs.svg"></ImageDefault>
        </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">

#container__footer {
  #content__footer {
    display: flex;
    justify-content: center;
  }
}

</style>
