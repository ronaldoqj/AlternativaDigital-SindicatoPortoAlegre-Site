<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ButtonDefaultSize } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  url: {
    type: String,
    require: true
  }
})
</script>

<template>
  <div class="component__share--buttons">
    <IconDefault :size="24" class="icon-class" viewBox="0 0 20.65 20.7" src="/assets/svg/icon-whatsapp-outline.svg#whatsapp_outline" />
    <IconDefault :size="24" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
    <IconDefault :size="24" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
  </div>
</template>

<style lang="scss">
  .component__share--buttons
  {
    //
  }
</style>
