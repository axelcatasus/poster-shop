<template>
  <div class="header">
    <div>
      <span>
        <img 
          class="burger"
          src="../assets/navicon.svg"
          alt="burger menu"
          @click="menuOpen=true">
      </span>
    </div>
    <MenuBar
      v-if="menuOpen"
      @close="menuOpen=false"
    />
    <div class="title">
      <h1 class="header--heading">Poster Shop</h1>
    </div>
          
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  components: { MenuBar }
}
</script>

<style lang='scss' scoped>

.header {
  min-height: 608px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  background: #3DE07E url('../assets/ninjahead.svg') center bottom no-repeat
}
.burger{
    display: flex;
    padding: 30px;
  }
.header--heading {
  font-size: 102px;
  color: #222222
}
.title{
  margin-right: 450px;
  margin-top: 50px;
}


</style>