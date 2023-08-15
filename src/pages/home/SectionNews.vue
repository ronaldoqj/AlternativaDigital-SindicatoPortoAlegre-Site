<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'

const subject = 'Assembleia Legislativa'
const title = 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú'
const description = 'Cerca de dois meses após ser anunciado como futuro presidente do Banrisul pelo governador Eduar Leite, o nome de Fulano Beltrano Ciclano finalmente foi pautado na Comissão de Finanças da Assembleia Legislativa...'
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Notícias" color="primary" />
    <div class="row q-mb-md">
      <div class="col-xs-12 col-lg-6 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" :highlights="true" /></div>
      <div class="col-xs-12 col-lg-6 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" :highlights="true" /></div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
    </div>

    <div class="box__btn--more">
      <ButtonDefault rounded unradiusTopLeft noCaps title="Mais notícias" color="primary" :size="{maxWidth: '400px'}" style="flex:max-content;" />
    </div>
  </div>
</template>

<style lang="scss">
  .box__btn--more
  {
    display: flex;
    justify-content: center;
  }
</style>
