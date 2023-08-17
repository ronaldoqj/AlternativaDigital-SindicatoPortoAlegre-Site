<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import { ref, reactive, onMounted } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

const tab = ref('mails')
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Publicações" color="primary" />
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
          v-model="tab"
          inline-label
          class="text-quinary q-gutter-x-md section__tabs--publications"
          active-bg-color="primary"
          active-color="tertiary"
          indicator-color="primary"
          left-icon="arrow_back_ios"
          right-icon="arrow_forward_ios"
        >
          <q-tab name="microphone" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 24 40" src="assets/svg/icon-microphone.svg#microphone" />
            </div>
          </q-tab>
          <q-tab name="speaker" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="50" viewBox="0 0 40 34" src="assets/svg/icon-speaker.svg#speaker" />
            </div>
          </q-tab>
          <q-tab name="share" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 32 43" src="assets/svg/icon-share.svg#share" />
            </div>
          </q-tab>
          <q-tab name="calendar" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 42 42" src="assets/svg/icon-calendar.svg#calendar" />
            </div>
          </q-tab>
          <q-tab name="clips" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 40 43" src="assets/svg/icon-clips.svg#clips" />
            </div>
          </q-tab>

          <q-tab name="share2" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 32 43" src="assets/svg/icon-share.svg#share" />
            </div>
          </q-tab>
          <q-tab name="calendar2" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 42 42" src="assets/svg/icon-calendar.svg#calendar" />
            </div>
          </q-tab>
          <q-tab name="clips2" class="tab-container">
            <div class="background-icon container-icon">
              <IconDefault :size="45" viewBox="0 0 40 43" src="assets/svg/icon-clips.svg#clips" />
            </div>
          </q-tab>
        </q-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .section__tabs--publications
  {
    // .q-tabs__arrow {
    //   // To Do
    // }
    .tab-container {
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
</style>
