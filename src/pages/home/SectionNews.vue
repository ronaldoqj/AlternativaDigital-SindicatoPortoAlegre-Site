<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import { useInputsStore } from 'stores/inputs-store'
import { getValidImage, convertURL } from 'src/helpers/helpers'
import NewsService from 'src/services/NewsService'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import InputForm from 'components/inputs/InputForm.vue'
import { INews, IPagination, IResponseNews } from 'src/types/INews'
import TitleLastItem from 'components/interface/TitleLastItem.vue'

const props = defineProps({
  news: {
    type: Object,
    default: () => ({}),
    required: false
  },
  notIds: {
    type: Array<number>,
    required: true
  }
})

const router = useRouter()
const state = reactive({
  searchInput: {
    value: null
  },
  news: {
    geral: {
      page: 1,
      perPage: 6,
      endList: false,
      lastPate: null as null | number,
      list: [] as INews[]
    },
    ids: [] as Array<number>
  },
  buttons: {
    moreNews: {
      loading: false,
      show: true,
      title: 'Mais notícias'
    }
  }
})

const geralNews = computed(() => {
  return props.news?.geral
})

const titleMoreNews = computed(() => {
  return state.news.geral.page > 3 ? 'Ver todas notícias' : state.buttons.moreNews.title
})

const clickMoreNews = computed(() => {
  return state.news.geral.page > 3 ? allNews : moreNews
})

const allNews = () => {
  state.buttons.moreNews.loading = true
  router.push({ name: 'allNews' })
}

const moreNews = () => {
  state.news.geral.page += 1
  state.buttons.moreNews.loading = true
  NewsService.list({ page: state.news.geral.page, perPage: state.news.geral.perPage, notIds: state.news.ids })
    .then((response:IResponseNews) => {
      state.news.ids = [...response.ids, ...state.news.ids]
      const list = response.news.data as IPagination
      state.news.geral.list = [...state.news.geral.list, ...list.data as INews[]]
      if (list.next_page_url === null) {
        state.buttons.moreNews.show = false
      }
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      state.buttons.moreNews.loading = false
    })
}

const toSearchPage = () => {
  console.log('click to SearchPage')
  useInputsStore().setSearch(state.searchInput.value)
  router.push({ name: 'search' })
}

watch(geralNews, newValue => {
  state.news.geral.list = newValue
})

onMounted(() => {
  state.news.ids = props.notIds
})
</script>

<template>
  <div class="section__default section--news">
    <section class="title__page q-mb-xl">
      <TitleDefault title="Notícias" color="primary" />
      <div class="input--search">
        <InputForm
          v-model="state.searchInput.value"
          @clickToSearch="toSearchPage()"
          placeholder="Pesquisar"
          name="search"
          typeSearch
          class="input"
        />
      </div>
    </section>
    <div class="row q-mb-md q-col-gutter-md">
      <div v-if="props.news?.highlights && props.news?.highlights.length > 0" class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm">
        <NewsItem
          :src="getValidImage(props.news?.highlights[0], 'imageNews')"
          :route="convertURL(props.news?.highlights[0].id, props.news?.highlights[0].title)"
          :subject="props.news?.highlights[0].topper"
          :title="props.news?.highlights[0].title"
          :description="props.news?.highlights[0].call"
          :highlights="true"
          :onlyText="props.news?.highlights[0].type_news === 'text'"
        />
      </div>
      <div v-if="props.news?.highlights && props.news?.highlights.length > 1" class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm">
        <NewsItem
          :src="getValidImage(props.news?.highlights[1], 'imageNews')"
          :route="convertURL(props.news?.highlights[1].id, props.news?.highlights[1].title)"
          :subject="props.news?.highlights[1].topper"
          :title="props.news?.highlights[1].title"
          :description="props.news?.highlights[1].call"
          :highlights="true"
          :onlyText="props.news?.highlights[1].type_news === 'text'"
        />
      </div>
      <div v-if="props.news?.highlights && props.news?.highlights.length > 2" class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm xl">
        <NewsItem
          :src="getValidImage(props.news?.highlights[2], 'imageNews')"
          :route="convertURL(props.news?.highlights[2].id, props.news?.highlights[2].title)"
          :subject="props.news?.highlights[2].topper"
          :title="props.news?.highlights[2].title"
          :description="props.news?.highlights[2].call"
          :highlights="true"
          :onlyText="props.news?.highlights[2].type_news === 'text'"
        />
      </div>
    </div>

    <div v-if="state.news.geral.list.length" class="row q-col-gutter-md">
      <div v-for="(row, index) in state.news.geral.list" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm">
        <NewsItem
          :src="getValidImage(row, 'imageNews')"
          :route="convertURL(row.id, row.title)"
          :subject="row.topper"
          :title="row.title"
          :description="row.call"
          :onlyText="row.type_news === 'text'"
        />
      </div>
    </div>

    <div class="box__btn--more q-mt-xl q-mb-lg" v-show="Object.keys(props.news).length">
      <ButtonDefault
        v-if="state.buttons.moreNews.show"
        rounded
        unradiusTopLeft
        noCaps
        :title="titleMoreNews"
        color="primary"
        :size="{maxWidth: '400px'}"
        style="flex:max-content;"
        :loading="state.buttons.moreNews.loading"
        @click="clickMoreNews"
      />
      <TitleLastItem
        v-else
        title="Todas notícias foram apresentadas"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .section--news
  {
    .box__btn--more
    {
      display: flex;
      justify-content: center;
    }

    .title__page
    {
      display: flex;
      flex-direction: column;
      flex-direction: column-reverse;
      transition: 0.3s ease-in-out;

      .input--search {
        flex-grow: 1;
        margin: 0 0 20px 0;
      }
    }

    @media only screen and (min-width: $breakpoint-sm)
    {
      .title__page
      {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .input--search {
          margin-left: 20px;
          max-width: 530px;
          margin: 0 20px 0 0;
        }
      }
    }
  }
</style>
