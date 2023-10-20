<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import TabsCategories from 'components/interface/TabsCategories.vue'
import InsuranceItem from 'components/interface/InsuranceItem.vue'
import { reactive } from 'vue'

const state = reactive({
  item: {
    title: 'Clinica Odontológica update',
    subject: 'Desconto de 25% em compras acima de R$ 150,00 update',
    phone: '3325 5036 update',
    mail: 'farmacia@donjoaoxii.com.br update',
    socialMedia: ['facebook', 'instagram', 'twitter', 'whatsapp', 'youtube']
  }
})

</script>

<template>
  <div id="page__services--insurance" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop src="/assets/image/tests/test-6.jpg" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <div id="content__page--service-insurance">
        <TitleDefault class="q-mb-md" title="Convênios" />
        <div class="subtitle q-mb-xl">Os bancários e bancárias sindicalizadas têm, à disposição, uma série de descontos e benefícios em cursos, escolas, universidades, consultas, estabelecimentos esportivos, restaurantes e livrarias. Confira os convênios do SindBancários nas diferentes áreas.</div>
        <TabsCategories title="Filtro por categoia" />
        <h2 class="q-mt-xl q-mb-lg">Dentista</h2>

        <div class="row q-mt-sm q-col-gutter-lg">
          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>

          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
          <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
        </div>

      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__services--insurance
{
  h2 {
    font-size: 25px;
    color: $accent;
    font-weight: bold;
    text-align: center;
    line-height: 1.4em;
  }

  #content__page--service-insurance {
    margin-bottom: 30px;

    .subtitle {
      text-align: justify;
    }
  }
}
</style>
