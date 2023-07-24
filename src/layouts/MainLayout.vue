<template>
  <div class="box__layout">

  <q-layout view="lhr lpR lFr" class="WAL__layout">
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
      bordered
    >
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
    </q-drawer>

    <q-page-container id="page--container">
      <div id="slice__header" class="row"></div>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import LayoutHeader from 'components/layout/LayoutHeader.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

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
  background-color: $primary;
  height: $height-slice-bottom-header;
}

.q-page {
  margin-top: -$height-slice-bottom-header;
}

#page--container {
  z-index: 4000;
}
</style>
