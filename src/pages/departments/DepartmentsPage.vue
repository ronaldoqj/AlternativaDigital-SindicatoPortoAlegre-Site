<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
  <div id="page__departments" class="col">
      <TitleDefault title="Departamentos" />
      <div id="content__page--service">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/001_Juridico.png" title="Jurídico" :route="{name: 'departmentsLegal'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/002_Saude.png" title="Saúde e condições de trabalho" :route="{name: 'saude'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/003_Juventude.png" title="Juventude e gênero" :route="{name: 'juventude'}" /></div>

          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/004_Diversidade.png" title="Diversidade e combate ao racismo" :route="{name: 'diversidade'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/005_Esporte.png" title="Esporte e lazer" :route="{name: 'esporte'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/006_Cultura.png" title="Cultura e sustentabilidade" :route="{name: 'cultura'}" /></div>

          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/007_Aposentados.png" title="Aposentados e seguridade social" :route="{name: 'aposentados'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/008_Formacao.png" title="Formação" :route="{name: 'formacao'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/009_Financeiras.png" title="Financeiras e terceirizados do ramo financeiro" :route="{name: 'financeiras'}" /></div>

          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/apresentation/departamentos/010_Comunicacao.jpg" title="Comunicaçao" :route="{name: 'comunicacao'}" /></div>
        </div>
      </div>
    </div>
  </LayoutSection>
</template>

<style lang="scss">
#page__departments
{
  #content__page--service {
    margin: 30px 0;
  }
}
</style>
