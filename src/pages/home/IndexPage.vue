<template>
  <q-page class="row justify-evenly">
    <div id="page__content" class="col">
      <LayoutSection v-if="state.sectionBanners.length" type="banner" background="primary" cornerColor="tertiary">
        <SectionBanner :news="state.sectionBanners" />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="accent" :type="state.sectionBanners.length ? 'normal' : 'top'">
        <SectionNews :news="state.sectionNews" />
      </LayoutSection>
      <LayoutSection background="accent" cornerColor="quaternary">
        <SectionVideos />
      </LayoutSection>
      <LayoutSection background="quaternary" cornerColor="primary">
        <SectionCampaigns />
      </LayoutSection>

      <!-- <LayoutSection background="quaternary" cornerColor="tertiary" twoCorners>
        <SectionCampaigns />
      </LayoutSection> -->
      <!-- <LayoutSection background="tertiary" cornerColor="primary" withoutCurveTop>
        <SectionPublications />
      </LayoutSection> -->
      <!-- <LayoutSection background="primary" cornerColor="tertiary">
        <SectionAgenda />
      </LayoutSection> -->

      <LayoutSection background="primary" cornerColor="tertiary">
        <SectionAgenda />
      </LayoutSection>
      <LayoutSection background="tertiary" cornerColor="secondary">
        <SectionDepartments />
      </LayoutSection>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import SectionBanner from 'pages/home/SectionBanner.vue'
import SectionNews from 'pages/home/SectionNews.vue'
import SectionVideos from 'pages/home/SectionVideos.vue'
import SectionCampaigns from 'pages/home/SectionCampaigns.vue'
// import SectionPublications from 'pages/home/SectionPublications.vue'
import SectionAgenda from 'pages/home/SectionAgenda.vue'
import SectionDepartments from 'pages/home/SectionDepartments.vue'
import { AxiosError } from 'axios'
import NewsService from 'src/services/NewsService'
import { onMounted, reactive } from 'vue'

const state = reactive({
  sectionBanners: [],
  sectionNews: {}
})

onMounted(() => {
  // console.log('envRouterModeAPI', process.env.API)
  NewsService.listHome({})
    .then((response:any) => {
      state.sectionBanners = response.data.banners
      state.sectionNews = {
        highlights: response.data.highlights,
        geral: response.data.geral
      }
      // console.log('initial response', response.data)
      // console.log('initial response2', state.sectionNews)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
})
</script>

<style lang="scss">
</style>
