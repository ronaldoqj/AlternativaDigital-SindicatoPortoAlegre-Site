<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__services" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Serviços" />
        <div id="content__page--service">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-lg-6"><CardButton src="assets/image/tests/test-1.jpg" title="Convênios" /></div>
            <div class="col-xs-12 col-lg-6"><CardButton src="assets/image/tests/test-3.jpg" title="Arquivo Histórico" /></div>
            <div class="col-xs-12 col-lg-6"><CardButton src="assets/image/tests/test-5.jpg" title="Espaços" /></div>
            <div class="col-xs-12 col-lg-6"><CardButton src="assets/image/tests/test-6.jpg" title="Jurídico" /></div>
          </div>
        </div>
      </LayoutSection>
    </div>
  </q-page>
</template>

<style lang="scss">
#page__services
{
  #content__page--service {
    margin: 30px 0;
  }
}
</style>
