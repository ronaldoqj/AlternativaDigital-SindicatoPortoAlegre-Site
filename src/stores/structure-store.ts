import { defineStore } from 'pinia'
import { TStructureScreenSize, TStructureScreenDevice } from 'src/types/IDefaults'

/**
 * Functionality developed in App.vue
 */
export const useStructureStore = defineStore('counter', {
  state: () => ({
    screen: {
      screenSize: 'xs' as TStructureScreenSize,
      screenDevice: 'mobile' as TStructureScreenDevice
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
