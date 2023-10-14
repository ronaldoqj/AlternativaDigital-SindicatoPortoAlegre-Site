<script setup lang="ts">
// import { PropType } from 'vue'
// import { type ratioType } from 'components/models/interfaces/InterfacesDefault'
import ImageDefault from 'components/interface/ImageDefault.vue'

// const props = defineProps({
//   menu: {
//     type: Object as PropType<ratioType>,
//     required: false
//   }
// })
</script>

<template>
    <q-btn size="sm" outline round color="text-inverse">
      <a href="https://www.facebook.com/SindBancarios.PoA/" target="_blank"><ImageDefault :size="{width: '8px', height: '14px'}" src="/assets/svg/icon-facebook.svg"></ImageDefault></a>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <a href="https://www.instagram.com/sindbancariospoa/" target="_blank"><ImageDefault :size="{width: '14px', height: '14px'}" src="/assets/svg/icon-instagram.svg"></ImageDefault></a>
    </q-btn>
    <q-btn size="sm" outline round color="text-inverse">
      <a href="https://twitter.com/sindbancarios" target="_blank"><ImageDefault :size="{width: '15px', height: '12px'}" src="/assets/svg/icon-twitter.svg"></ImageDefault></a>
    </q-btn>
    <!-- <q-btn size="sm" outline round color="text-inverse">
      <a href="" target="_blank"><ImageDefault :size="{width: '13px', height: '13px'}" src="/assets/svg/icon-whatsapp.svg"></ImageDefault></a>
    </q-btn> -->
    <q-btn size="sm" outline round color="text-inverse">
      <a href="https://www.youtube.com/SindBancariosPoA" target="_blank"><ImageDefault :size="{width: '14px', height: '10px'}" src="/assets/svg/icon-youtube.svg"></ImageDefault></a>
    </q-btn>
</template>

<style lang="scss">
$borderRadius: 20px;
</style>
