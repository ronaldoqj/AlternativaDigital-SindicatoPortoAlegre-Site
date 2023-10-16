<script setup lang="ts">
import { Ref, computed, reactive, ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const audioRef: Ref<HTMLAudioElement | null> = ref(null)

const state = reactive({
  play: false
})

const resolveSelected = computed(() => {
  return state.play ? 'selected' : ''
})

const playPause = () => {
  state.play = !state.play

  if (state.play) {
    audioRef.value?.play()
  } else {
    audioRef.value?.pause()
  }
}

</script>
<template>  <!-- icon_spectrum -->
  <div :class="`component__default--audio ${resolveSelected} q-my-xl`">
    <div class="graphic">
      <q-icon
        @click="playPause()"
        class="bg-white play"
        size="60px"
        name="svguse:/public/assets/svg/player-media.svg#player_media|0 0 65 65">
      </q-icon>
    </div>
    <audio ref="audioRef" :src="props.src" controls="controls" style="display: none;"></audio>
  </div>
</template>

<style lang="scss" scoped>
  .component__default--audio
  {
    .graphic {
      height: 115px;
      background: url(/public/assets/image/spectrum.png) repeat-x;
      display: flex;
      align-items: center;
      cursor: pointer;

      .play {
        border-radius: 50%;
        color: $senary;
        &:hover {
          color: $accent !important;
        }
      }

      .spectrum
      {
        &.selected {
          fill: $primary;
        }
      }
    }

    &.selected {
      .graphic {
        height: 115px;
        background: url(/public/assets/image/spectrum-selected.png) repeat-x;
        display: flex;
        align-items: center;

        .play {
          color: $primary;
        }
      }
    }
  }
</style>
