<template>
  <div class="header">
    <router-link to="/MenuBar"><img class="burger" src="../assets/navicon.svg" alt="burger menu"></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scpoed>

.header {
  height: 608px;
  width: 100%;
  background: #3DE07E url('../assets/ninjahead.svg') center bottom no-repeat
}

.burger{
    display: flex;
    padding: 30px;
  }

</style>