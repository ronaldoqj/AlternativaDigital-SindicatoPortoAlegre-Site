<script setup lang="ts">
import { baseURL } from 'src/helpers/helpers'
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
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/convenios.jpg`" title="Convênios" :route="{name: 'servicesInsurance'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/arquivo-historico.jpg`" title="Arquivo Histórico" :route="{name: 'servicesHistoryFile'}" /></div>
          <!-- <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-5.jpg" title="Espaços" :route="{name: 'servicesSpaces'}" /></div> -->
          <div class="col-xs-12 col-lg-6"><CardButton :image="`${baseURL}temporary/images/services/juridico.jpg`" title="Jurídico" :route="{name: 'servicesLegal'}" /></div>
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
