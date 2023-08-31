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
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-1.jpg" title="Jurídico" :route="{name: 'departmentsLegal'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-3.jpg" title="Saúde e condições de trabalho" :route="{name: 'departmentsHealthAndWorkingConditions'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-5.jpg" title="Juventude e gênero" :route="{name: 'departmentsYouthAndGender'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-6.jpg" title="Diversidade e combate ao racismo" :route="{name: 'departmentsDiversityAndCombatingRacism'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-1.jpg" title="Esporte e lazer" :route="{name: 'departmentsSportsAndLeisure'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-3.jpg" title="Cultura e sustentabilidade" :route="{name: 'departmentsCultureAndSustainability'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-5.jpg" title="Aposentados e seguridade social" :route="{name: 'departmentsRetireesAndSocialSecurity'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-6.jpg" title="Formação" :route="{name: 'departmentsFormation'}" /></div>
          <div class="col-xs-12 col-lg-6"><CardButton image="/assets/image/tests/test-6.jpg" title="Financeiras e terceirizados do ramo financeiro" :route="{name: 'departmentsFinancialInstitutionsAndOutsourcedFinancialSector'}" /></div>
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
