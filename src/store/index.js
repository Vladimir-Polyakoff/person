import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // pag1: {
    //   name: '',
    //   password: ''
    // },
    // **
    page1: '',
    page2: '',
    pageId: null
  },
  getters: {
    dataPage1 (state) {
      return state.page1
    },
    dataPage2 (state) {
      return state.page2
    },
    image (state) {
      return state.page1.image
    }
  },
  mutations: {
    setFormPage (state, {name, value}) {
      // state[name] = value ** можно было бы по ключю запихать
      Vue.set(state, name, value)
      console.log(state)
    }
  },
  actions: {
    nextPage () {
      router.push({ name: 'Page' + (router.currentRoute.meta.id + 1)})
    },
    prevPage () {
      router.push({ name: 'Page' + (router.currentRoute.meta.id - 1)})
    }
  },
  modules: {
  }
})
