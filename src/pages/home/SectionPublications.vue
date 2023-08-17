<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

interface ITabsIcons {
  id: number
  name: string
  icon: string
  size: number
  viewBox: string
}

const tab = ref('mails')
const state = reactive({
  sections: {
    tabs: [] as ITabsIcons[],
    cards: []
  }
})

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
    <div class="tabs__publications">
      <div class="container__tabs--publications">
        <div class="title" color="quinary">
            Filtro por assunto
        </div>
        <q-tabs
          v-model="tab"
          inline-label
          class="text-quinary tabs"
          active-bg-color="primary"
          active-color="tertiary"
          indicator-color="primary"
          left-icon="arrow_back_ios"
          right-icon="arrow_forward_ios"
        >
          <q-tab :name="`name_${key}`" class="tab-container" v-for="(item, key) in state.sections.tabs" :key="key">
            <div class="background-icon container-icon">
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
          color: $quinary;
          font-size: 24px;
          font-family: "roboto light";
          white-space: nowrap;
          float: none;
          text-align: center;

          @media only screen and (min-width: $breakpoint-md)
          {
            display: flex;
            align-items: center;
            height: 110px;
            float: left;
            padding-right: 20px;
          }
        }

        .tabs
        {
          border: solid 1px purple;
          max-width: fit-content;

          .tab-container
          {
            border-radius: 0 45% 45%;
            width: 110px;
            height: 110px;
            margin: 0 5px;
            background: $quaternary;

            .container-icon {
              width: 110px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
