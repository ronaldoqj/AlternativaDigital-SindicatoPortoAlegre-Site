<template>
  <q-page class="row justify-evenly">
    <div id="page__article" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Artigo" />

        <h2>Assunto do artigo</h2>
        <h1>Título do artigo</h1>

        <div class="content">Content...</div>

        <div class="author">
          <q-avatar size="128px" class="avatar">
            <img style="object-fit: cover;" src="/assets/image/tests/test-1.jpg">
          </q-avatar>
          <div class="texts">
            <h3 class="name">Fulano da Siva</h3>
            <h4 class="role">Departamentos de assuntos estratégicos</h4>
          </div>
        </div>

        <RelatedPublications title="Artigos relacionados" />
      </LayoutSection>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
</script>

<style lang="scss">
#page__article
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

  .author
  {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .texts
    {
      margin-left: 10px;

      h3 {
        font-size: 18px;
        color: $primary;
        margin: 0 0 6px;
        line-height: 1.1em;
      }

      h4 {
        font-size: 14px;
        color: $text;
        margin: 0;
        line-height: 1.1em;
      }
    }
  }
}

</style>
