<template>
  <div id="app" class="mt-5">
   <shop-layout>
      <template slot="product-list">
        <product-list></product-list>
      </template>
      <template slot="cart">
        Carrito
      </template>  
   </shop-layout>
  </div>
</template>
<templa

<script>

import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'
export default {
  name: 'App',
  components: {
    ShopLayout, ProductList
  }
}
</script>


