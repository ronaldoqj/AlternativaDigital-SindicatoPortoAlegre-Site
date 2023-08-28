<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
  <div id="page__services" class="col">
      <TitleDefault title="Serviços" />
      <div id="content__page--service">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-lg-6"><CardButton src="/assets/image/tests/test-1.jpg" title="Convênios" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton src="/assets/image/tests/test-3.jpg" title="Arquivo Histórico" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton src="/assets/image/tests/test-5.jpg" title="Espaços" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton src="/assets/image/tests/test-6.jpg" title="Jurídico" /></div>
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<style lang="scss">
#page__services
{
  #content__page--service {
    margin: 30px 0;
  }
}
</style>
