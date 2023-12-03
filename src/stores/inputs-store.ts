import { defineStore } from 'pinia'

export const useInputsStore = defineStore('inputs', {
  state: () => ({
    counter: 0,
    search: null as null | string
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getSearch: (state) => state.search
  },
  actions: {
    increment () {
      this.counter++
    },
    setSearch (value: null | string) {
      this.search = value
    }
  }
})
