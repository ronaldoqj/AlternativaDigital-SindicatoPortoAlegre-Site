<script setup lang="ts">
import { ref } from 'vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import LayoutMenu from 'components/layout/LayoutMenu.vue'
import LayoutMenuSocialMedia from 'components/layout/LayoutMenuSocialMedia.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  menu: {
    type: Boolean,
    required: false
  }
})

const drawerOpen = ref(!props.menu)
const emit = defineEmits(['update:modelValue'])

function toggleDrawer () {
  emit('update:modelValue', drawerOpen.value)
}
</script>

<template>
  <div id="container__header">
    <div class="layout__header--first">
      <ImageDefault :size="{width: '254px', height: '30px'}" src="/assets/svg/portal-parceiro-bancariosrs.svg"></ImageDefault>
    </div>
    <div id="menu__header">
      <div class="logo">
        <ImageDefault :size="{width: '168px', height: '78px'}" src="/assets/svg/logo-sind-bancarios-porto-alegre.svg"></ImageDefault>
      </div>
      <div class="menu__box">
        <div class="social-media">
          <LayoutMenuSocialMedia />
        </div>
        <div class="menu">
          <LayoutMenu />
        </div>
      </div>
    </div>
    <q-toolbar style="display: none;" class="q-pa-xl toolbar">
      <q-toolbar-title>
        Quasar App
      </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
      />
    </q-toolbar>
  </div>
</template>

<style lang="scss">
$borderTopRadius: 40px;

#container__header {
  background-color: $secondary;

  #menu__header {
    background: $primary url('/assets/image/water-mark.png') no-repeat right -40px top -35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top-left-radius: $borderTopRadius;
    border-top-right-radius: $borderTopRadius;
    padding: 30px 0 40px 0;

    .menu__box {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .social-media {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        margin-bottom: 10px;
        width: 400px;
      }
    }
  }

  .layout__header--first {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: center;
  }

  .toolbar {
    background-color: $primary;
    border-top-left-radius: $borderTopRadius;
    border-top-right-radius: $borderTopRadius;
  }
}

</style>
