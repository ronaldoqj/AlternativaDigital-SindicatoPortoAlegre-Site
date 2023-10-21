<template>
  <router-view />
</template>

<script setup lang="ts">
import { baseURL, domain, defaultImagePath } from 'src/helpers/helpers'
import { useMeta } from 'quasar'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const applicationName = 'Sindicato dos Bancários de Porto Alegre e Região - SindBancários'
const imagePath = baseURL + defaultImagePath
const description = 'Description test'

const metaData = {
  title: 'Test Metadata Title',
  meta: {
    ogUrl: { property: 'og:url', content: `${domain}${router.currentRoute.value.fullPath}` },
    ogType: { property: 'og:type', content: 'website' },
    ogTitle: { property: 'og:title', content: route.params.title },
    ogDescription: { property: 'og:description', content: description },
    ogImage: { property: 'og:image', content: imagePath },

    metaCard: { name: 'twitter:card', content: 'summary_large_image' },
    metaCreator: { name: 'twitter:creator', content: '@sindipoa' },
    metaDescription: { name: 'twitter:description', content: description },
    metaDomain: { name: 'twitter:domain', content: applicationName },
    metaImage: { name: 'twitter:image', content: imagePath },
    metaSite: { name: 'twitter:site', content: '@sindipoa' },
    metaTitle: { name: 'twitter:title', content: route.params.title }
  }
}

useMeta(metaData)
</script>
