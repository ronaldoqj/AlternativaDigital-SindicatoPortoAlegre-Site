<script setup lang="ts">
import { domain, metaImage } from 'src/helpers/helpers'
// import { baseURL, defaultImagePath } from 'src/helpers/helpers'
import { useMeta } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import IconDefault from 'components/interface/IconDefault.vue'
import { onMounted } from 'vue'

const props = defineProps({
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
})

const route = useRoute()
const router = useRouter()
const applicationName = 'Sindicato dos Bancários de Porto Alegre e Região - SindBancários'

const setMeta = () => {
  const description = props.description
  console.log('DESCRIPTION SOCIAL MEDIAS', description)

  // const imagePath = baseURL + defaultImagePath
  const imagePath = props.image as string

  /**
   * Example:
    <!-- Primary Meta Tags -->
    <title>Sindicato dos Bancários de Porto Alegre e Região - SindBancários</title>
    <meta name="title" content="Sindicato dos Bancários de Porto Alegre e Região - SindBancários" />
    <meta name="description" content="Site of Syndicate of Porto Alegre" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://novo.sindbancarios.nodejsng15f06.uni5.net/" />
    <meta property="og:title" content="Sindicato dos Bancários de Porto Alegre e Região - SindBancários" />
    <meta property="og:description" content="Site of Syndicate of Porto Alegre" />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="http://novo.sindbancarios.nodejsng15f06.uni5.net/" />
    <meta property="twitter:title" content="Sindicato dos Bancários de Porto Alegre e Região - SindBancários" />
    <meta property="twitter:description" content="Site of Syndicate of Porto Alegre" />
    <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

    <!-- Meta Tags Generated with https://metatags.io -->
   */

  const metaData = {
    // title: route.params.title,
    meta: {
      ogType: { property: 'og:type', content: 'website' },
      ogUrl: { property: 'og:url', content: `${domain}${router.currentRoute.value.fullPath}` },
      ogTitle: { property: 'og:title', content: route.params.title },
      ogDescription: { property: 'og:description', content: description },
      ogImage: { property: 'og:image', content: metaImage(imagePath) },

      metaCard: { name: 'twitter:card', content: 'summary_large_image' },
      metaUrl: { name: 'twitter:url', content: `${domain}${router.currentRoute.value.fullPath}` },
      metaTitle: { name: 'twitter:title', content: route.params.title },
      metaDescription: { name: 'twitter:description', content: description },
      metaImage: { name: 'twitter:image', content: metaImage(imagePath) }
      // metaCreator: { name: 'twitter:creator', content: '@sindipoa' },
      // metaDomain: { name: 'twitter:domain', content: applicationName },
      // metaSite: { name: 'twitter:site', content: '@sindipoa' }
    }
  }

  useMeta(metaData)
}

const whatsappUrl = () => {
  // $linkSocialMediaWhatsapp = "whatsapp://send?text={Str::slug($noticia->titulo, '-')} - " . url("/noticia/{$noticia->id}");
  return `whatsapp://send?text=${domain + router.currentRoute.value.fullPath}`
}

const facebookUrl = () => {
  return domain + router.currentRoute.value.fullPath
}

const twitterUrl = () => {
  return `${route.params.title}&url=${router.currentRoute.value.fullPath}`
}

const socialMediaShare = (socialMedia: 'facebook' | 'twitter' | 'whatsapp', url: string) => {
  // const url = router.currentRoute.value.fullPath
  const f = {
    w: 630,
    h: 560,
    left: screen.width / 2 - 630 / 2,
    top: screen.height / 2 - 360 / 2
  }
  const t = {
    url: 'https://twitter.com/intent/tweet?text=' + url,
    title: applicationName,
    w: 650,
    h: 550
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
    <div class="title">Compartilhar</div>
    <q-btn size="12px" outline round color="quinary">
      <IconDefault @click="socialMediaShare('whatsapp', whatsappUrl())" :size="18" class="icon-class" viewBox="0 0 20.65 20.7" src="/assets/svg/icon-whatsapp-outline.svg#whatsapp_outline" />
    </q-btn>
    <q-btn size="12px" outline round color="quinary">
      <IconDefault @click="socialMediaShare('facebook', facebookUrl())" :size="18" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
    </q-btn>
    <q-btn size="12px" outline round color="quinary">
      <IconDefault @click="socialMediaShare('twitter', twitterUrl())" :size="18" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
    </q-btn>
  </div>
</template>

<style lang="scss">
  .component__share--buttons
  {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 320px;
    border: solid 1px $quaternary;
    padding: 8px 8px;
    color: $senary;
    border-radius: 30px;
    background-color: $quaternary;
    box-shadow: inset 0 2px 6px $quinary;
    transition: 0.3s ease-in-out;

    @media only screen and (max-width: $breakpoint-xs)
    {
      width: 100%;
      margin-top: -20px;
      margin-bottom: 15px;
    }
  }
</style>
