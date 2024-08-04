<template>
  <router-view />
</template>

<script setup lang="ts">
import { useMeta, useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStructureStore } from 'stores/structure-store'
import { baseURL, domain, applicationName, defaultImagePath } from 'src/helpers/helpers'
import { computed, onMounted, onServerPrefetch, watch } from 'vue'
import { TStructureScreenSize } from './types/IDefaults'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const imagePath = baseURL + defaultImagePath

/**
 * Functionality responsible for defining screen in storeStructure
 */
const structureStore = computed(() : TStructureScreenSize => {
  return $q.screen.name
})

watch(structureStore, (newValue: TStructureScreenSize) => {
  useStructureStore().setScreen(newValue)
})

onServerPrefetch(() => {
  const nameRoute = router.currentRoute.value.name ?? null
  if (nameRoute !== 'news') {
    const metaData = {
      meta: {
        ogUrl: { property: 'og:url', content: `${domain}${router.currentRoute.value.fullPath}` },
        ogType: { property: 'og:type', content: 'website' },
        ogTitle: { property: 'og:title', content: route.params.title },
        ogDescription: { property: 'og:description', content: route.params.title },
        ogImage: { property: 'og:image', content: imagePath },

        metaCard: { name: 'twitter:card', content: 'summary_large_image' },
        metaCreator: { name: 'twitter:creator', content: '@sindipoa' },
        metaDescription: { name: 'twitter:description', content: route.params.title },
        metaDomain: { name: 'twitter:domain', content: applicationName },
        metaImage: { name: 'twitter:image', content: imagePath },
        metaSite: { name: 'twitter:site', content: '@sindipoa' },
        metaTitle: { name: 'twitter:title', content: route.params.title }
      }
    }

    useMeta(metaData)
  }
})

onMounted(async () => {
  useStructureStore().setScreen($q.screen.name as TStructureScreenSize)
})

</script>
