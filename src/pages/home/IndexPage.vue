<template>
  <q-page class="row justify-evenly">
    <div id="page__content" class="col">
      <LayoutSection type="banner" background="primary" cornerColor="tertiary">
        <SectionHighlights />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="accent">
        <SectionNews />
      </LayoutSection>
      <LayoutSection background="accent" cornerColor="quaternary">
        <SectionVideos />
      </LayoutSection>
      <LayoutSection background="quaternary" cornerColor="tertiary" twoCorners>
        <SectionServices />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="primary" withoutCurveTop>
        <SectionPublications />
      </LayoutSection>
      <LayoutSection background="primary" cornerColor="tertiary">
        <SectionAgenda />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="secondary">
        <SectionSocialMedia />
      </LayoutSection>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LayoutSection from 'components/layout/LayoutSection.vue'
import SectionHighlights from 'pages/home/SectionHighlights.vue'
import SectionNews from 'pages/home/SectionNews.vue'
import SectionVideos from 'pages/home/SectionVideos.vue'
import SectionServices from 'pages/home/SectionServices.vue'
import SectionPublications from 'pages/home/SectionPublications.vue'
import SectionAgenda from 'pages/home/SectionAgenda.vue'
import SectionSocialMedia from 'pages/home/SectionSocialMedia.vue'
</script>

<style lang="scss">
</style>
