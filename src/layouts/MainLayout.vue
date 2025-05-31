<template>
  <div class="box__layout">

  <q-layout view="lhr lpR lfr" class="WAL__layout">
    <q-header class="box__layout">

      <LayoutHeader v-model="leftDrawerOpen"></LayoutHeader>

      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

      </q-toolbar> -->
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left" behavior="mobile"
      class="component__mobile--menu"
      bordered
    >
      <div class="box__mobile--menu">
        <q-btn flat color="text-inverse close--menu" @click="leftDrawerOpen = false">
          <IconDefault :size="25" class="corner corner--down" color="text-inverse" viewBox="0 0 46.24 46.25" src="/assets/svg/x.svg#icon_x" />
        </q-btn>
        <div class="mobile__header--logo">
          <ImageDefault :size="{width: '168px', height: '78px'}" src="/assets/svg/logo-sind-bancarios-porto-alegre.svg"></ImageDefault>
        </div>
        <div class="mobile--menu">
          <LayoutMenu />
        </div>

        <div class="mobile__contact--information">
          <div class="contact-details">
            <p class="contact-fone">(51) 3030 9400</p>
            <p class="contact-email">atendimento@sindbancarios.org.br</p>
            <p class="contact-address">
              Horário de Segunda a Sexta das 9h às 18h<br />
              Rua General Câmara, 424, Porto Alegre/RS
            </p>
          </div>
        </div>
        <div class="mobile__social-media">
          <LayoutMenuSocialMedia />
        </div>
        <div class="mobile__logo--alternativa-digital">
          <ImageDefault :size="{width: '245px', height: '45px'}" src="/assets/svg/logo-alternativa-digital.svg"></ImageDefault>
        </div>
        <!--
          <q-list>
            <q-item-label
              header
            >
              Essential Links
            </q-item-label>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        -->
      </div>
    </q-drawer>

    <q-page-container id="page--container">
      <div id="slice__header" class="row"></div>
      <router-view />
    </q-page-container>

    <q-footer>
      <LayoutFooter />
    </q-footer>
  </q-layout>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import LayoutMenu from 'layouts/components/LayoutMenu.vue'
import LayoutHeader from 'layouts/components/LayoutHeader.vue'
import LayoutFooter from 'layouts/components/LayoutFooter.vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import LayoutMenuSocialMedia from 'layouts/components/LayoutMenuSocialMedia.vue'
import IconDefault from 'components/interface/IconDefault.vue'

// const essentialLinks: EssentialLinkProps[] = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

const leftDrawerOpen = ref(false)
// const rightDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>

<style lang="scss">
$height-slice-bottom-header: 40px;

.box__layout {
  // max-width: 1920px;
  margin: 0 auto;
}
.WAL__layout {
  // max-width: 1920px;
  // margin: 0 auto;
}
#slice__header {
  background-color: $accent;
  height: $height-slice-bottom-header;

  @media only screen and (min-width: $breakpoint-md)
  {
    background-color: $primary;
  }
}

.q-page {
  margin-top: -$height-slice-bottom-header;
}

#page--container {
  z-index: 4000;
}

.component__mobile--menu
{
  width: 600px;
  background-color: $accent;

  .box__mobile--menu
  {
    $menu-margin-top: 80px;
    $menu-border-top-radius: 40px;

    margin-top: $menu-margin-top;
    background: $primary;
    padding: 10px 0;
    border-top-left-radius: $menu-border-top-radius;
    border-top-right-radius: $menu-border-top-radius;
    height: calc(100% - #{$menu-margin-top});

    .close--menu {
      float: right;
      margin: 10px;
    }

    .mobile__header--logo {
      margin: 20px auto;
      text-align: center;
      clear: both;
    }

    .mobile--menu {
      display: flex;
      flex-direction: column;
      color: $tertiary;
    }

    /** ---------------------------------------------- */
    /** Menu Mobile */
    /** ---------------------------------------------- */
    .mobile__contact--information
    {
      color: $tertiary;
      p
      {
        text-align: center;
        margin: 28px 0 0;

        &.contact-fone {
          font-size: 28px;
          font-weight: bold;
        }
        &.contact-email {
          font-size: 22px;
          font-weight: bold;
          word-break: break-word;
        }
        &.contact-address {
          font-size: 16px;
          line-height: 1.2em;
        }
      }
    }

    .mobile__social-media {
      background: $accent;
      display: flex;
      justify-content: space-evenly;
      margin: 20px 0;
      padding: 15px 0;
    }

    .mobile__logo--alternativa-digital
    {
      display: flex;
      justify-content: center;
    }
  }

}
.q-drawer.q-drawer--left
{
  width: 100% !important;
  min-width: 320px !important;
  max-width: 400px !important;
}

/** ---------------------------------------------- */
/** Content pages */
/** ---------------------------------------------- */
.section--content
{
  h1 {
    margin: 5px 0;
    font-size: 25px;
    font-weight: bold;
    line-height: 1.2em;
    color: $accent;
  }

  h2 {
    margin: 3px 0;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2em;
    color: $accent;
  }

  h3 {
    margin: 3px 0;
    line-height: 1em;
    font-size: 1.2em;
    color: $accent;
  }

  ul {
    padding: 0px 17px;
    margin: 5px 0 15px 30px;

    list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 9 9"><circle fill="%23E34548" cx="7" cy="7" r="2"/></svg>');
    li {
      margin-top: -5px;
    }
  }

  .round-borders
  {
    img {
      border-radius: 30px; padding: 5px;
    }
  }

  .round-borders-inline
  {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    img {
      border-radius: 30px;
    }
  }
}
</style>
