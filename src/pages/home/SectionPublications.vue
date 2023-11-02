<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import { ITabsIcons } from 'src/types/IDefaults'

const tab = ref('mails')
const state = reactive({
  sections: {
    tabs: [] as ITabsIcons[],
    cards: []
  }
})

const subject = 'Assembleia Legislativa'
const title = 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú'
const description = 'Cerca de dois meses após ser anunciado como futuro presidente do Banrisul pelo governador Eduar Leite, o nome de Fulano Beltrano Ciclano finalmente foi pautado na Comissão de Finanças da Assembleia Legislativa...'

const getData = (): void => {
  state.sections.tabs.push({ id: 0, name: 'microphone', icon: 'assets/svg/icon-microphone.svg#microphone', size: 45, viewBox: '0 0 24 40' })
  state.sections.tabs.push({ id: 1, name: 'speaker', icon: 'assets/svg/icon-speaker.svg#speaker', size: 50, viewBox: '0 0 40 34' })
  state.sections.tabs.push({ id: 2, name: 'share', icon: 'assets/svg/icon-share.svg#share', size: 45, viewBox: '0 0 32 43' })
  state.sections.tabs.push({ id: 3, name: 'calendar', icon: 'assets/svg/icon-calendar.svg#calendar', size: 45, viewBox: '0 0 42 42' })
  state.sections.tabs.push({ id: 4, name: 'clips', icon: 'assets/svg/icon-clips.svg#clips', size: 45, viewBox: '0 0 40 43' })

  state.sections.tabs.push({ id: 5, name: 'microphone', icon: 'assets/svg/icon-microphone.svg#microphone', size: 45, viewBox: '0 0 24 40' })
  state.sections.tabs.push({ id: 6, name: 'speaker', icon: 'assets/svg/icon-speaker.svg#speaker', size: 50, viewBox: '0 0 40 34' })
  state.sections.tabs.push({ id: 7, name: 'share', icon: 'assets/svg/icon-share.svg#share', size: 45, viewBox: '0 0 32 43' })
  state.sections.tabs.push({ id: 8, name: 'calendar', icon: 'assets/svg/icon-calendar.svg#calendar', size: 45, viewBox: '0 0 42 42' })
  state.sections.tabs.push({ id: 9, name: 'clips', icon: 'assets/svg/icon-clips.svg#clips', size: 45, viewBox: '0 0 40 43' })
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="section__default section__publications">
    <TitleDefault title="Publicações" color="primary" />
    <div class="tabs__publications q-mt-sm">
      <div class="container__tabs--publications">
        <div class="title" color="quinary">
            Filtro por assunto
        </div>
        <q-tabs
          v-model="tab"
          inline-label
          class="text-quinary tabs"
          active-class="select-tab"
          active-color="tertiary"
          indicator-color="transparent"
          left-icon="arrow_back_ios"
          right-icon="arrow_forward_ios"
        >
          <q-tab :name="`name_${key}`" class="tab-container" v-for="(item, key) in state.sections.tabs" :key="key">
            <div class="container-icon">
              <IconDefault
                :size="item.size"
                :viewBox="item.viewBox"
                :src="item.icon"
              />
            </div>
          </q-tab>
        </q-tabs>
      </div>
    </div>

    <div class="row q-mt-xl">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>

      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :subject="subject" :title="title" :description="description" /></div>
    </div>
  </div>
</template>

<style lang="scss">
  .section__publications
  {
    .tabs__publications
    {
      display: block;

      .container__tabs--publications
      {
        max-width: fit-content;
        margin: 0 auto;
        // .q-tabs__arrow {
        //   // To Do
        // }

        .title {
          color: $senary;
          font-size: 24px;
          font-family: "roboto light";
          white-space: nowrap;
          float: none;
          text-align: center;
          margin: 10px 0 20px;

          @media only screen and (min-width: $breakpoint-md)
          {
            color: $quinary;
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
              width: 110px;
              height: 110px;
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
</style>
