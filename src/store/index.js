import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/assets/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [...products],
    cartProducts: [],
  },
  mutations: {
    cartProductsAdd(state, productId){
      let foundCartProduct = state.cartProducts.find(product => product.id == productId)
      let product = state.products.find(product => product.id == productId)
      if(foundCartProduct){
        foundCartProduct.amount += 1
      } else {
        state.cartProducts.push(product)
      }
    }
  },
  actions: {
    storeAdd( context, productId ){
      context.commit('cartProductsAdd', productId)
    }
  },
  getters: {
    printPrice (state){
      return state.cartProducts.reduce((total, product) => {
        return total + (product.price * product.amount);
      }, 0);
    }
    // printPrice (state){
    //   return state.cartProducts.reduce((total, product) => {
    //     return total + (product.price * product.amount);
    //   }, 0);
    // }
  },
  modules: {
  }
})
