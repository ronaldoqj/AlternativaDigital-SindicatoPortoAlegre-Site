<script setup lang="ts">
import { AxiosError } from 'axios'
import SearchService from 'src/services/SearchService'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import TitleLastItem from 'components/interface/TitleLastItem.vue'
import InputForm from 'src/pages/search/components/InputForm.vue'
import SelectForm from 'src/pages/search/components/SelectForm.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import SkeletonCardNews from 'components/interface/skeletons/SkeletonCardNews.vue'
import { getValidImage, convertURL } from 'src/helpers/helpers'
import { ISelectOption, ITabsIcons } from 'src/types/IDefaults'
import { INews, IPagination, IResponseNews } from 'src/types/INews'
import { computed, onMounted, reactive, watch } from 'vue'
import { IBank, IResponseBanks } from 'src/types/IBank'

const staticState = {
  tabMenu: {
    oldValue: null as null | number
  }
}
const state = reactive({
  searchInput: {
    value: null
  },
  banks: {
    value: { label: 'Todos os bancos', value: null } as ISelectOption,
    name: 'banks',
    placeholder: 'Selecione uma instituição bancária',
    options: [{ label: 'Todos os bancos', value: null }] as Array<ISelectOption>
  },
  news: {
    list: [] as INews[],
    lastPage: 0
  },
  tabMenu: {
    tab: '',
    tabs: [] as ITabsIcons[]
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

const resetCurrentPage = () => {
  state.pagination.currentPage = 1
}

const clickTab = (id:number) => {
  if (staticState.tabMenu.oldValue === id) {
    state.tabMenu.tab = ''
    staticState.tabMenu.oldValue = null
  } else {
    staticState.tabMenu.oldValue = id
  }

  resetCurrentPage()
  triggerGetNews()
}

const clickPagination = () => {
  triggerGetNews()
}

const initTabMenu = (): void => {
  state.tabMenu.tabs.push({ id: 1, name: 'legal', icon: 'assets/svg/icon-department-legal.svg#legal', size: 45, viewBox: '0 0 577.34 595.55' })
  state.tabMenu.tabs.push({ id: 2, name: 'health', icon: 'assets/svg/icon-department-health.svg#health', size: 50, viewBox: '0 0 582.96 604.74' })
  state.tabMenu.tabs.push({ id: 3, name: 'youth', icon: 'assets/svg/icon-department-youth.svg#youth', size: 45, viewBox: '0 0 612.46 605.94' })
  state.tabMenu.tabs.push({ id: 4, name: 'diversity', icon: 'assets/svg/icon-department-diversity.svg#diversity', size: 45, viewBox: '0 0 340.86 603.17' })
  state.tabMenu.tabs.push({ id: 5, name: 'sport', icon: 'assets/svg/icon-department-sport.svg#sport', size: 45, viewBox: '0 0 687.53 599.67' })

  state.tabMenu.tabs.push({ id: 6, name: 'culture', icon: 'assets/svg/icon-department-culture.svg#culture', size: 45, viewBox: '0 0 776.66 603.18' })
  state.tabMenu.tabs.push({ id: 7, name: 'retirees', icon: 'assets/svg/icon-department-retirees.svg#retirees', size: 50, viewBox: '0 0 717.7 610.78' })
  state.tabMenu.tabs.push({ id: 8, name: 'training', icon: 'assets/svg/icon-department-training.svg#training', size: 45, viewBox: '0 0 675.24 603.17' })
  state.tabMenu.tabs.push({ id: 9, name: 'financial', icon: 'assets/svg/icon-department-financial.svg#financial', size: 45, viewBox: '0 0 633.81 604.52' })
  state.tabMenu.tabs.push({ id: 10, name: 'comunication', icon: 'assets/svg/icon-communication.svg#communication', size: 45, viewBox: '0 0 400 400' })
}

const getNews = () => {
  SearchService.list({ page: state.pagination.currentPage, perPage: state.pagination.perPage, departmentId: state.tabMenu.tab, searchWords: state.searchInput.value, bankId: state.banks.value.value })
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

const getBanks = () => {
  SearchService.listBanks({})
    .then((response:IResponseBanks) => {
      const list = response.data as IBank[]
      const options:Array<ISelectOption> = list.map((item:IBank) => ({
        value: item.id,
        label: item.name
      }))

      state.banks.options = [...state.banks.options, ...options] as ISelectOption[]
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

const bankSelectedValue = computed(() => {
  return state.banks.value.value
})

watch(bankSelectedValue, () => {
  triggerGetNews()
})

onMounted(() => {
  getBanks()
  getNews()
  initTabMenu()
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__all--news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Busca" color="primary" />
        <section class="search__input">
          <div class="box__input--search">
            <InputForm
              v-model="state.searchInput.value"
              @clickToSearch="triggerGetNews()"
              placeholder="Pesquisar"
              name="search"
              typeSearch
              class="input"
            />
          </div>
        </section>
        <section class="filters q-mt-xl">
          <div class="component_tabs q-mt-sm">
            <div class="container__tabs">
              <div class="title" color="quinary">
                  Filtro por departamento
              </div>
              <q-tabs
                v-model="state.tabMenu.tab"
                inline-label
                class="text-quinary tabs"
                active-class="select-tab"
                active-color="tertiary"
                indicator-color="transparent"
                left-icon="arrow_back_ios"
                right-icon="arrow_forward_ios"
              >
                <q-tab :name="item.id" class="tab-container" v-for="(item, key) in state.tabMenu.tabs" :key="key" @click="clickTab(item.id)">
                  <div class="container-icon">
                    <IconDefault
                      :size="32"
                      :viewBox="item.viewBox"
                      :src="item.icon"
                    />
                  </div>
                </q-tab>
              </q-tabs>
            </div>
          </div>
        </section>
        <section class="search__select--input q-mt-lg q-mb-xl">
          <span class="title">Filtro por banco</span>
          <div class="input">
            <SelectForm
              v-model="state.banks.value"
              :name="state.banks.name"
              :options="state.banks.options"
            />
          </div>
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

  .filters
  {
    .component_tabs
    {
      display: block;

      .container__tabs
      {
        max-width: fit-content;
        margin: 0 auto;
        // .q-tabs__arrow {
        //   // To Do
        // }

        .title {
          color: $quinary;
          font-size: 18px;
          font-family: "roboto light";
          white-space: nowrap;
          float: none;
          text-align: center;
          margin: 10px 0 10px;

          @media only screen and (min-width: $breakpoint-md)
          {
            // color: $quinary;
            display: flex;
            align-items: center;
            height: 110px;
            float: left;
            padding-right: 20px;
            margin: 0;
          }
        }

        .tabs
        {
          max-width: fit-content;

          .tab-container
          {
            padding: 0px 5px;
            height: 110px;

            .container-icon {
              background: $quaternary;
              border-radius: 0 45% 45%;
              width: 80px;
              height: 80px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }

          .q-focus-helper {
            background-color: transparent;
          }
          .q-tab__content
          {
            &:hover
            {
              background-color: none;

              .container-icon {
                border: solid 1px $quinary;
              }
            }
          }

          .select-tab
          {
            .container-icon {
              background: $primary;
            }
          }
        }
      }
    }
  }

  .search__input
  {
    .box__input--search {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
  .search__select--input
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.2s ease-in-out;

    .title {
      text-align: center;
      color: $quinary;
      font-size: 18px;
      font-family: "roboto light";
      line-height: 1em;
      transition: 0.2s ease-in-out;
      margin: 10px 15px;
    }
    .input {
      width: 100%;
    }

    @media only screen and (min-width: $breakpoint-xs)
    {
      flex-direction: row;
      .title {
        margin: 0 15px;
      }

      .input {
        max-width: 500px;
        width: 500px;
        min-width: auto;
      }
    }
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
