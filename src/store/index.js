import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import productsModule from '../modules/products'

export default new Vuex.Store({
 modules: {
   products: productsModule
 }
})

