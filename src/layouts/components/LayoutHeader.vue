<script setup lang="ts">
import { ref } from 'vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import LayoutMenu from 'layouts/components/LayoutMenu.vue'
import LayoutMenuSocialMedia from 'layouts/components/LayoutMenuSocialMedia.vue'

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
      <div class="mobile__menu">
        <IconDefault
          :size="40"
          class="icon__menu-burguer"
          viewBox="0 0 34 23"
          src="/assets/svg/icon-menu-burguer.svg#menu_burguer"
          @click="toggleDrawer"
        />
      </div>
      <div class="menu__header--content">
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
    </div>
    <q-toolbar class="q-pa-xl toolbar" v-if="false">
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

#container__header
{
  background-color: $secondary;

  #menu__header
  {
    background: $primary url('/assets/image/water-mark.png') no-repeat right -40px top -35px;
    border-top-left-radius: $borderTopRadius;
    border-top-right-radius: $borderTopRadius;
    padding: 30px 0 0 0;

    .mobile__menu
    {
      .icon__menu-burguer
      {
        color: $text-inverse;
        transition: 0.2s ease-in-out;

        &:hover {
          color: $quinary
        }
      }

      width: 80%;
      text-align: right;
      margin: 0 auto -40px;
      cursor: pointer;
    }

    .menu__header--content
    {
      // background: $primary url('/assets/image/water-mark.png') no-repeat right -40px top -35px;
      // border-top-left-radius: $borderTopRadius;
      // border-top-right-radius: $borderTopRadius;
      // padding: 30px 0 40px 0;
      text-align: center;

      .menu__box
      {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: $accent;
        background: linear-gradient(0deg, $accent 57%, rgba(112,24,26,1) 100%);
        padding: 30px 0;
        margin-top: 40px;

        .social-media {
          display: flex;
          justify-content: space-evenly;
          padding: 0 15px;
          margin-bottom: 10px;
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
        }

        .menu {
          display: none;
        }

      }
    }

    /** Desktop */
    @media only screen and (min-width: $breakpoint-md)
    {
      background-color: $primary;
      padding: 30px 0 40px 0;

      .menu__header--content
      {
        display: flex;
        align-items: center;
        padding: 0 100px;
        justify-content: space-between;

        .menu__box {
          background: none;
          padding: 0;
          margin-top: 0;

          .social-media {
            justify-content: space-between;
            margin: 0 0 10px;
          }
        }
      }

      .mobile__menu {
        display: none;
      }

      .menu {
          display: unset !important;
          margin-bottom: -20px;
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
