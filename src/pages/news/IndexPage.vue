<script setup lang="ts">
import { getValidImage, baseURL } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import VideoDefault from 'components/interface/VideoDefault.vue'
import AudioDefault from 'components/interface/AudioDefault.vue'
import { computed, onMounted, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { INews, IResponseNews, IResponseRelated, TNewsLayers } from 'src/types/INews'
import NewsService from 'src/services/NewsService'
import { AxiosError } from 'axios'
import SkeletonNews from 'components/interface/skeletons/SkeletonNews.vue'
import ShareButtons from 'src/components/interface/ShareButtons.vue'

const route = useRoute()
const state = reactive({
  control: {
    showContent: false
  },
  news: null as null | INews,
  idNews: null as null | number,
  layersNews: [] as TNewsLayers[],
  relatedNews: {
    list: [] as INews[],
    perPage: 6
  }
})

const getRelatedList = () => {
  NewsService.related({ notNews: state.idNews, perPage: state.relatedNews.perPage })
    .then((response:IResponseRelated) => {
      // console.log('getRelatedList', response)
      response.data.forEach((element: INews) => {
        state.relatedNews.list.push(element)
      })
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const getNews = () => {
  NewsService.get({ id: state.idNews })
    .then((response:IResponseNews) => {
      console.log('getNews', response)
      state.control.showContent = true
      state.news = response.data
      getRelatedList()
      definesNewsLayers()
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const definesNewsLayers = () => {
  /** First Layer */
  if (state.news?.image_news && state.news.position_image_news === 'BeforeTitle') {
    state.layersNews.push('image_news')
  }
  if (state.news?.video_news && state.news.position_video_news === 'BeforeTitle') {
    state.layersNews.push('video_news')
  }
  if (state.news?.audio_news && state.news.position_audio_news === 'BeforeTitle') {
    state.layersNews.push('audio_news')
  }
  /** Titles */
  state.layersNews.push('titles')

  /** Third Layer */
  if (state.news?.image_news && state.news.position_image_news === 'BeforeText') {
    state.layersNews.push('image_news')
  }
  if (state.news?.video_news && state.news.position_video_news === 'BeforeText') {
    state.layersNews.push('video_news')
  }
  if (state.news?.audio_news && state.news.position_audio_news === 'BeforeText') {
    state.layersNews.push('audio_news')
  }
  /** Text */
  state.layersNews.push('text')

  if (state.news?.image_news && state.news.position_image_news === 'AfterText') {
    state.layersNews.push('image_news')
  }
  if (state.news?.video_news && state.news.position_video_news === 'AfterText') {
    state.layersNews.push('video_news')
  }
  if (state.news?.audio_news && state.news.position_audio_news === 'AfterText') {
    state.layersNews.push('audio_news')
  }

  // console.log('newsLayers', state.layersNews)
}

const computedLayout = computed(() => {
  return route.params
})

const init = () => {
  if (route.params && route.params.id.length) {
    if (!isNaN(route.params.id as unknown as number)) {
      state.idNews = Number(route.params.id)
      getNews()
    } else {
      // ToDo error
    }
  }
}

const resetNews = () => {
  state.control.showContent = false
  state.news = null
  state.idNews = null
  state.layersNews = []
  state.relatedNews = {
    list: [],
    perPage: 6
  }
}

watch(computedLayout, (newValue) => {
  // console.log('router News changed', newValue)
  if (Object.keys(newValue).length) {
    resetNews()
    init()
  }
})

onMounted(() => {
  init()
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <div class="align-title">
          <TitleDefault title="Notícia" />
          <ShareButtons v-if="state.control.showContent" :description="state.news?.call" />
        </div>

        <!-- <div class="fb-share-button"
          data-href="http://novo.sindbancarios.nodejsng15f06.uni5.net"
          data-layout="button_count">
        </div> -->

        <!-- <button @click="socialMediaShare('facebook', router.currentRoute.value.fullPath)">Click Facebook</button>
        <button @click="socialMediaShare('twitter', twitterUrl())">Click twitter</button>
        <button @click="socialMediaShare('whatsapp', whatsappUrl())">Click whatsapp</button> -->

        <div v-if="!state.control.showContent" class="q-mt-xl">
          <SkeletonNews />
        </div>
        <div v-else class="q-mb-xl">
          <div v-for="(layer, index) in state.layersNews" :key="index">
            <div v-if="layer === 'image_news'" class="layer--image">
              <ImageDefault class="q-my-lg" :src="getValidImage(state.news as INews, 'imageNews')"></ImageDefault>
            </div>
            <div v-if="layer === 'video_news'" class="layer--video"> <VideoDefault :src="(state.news?.video_news as string)" /> </div>
            <div v-if="layer === 'audio_news'" class="layer--audio">
              <AudioDefault
                :src="`${baseURL}${state.news?.audio_news?.path}/${state.news?.audio_news?.file_name}`"
              />
            </div>
            <div v-if="layer === 'titles'" class="layer--title">
              <h2>{{ state.news?.topper }}</h2>
              <h1>{{ state.news?.title }}</h1>
            </div>
            <div v-if="layer === 'text'" class="layer--text" v-html="state.news?.text"></div>
          </div>
        </div>

        <div class="related__publications" v-if="state.relatedNews.list.length">
          <RelatedPublications :list="state.relatedNews.list" />
        </div>
      </LayoutSection>
    </div>
  </q-page>
</template>

<style lang="scss">
#page__news
{
  .align-title {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  }

  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

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

  h4 {
    margin: 5px 0;
    font-size: 25px;
    font-weight: bold;
    line-height: 1.2em;
    color: $accent;
  }

  p {
    text-align: justify;
  }

  @media only screen and (min-width: $breakpoint-sm)
  {
    .images__floats
    {
      width: 400px;

      &.left {
        float: left;
        margin-right: 10px;
      }

      &.right {
        float: right;
        margin-left: 10px;
      }
    }
  }

  .related__publications {
    clear: both;
  }
}
</style>
