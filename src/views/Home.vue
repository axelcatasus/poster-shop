<template>
  <div class="home">
    <article v-for='product in products' :key="product.id">
      <p>{{product.title}}</p>
    </article>
  </div>
</template>

<script>

export default {
  computed: {
    products(){
      return this.$store.state.products
    }
  }
}
</script>


<style lang="scss" scoped>

.home {
  background: #222222;
  height: 400px;
  width: 100%;
}

</style>