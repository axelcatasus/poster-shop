<template>
  <div class="home">
    <div class="products">
      <Product 
        :character="product"
        v-for='product in products'
        :key="product.id"
      />
    </div>
      <div class="large-products">
        <Product
        :character="product"
        v-for='product in bigProducts'
        :key='product.id'
        :big="true"
        />
      </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  components: { Product },
  computed: {
    products(){
      let productsArray = []
      for(let i = 0; i < this.$store.state.products.length-2; i++){
        productsArray.push(this.$store.state.products[i])
      }
      return productsArray
    },
    bigProducts(){
       let bigProductsArray = []
      for(let i = this.$store.state.products.length-2; i < this.$store.state.products.length; i++){
        bigProductsArray.push(this.$store.state.products[i])
      }
      return bigProductsArray
    }
  }
}
</script>


<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;
  width: 100%;
  padding-top: 96px;
  padding-bottom: 96px
}

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
}

.large-products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
</style>