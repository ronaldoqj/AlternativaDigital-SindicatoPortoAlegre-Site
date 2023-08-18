<template>
  <q-page class="row justify-evenly">
    <div id="page__news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Notícia" />

        <h2>Assunto da notícia</h2>
        <h1>Título da Notícia</h1>

        <div class="content">Content...</div>

        <RelatedPublications />
      </LayoutSection>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'pages/news/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
</script>

<style lang="scss">
#page__news
{
  h2 {
    font-size: 14px;
    color: $quinary;
    line-height: 1.25em;
    margin: 45px 0 10px;
  }

  h1 {
    font-size: 54px;
    line-height: 1.15em;
    color: $primary;
    font-weight: bold;
    margin: 0 0 30px;
  }
}
</style>
