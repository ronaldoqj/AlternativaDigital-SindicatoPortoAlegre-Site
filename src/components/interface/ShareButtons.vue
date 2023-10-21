<script setup lang="ts">
import { baseURL, domain, defaultImagePath } from 'src/helpers/helpers'
import { useMeta } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import IconDefault from 'components/interface/IconDefault.vue'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const applicationName = 'Sindicato dos Bancários de Porto Alegre e Região - SindBancários'

const setMeta = (description?: string) => {
  const imagePath = baseURL + defaultImagePath

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
}

const whatsappUrl = () => {
  // $linkSocialMediaWhatsapp = "whatsapp://send?text={Str::slug($noticia->titulo, '-')} - " . url("/noticia/{$noticia->id}");
  return `whatsapp://send?text=${router.currentRoute.value.fullPath}`
}

const twitterUrl = () => {
  return `${route.params.title}&url=${router.currentRoute.value.fullPath}`
}

const socialMediaShare = (socialMedia: 'facebook' | 'twitter' | 'whatsapp', url: string) => {
  // const url = router.currentRoute.value.fullPath
  const f = {
    w: 630,
    h: 360,
    left: screen.width / 2 - 630 / 2,
    top: screen.height / 2 - 360 / 2
  }
  const t = {
    url: 'https://twitter.com/intent/tweet?text=' + url,
    title: applicationName,
    w: 650,
    h: 450
  }

  switch (socialMedia) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer.php?u=' + url, 'Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + f.w + ', height=' + f.h + ', top=' + f.top + ', left=' + f.left)
      break
    case 'twitter':
      window.open(t.url, t.title, `toolbar=0, status=0, width=${t.w}, height=${t.h}`)
      break
    case 'whatsapp':
    default:
      window.open(url, '_blank')
      break
  }
}

onMounted(() => {
  setMeta()
})
</script>

<template>
  <div class="component__share--buttons">
    <IconDefault @click="socialMediaShare('whatsapp', whatsappUrl())" :size="24" class="icon-class" viewBox="0 0 20.65 20.7" src="/assets/svg/icon-whatsapp-outline.svg#whatsapp_outline" />
    <IconDefault @click="socialMediaShare('facebook', router.currentRoute.value.fullPath)" :size="24" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
    <IconDefault @click="socialMediaShare('twitter', twitterUrl())" :size="24" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
  </div>
</template>

<style lang="scss">
  .component__share--buttons
  {
    //
  }
</style>
