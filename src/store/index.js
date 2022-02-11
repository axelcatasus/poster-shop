import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/assets/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [...products],
    cartProducts: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
