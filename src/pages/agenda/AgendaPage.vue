<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { baseURL } from 'src/helpers/helpers'
import AgendaService from 'src/services/AgendaService'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardAgendaDate from 'components/interface/CardAgendaDate.vue'
import { IAgenda, IResponseAgenda } from 'src/types/IAgenda'
import { AxiosError } from 'axios'
// import { reactive } from 'vue'

const state = reactive({
  control: {
    showContent: false
  },
  agenda: null as null | IAgenda,
  idAgenda: null as null | number
  // relatedNews: {
  //   list: [] as INews[],
  //   perPage: 6
  // }
})

const route = useRoute()

const getAgenda = () => {
  AgendaService.get({ id: state.idAgenda })
    .then((response:IResponseAgenda) => {
      // console.log('getAgenda', response)
      state.control.showContent = true
      state.agenda = response.data as IAgenda
      // getRelatedList()
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
  // if (state.agenda?.image_news && state.agenda.position_image_news === 'BeforeTitle') {
  //   state.layersNews.push('image_news')
  // }
  // if (state.agenda?.video_news && state.agenda.position_video_news === 'BeforeTitle') {
  //   state.layersNews.push('video_news')
  // }
  // if (state.agenda?.audio_news && state.agenda.position_audio_news === 'BeforeTitle') {
  //   state.layersNews.push('audio_news')
  // }
  // /** Titles */
  // state.layersNews.push('titles')

  // /** Third Layer */
  // if (state.agenda?.image_news && state.agenda.position_image_news === 'BeforeText') {
  //   state.layersNews.push('image_news')
  // }
  // if (state.agenda?.video_news && state.agenda.position_video_news === 'BeforeText') {
  //   state.layersNews.push('video_news')
  // }
  // if (state.agenda?.audio_news && state.agenda.position_audio_news === 'BeforeText') {
  //   state.layersNews.push('audio_news')
  // }
  // /** Text */
  // state.layersNews.push('text')

  // if (state.agenda?.image_news && state.agenda.position_image_news === 'AfterText') {
  //   state.layersNews.push('image_news')
  // }
  // if (state.agenda?.video_news && state.agenda.position_video_news === 'AfterText') {
  //   state.layersNews.push('video_news')
  // }
  // if (state.agenda?.audio_news && state.agenda.position_audio_news === 'AfterText') {
  //   state.layersNews.push('audio_news')
  // }

  // console.log('newsLayers', state.layersNews)
}

const computedLayout = computed(() => {
  return route.params
})

const resetAgenda = () => {
  state.control.showContent = false
  state.agenda = null
  state.idAgenda = null
  // state.layersAgenda = []
  // state.relatedAgenda = {
  //   list: [],
  //   perPage: 6
  // }
}

watch(computedLayout, (newValue) => {
  // console.log('router News changed', newValue)
  if (Object.keys(newValue).length) {
    resetAgenda()
    init()
  }
})

const init = () => {
  if (route.params && route.params.id.length) {
    if (!isNaN(route.params.id as unknown as number)) {
      state.idAgenda = Number(route.params.id)
      getAgenda()
    } else {
      // ToDo error
    }
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <div id="page__agenda--default-open" class="col">
    <LayoutSection background="tertiary" type="top" cornerColor="secondary">
      <div id="content__page--service-default-open">
        <TitleDefault class="q-mb-xl" title="Agenda" />
        <div>
          <div class="images__floats left">
            <CardAgendaDate v-if="state.agenda && state.agenda?.scheduled_dates" :scheduledDate="(state.agenda.scheduled_dates as unknown as Array<any>)" />
          </div>
          <p class="topper">{{ state.agenda?.topper }}</p>
          <p class="title">{{ state.agenda?.title }}</p>

        </div>
        <div>
          <p class="image" v-if="state.agenda?.image">
            <img :src="`${baseURL}${state.agenda?.image?.path}/${state.agenda?.image?.file_name}`" :alt="state.agenda?.image?.file_name">
          </p>
          <p class="text" v-html="state.agenda?.text"></p>
        </div>
      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__agenda--default-open
{
  .images__floats {
    border-radius: 40px;
    margin-bottom: 10px;
  }

  #content__page--service-default-open
  {
    margin-bottom: 30px;
    min-height: 400px;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 5px 0;
      font-size: 25px;
      font-weight: bold;
      line-height: 1.2em;
      color: $accent;
    }

    p {
      text-align: justify;
      margin: 0;

      &.topper {
        font-size: 15px;
        color: $quinary;
      }

      &.title {
        margin: 8px 0;
        font-size: 30px;
        font-weight: 500;
        line-height: 1.2em;
        color: $primary;
      }

      &.image
      {
        margin: 20px 0 0 0;

        img {
          width: 100%;
          max-height: 1000px;
          object-fit: contain;
        }
      }

      &.text {
        margin: 30px 0 0 0;
        clear: both;
      }
    }

    .space__between {
      margin: 10px 0;
      clear: both;
    }
  }

  @media only screen and (min-width: $breakpoint-sm)
  {
    .images__floats
    {

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
}
</style>
