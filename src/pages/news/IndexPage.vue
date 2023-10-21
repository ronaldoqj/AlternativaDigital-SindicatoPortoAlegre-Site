<script setup lang="ts">
import { getValidImage, baseURL, domain, defaultImagePath } from 'src/helpers/helpers'
import { useMeta, useQuasar } from 'quasar'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import VideoDefault from 'components/interface/VideoDefault.vue'
import AudioDefault from 'components/interface/AudioDefault.vue'
import { computed, onMounted, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { INews, IResponseNews, IResponseRelated, TNewsLayers } from 'src/types/INews'
import NewsService from 'src/services/NewsService'
import { AxiosError } from 'axios'
import SkeletonNews from 'components/interface/skeletons/SkeletonNews.vue'

const route = useRoute()
const router = useRouter()
const applicationName = 'Sindicato dos Bancários de Porto Alegre e Região - SindBancários'

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

const setMeta = (description?: string) => {
  const imagePath = baseURL + defaultImagePath

  const metaData = {
    title: 'Test Metadata Title',
    meta: {
      ogUrl: { property: 'og:url', content: `${domain}${router.currentRoute.value.fullPath}` },
      ogType: { property: 'og:type', content: 'website' },
      ogTitle: { property: 'og:title', content: route.params.title },
      ogDescription: { property: 'og:description', content: description },
      ogImage: { property: 'og:image', content: imagePath },

      metaCard: { name: 'twitter:card', content: 'summary_large_image' },
      metaCreator: { name: 'twitter:creator', content: '@sindipoa' },
      metaDescription: { name: 'twitter:description', content: description },
      metaDomain: { name: 'twitter:domain', content: applicationName },
      metaImage: { name: 'twitter:image', content: imagePath },
      metaSite: { name: 'twitter:site', content: '@sindipoa' },
      metaTitle: { name: 'twitter:title', content: route.params.title }
    }
  }

  useMeta(metaData)
}

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
      setMeta(response.data.call)
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

// const setMetaTags = () => {
//   /*
//     <meta property="og:url"           content="https://www.your-domain.com/your-page.html" />
//     <meta property="og:type"          content="website" />
//     <meta property="og:title"         content="Your Website Title" />
//     <meta property="og:description"   content="Your description" />
//     <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />
//   */
// }

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

const whatsappUrl = () => {
  // $linkSocialMediaWhatsapp = "whatsapp://send?text={Str::slug($noticia->titulo, '-')} - " . url("/noticia/{$noticia->id}");
  return `whatsapp://send?text=${router.currentRoute.value.fullPath}`
}

const twitterUrl = () => {
  return `${route.params.title}&url=${router.currentRoute.value.fullPath}`
}

const socialMediaShare = (socialMedia: 'facebook' | 'twitter' | 'whatsapp', url: string) => {
  // const url = router.currentRoute.value.fullPath
  const f = {
    w: 630,
    h: 360,
    left: screen.width / 2 - 630 / 2,
    top: screen.height / 2 - 360 / 2
  }
  const t = {
    url: 'https://twitter.com/intent/tweet?text=' + url,
    title: applicationName,
    w: 650,
    h: 450
  }

  switch (socialMedia) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer.php?u=' + url, 'Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + f.w + ', height=' + f.h + ', top=' + f.top + ', left=' + f.left)
      break
    case 'twitter':
      window.open(t.url, t.title, `toolbar=0, status=0, width=${t.w}, height=${t.h}`)
      break
    case 'whatsapp':
    default:
      window.open(url, '_blank')
      break
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
        <TitleDefault title="Notícia" />

        <button @click="socialMediaShare('facebook', router.currentRoute.value.fullPath)">Click Facebook</button>
        <button @click="socialMediaShare('twitter', twitterUrl())">Click twitter</button>
        <button @click="socialMediaShare('whatsapp', whatsappUrl())">Click whatsapp</button>
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
