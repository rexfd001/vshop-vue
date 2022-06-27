import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    name: 'vshop',
    isLogin: false
  }),
  getters: {},
  actions: {}
})