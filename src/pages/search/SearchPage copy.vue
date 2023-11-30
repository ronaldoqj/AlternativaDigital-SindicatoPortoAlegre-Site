<script setup lang="ts">
import { AxiosError } from 'axios'
import SearchService from 'src/services/SearchService'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import TitleLastItem from 'components/interface/TitleLastItem.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import SkeletonCardNews from 'components/interface/skeletons/SkeletonCardNews.vue'
import { getValidImage, convertURL } from 'src/helpers/helpers'
import { INews, IPagination, IResponseNews } from 'src/types/INews'
import { computed, onMounted, reactive } from 'vue'

const state = reactive({
  searchInput: {
    value: null
  },
  news: {
    list: [] as INews[],
    lastPage: 0
  },
  pagination: {
    currentPage: 1,
    perPage: 12 // 12
  },
  controlsPage: {
    loading: false,
    skeleton: true
  }
})

const controlLastPage = computed(() => {
  return state.news.list.length ? state.news.lastPage : 0
})

const clickPagination = () => {
  triggerGetNews()
}

const getNews = () => {
  SearchService.list({ page: state.pagination.currentPage, perPage: state.pagination.perPage, departmentId: null, searchWords: state.searchInput.value })
    .then((response:IResponseNews) => {
      const data = response.data as IPagination
      state.news.list = data.data as INews[]
      state.news.lastPage = data.last_page as number
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      state.controlsPage.skeleton = false
      state.controlsPage.loading = false
    })
}

const triggerGetNews = () => {
  state.controlsPage.loading = true
  getNews()
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__all--news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Notícias" color="primary" />
        <section class="search__input">
          <InputForm v-model="state.searchInput.value" label="Pesquisar" name="search" />
          <q-btn @click="getNews()" color="white" text-color="black" label="Pesquisar" />
          <br>
          <br>
        </section>

        <section v-if="state.news.list.length" class="list">
          <q-card flat>
          <div class="row q-col-gutter-md">
            <div v-for="(row, index) in state.news.list" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm">
              <NewsItem
                :src="getValidImage(row, 'imageNews')"
                :route="convertURL(row.id, row.title)"
                :subject="row.topper"
                :title="row.title"
                :description="row.call"
                :onlyText="row.type_news === 'text'"
              />
            </div>
            <q-inner-loading
              :showing="state.controlsPage.loading"
              label="Por favor espere..."
              label-class="text-primary"
              color="primary"
              label-style="font-size: 1.1em"
            />
          </div>
          </q-card>
        </section>

        <section v-if="state.controlsPage.skeleton" class="skeleton">
          <div class="row q-col-gutter-md">
            <div v-for="(skeleton, keySkeleton) in state.pagination.perPage" :key="keySkeleton" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm">
              <SkeletonCardNews :title="skeleton" />
            </div>
          </div>
        </section>

        <section v-if="!state.news.list.length" class="no-results">
          <q-card flat class="box__card--loading">
            <TitleLastItem
              title="Não foram encontradas notícias!"
            />
            <q-inner-loading
              :showing="state.controlsPage.loading"
              label="Por favor espere..."
              label-class="text-primary"
              color="primary"
              label-style="font-size: 1.1em"
            />
          </q-card>
        </section>

        <section class="control-pages">
          <q-pagination
            v-model="state.pagination.currentPage"
            color="primary"
            :max="controlLastPage"
            :max-pages="state.pagination.perPage"
            boundary-numbers
            outline
            round
            gutter="sm"
            @click="clickPagination"
          />
        </section>
      </LayoutSection>
    </div>
  </q-page>
</template>

<style lang="scss">

#page__all--news
{
  .list {
    margin-top: 40px;
  }

  .skeleton {
    clear: both;
  }

  .no-results
  {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .box__card--loading {
      height: 200px;
    }
  }

  .control-pages {
    display: flex;
    justify-content: center;
    margin: 50px 0 20px;
  }

}

</style>
