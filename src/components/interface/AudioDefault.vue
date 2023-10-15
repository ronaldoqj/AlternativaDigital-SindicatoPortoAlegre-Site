<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ImageDefaultSize, type ratioType } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

</script>
<template>
  <!-- icon_spectrum -->
  <p>Audio</p>
  <q-video
    class="q-my-xl"
    :src="props.src"
  />
</template>
