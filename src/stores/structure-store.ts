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
          break
        case 'lg':
          this.screen.screenSize = 'lg'
          break
        case 'md':
          this.screen.screenSize = 'md'
          break
        case 'sm':
          this.screen.screenSize = 'sm'
          break
        case 'xs':
        default:
          this.screen.screenSize = 'xs'
          break
      }

      switch (size) {
        case 'xs':
        case 'sm':
          this.screen.screenDevice = 'mobile'
          break
        case 'md':
        case 'lg':
        case 'xl':
        default:
          this.screen.screenDevice = 'desktop'
          break
      }
    }
  }
})
