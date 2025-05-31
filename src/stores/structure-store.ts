import { defineStore } from 'pinia'
import { TStructureScreenSize, TStructureScreenDevice } from 'src/types/IDefaults'
import { getValidImageNews, domain, applicationName } from 'src/helpers/helpers'
import { INews } from 'src/types/INews'
import NewsService from 'src/services/NewsService'

/**
 * Functionality developed in App.vue
 */
export const useStructureStore = defineStore('structure', {
  state: () => ({
    screen: {
      screenSize: 'xs' as TStructureScreenSize,
      screenDevice: 'mobile' as TStructureScreenDevice
    },
    metaTags: {
      meta: {
        ogUrl: { property: 'og:url', content: '' },
        ogType: { property: 'og:type', content: 'website' },
        ogTitle: { property: 'og:title', content: '' },
        ogDescription: { property: 'og:description', content: '' },
        ogImage: { property: 'og:image', content: '' },

        metaCard: { name: 'twitter:card', content: 'summary_large_image' },
        metaCreator: { name: 'twitter:creator', content: '@sindipoa' },
        metaDescription: { name: 'twitter:description', content: '' },
        metaDomain: { name: 'twitter:domain', content: applicationName },
        metaImage: { name: 'twitter:image', content: '' },
        metaSite: { name: 'twitter:site', content: '@sindipoa' },
        metaTitle: { name: 'twitter:title', content: '' }
      }
    }
  }),
  getters: {
    currentSize (state) {
      return state.screen.screenSize
    },
    currentDevice (state) {
      return state.screen.screenDevice
    }
  },
  actions: {
    fetchItem (currentRoute: string, currentRouteName: string, id: number) {
      return NewsService.getPost({ id }).then((response) => {
        const data = response.data as INews
        this.metaTags.meta.ogUrl.content = `${domain}${currentRoute}`
        this.metaTags.meta.ogTitle.content = data.title
        this.metaTags.meta.ogDescription.content = data.call
        this.metaTags.meta.ogImage.content = getValidImageNews(data as INews, 'imageNews')

        this.metaTags.meta.metaCard.content = 'summary_large_image'
        this.metaTags.meta.metaDescription.content = data.call
        this.metaTags.meta.metaImage.content = getValidImageNews(data as INews, 'imageNews')
        this.metaTags.meta.metaTitle.content = data.title
      })

      // Original way to call post request
      // return axios.post('http://localhost/api/site/news/get', { id }).then(({ data }) => {
      //   console.log('action fetchItem Inside Axios', data)
      //   this.metaTags.meta.ogUrl.content = `${domain}${currentRoute.fullPath}`
      //   this.metaTags.meta.ogType.content = 'type_value'
      //   this.metaTags.meta.ogTitle.content = data.title
      //   this.metaTags.meta.ogDescription.content = data.description
      //   this.metaTags.meta.ogImage.content = getValidImageNews(data as INews, 'imageNews')

      //   // useMeta(this.metaTags)
      // })
    },
    setScreen (size: TStructureScreenSize) {
      switch (size) {
        case 'xl':
          this.screen.screenSize = 'xl'
          this.screen.screenDevice = 'desktop'
          break
        case 'lg':
          this.screen.screenSize = 'lg'
          this.screen.screenDevice = 'desktop'
          break
        case 'md':
          this.screen.screenSize = 'md'
          this.screen.screenDevice = 'desktop'
          break
        case 'sm':
          this.screen.screenSize = 'sm'
          this.screen.screenDevice = 'mobile'
          break
        case 'xs':
        default:
          this.screen.screenSize = 'xs'
          this.screen.screenDevice = 'mobile'
          break
      }
    }
  }
})
