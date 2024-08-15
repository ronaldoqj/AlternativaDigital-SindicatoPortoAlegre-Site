<script setup lang="ts">
import { computed, onMounted, reactive, watch, onServerPrefetch } from 'vue'
import { useRoute } from 'vue-router'
import { AxiosError } from 'axios'
import { date, useMeta } from 'quasar'
import { getValidImage, baseURL } from 'src/helpers/helpers'
import NewsService from 'src/services/NewsService'
import IconDefault from 'components/interface/IconDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import VideoDefault from 'components/interface/VideoDefault.vue'
import AudioDefault from 'components/interface/AudioDefault.vue'
import { INews, IResponseNews, IResponseRelated, TNewsLayers } from 'src/types/INews'
import SkeletonNews from 'components/interface/skeletons/SkeletonNews.vue'
import ShareButtons from 'src/components/interface/ShareButtons.vue'
import { useStructureStore } from 'stores/structure-store'

const route = useRoute()
const state = reactive({
  shortDates: {
    months: [
      'de janeiro de',
      'de fevereiro de',
      'de março de',
      'de abril de',
      'de maio de',
      'de junho de',
      'de julho de',
      'de agosto de',
      'de setembro de',
      'de outubro de',
      'de novembro de',
      'de dezembro de'
    ]
  },
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
      state.control.showContent = true
      state.news = response.data as INews
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
  if (Object.keys(newValue).length) {
    resetNews()
    init()
  }
})

defineOptions({
  // preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
  preFetch ({ store, currentRoute }) {
    const applicationName = 'Sindicato dos Bancários de Porto Alegre e Região - SindBancários'
    const id = Number(currentRoute.params.id)
    console.log('--------------------------------------- start', applicationName)
    console.log('currentRoute.name', currentRoute.name)
    console.log('currentRoute.fullPath', currentRoute.fullPath)
    console.log(store)
    console.log('_______________________________________ end')
    return useStructureStore().fetchItem(currentRoute.fullPath, currentRoute.name as string, id)
  }
})

onServerPrefetch(() => {
  console.log('onServerPrefetch', useStructureStore().$state)
  useMeta(useStructureStore().$state.metaTags)
})

onMounted(async () => {
  init()
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <div class="align-title">
          <TitleDefault title="Notícia" />
          <ShareButtons v-if="state.control.showContent" :title="state.news?.title" :description="state.news?.call" :image="`${state.news?.image_news?.path}/${state.news?.image_news?.file_name}`" />
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
              <img :src="getValidImage(state.news as INews, 'imageNews')" alt="">
              <!-- <ImageDefault class="q-my-lg" :src="getValidImage(state.news as INews, 'imageNews')"></ImageDefault> -->
            </div>
            <div v-if="layer === 'video_news'" class="layer--video"> <VideoDefault :src="(state.news?.video_news as string)" /> </div>
            <div v-if="layer === 'audio_news'" class="layer--audio">
              <AudioDefault
                :src="`${baseURL}${state.news?.audio_news?.path}/${state.news?.audio_news?.file_name}`"
              />
            </div>
            <div v-if="layer === 'titles'" class="layer--title">
              <div class="box-subject">
                <h2>{{ state.news?.topper }}</h2>
                <div class="box-date">
                  <IconDefault :size="24" class="icon--default" :color="'quinary'" viewBox="0 5 56 30" src="/assets/svg/icon-calendar.svg#calendar" />
                  {{ date.formatDate(state.news?.created_at, 'DD MMMM YYYY', state.shortDates) }}
                  <IconDefault :size="21" class="icon--default icon--clock" :color="'quinary'" viewBox="0 0 237.54 237.54" src="/assets/svg/icon-hour-min.svg#hour-min" />
                  {{ date.formatDate(state.news?.created_at, 'HH:mm') }}
                </div>
              </div>
              <h1>{{ state.news?.title }}</h1>
              <h3 v-if="state.news?.call">{{ state.news?.call }}</h3>
            </div>
            <div v-if="layer === 'text'" class="layer--text" v-html="state.news?.text"></div>
          </div>

          <div v-if="state.news?.journalist_font || state.news?.url_email" class="layer--font">
            <div class="title">Jornalista/Fonte</div>
            <p v-if="state.news?.journalist_font">{{ state.news.journalist_font }}</p>
            <p v-if="state.news?.url_email">{{ state.news.url_email }}</p>
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
    margin-bottom: 20px;
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
  }

  h3 {
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
    color: $senary;
    line-height: 1.25em;
    margin: 0 0 10px;
  }

  h1 {
    font-size: 40px;
    line-height: 1.15em;
    color: $primary;
    font-weight: bold;
    margin: 0 0 20px;
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

  .layer--title {
    .box-subject {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap-reverse;
      align-items: center;
      color: $quinary;
      margin: 45px 0 10px;

      .date {
        font-size: 13px;
      }

      .box-date {
        display: flex;
        align-items: center;

        .icon--clock {
          margin: 0 5px 0 15px;
        }
      }
    }
  }

  .layer--font {
    margin-top: 30px;

    .title {
      font-size: 12px;
      color: $quinary;
      font-weight: bold;
      font-style: italic;
      margin-bottom: 5px;
    }

    p {
      font-weight: bold;
      margin: 0;
      color: $quinary;
      font-size: 18px;
      line-height: 1.2em;
      font-style: italic;
    }
  }

  .layer--image {
    text-align: center;
    object-fit: contain;
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
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

    .layer--text {
      font-size: 16px;
    }

    .layer--image, .layer--video {
      max-width: 80%;
      margin: 0 auto;
    }

    .layer--image
    {
      img {
        max-height: 800px;
      }
    }
  }

  .related__publications {
    clear: both;
  }
}
</style>
