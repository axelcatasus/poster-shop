<template>
  <div class="container">
      <div class="nav section">
        <h1>Nav</h1>
        <h2>Products</h2>
        <h2>About Us</h2>
        <h2>Contact</h2>

        <!-- <h2><router-link class="link" to="/about">Products</router-link></h2>
        <h2> <router-link class="link" to="/">About Us</router-link></h2>
        <h2><router-link class="link" to="/">Contact</router-link></h2> -->
      </div>
      <div class="info section">
          <h1>Address</h1>
          <p>Plinkeplonkvägen 32</p>
          <p>888 81 Klonkberga</p>
      </div>
      <div class="social-icons section">
          <h1>Social media</h1>
          <div class="icons">
            <img src="../assets/logo-twitter.svg" alt="logo">
            <img src="../assets/logo-instagram.svg" alt="logo">
            <img src="../assets/logo-linkedin.svg" alt="logo">
            <img src="../assets/logo-instagram.svg" alt="logo">
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>

.container{
    width: 100%;
    height: 320px;
    background-color: #3A3838;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    color: white;

    img{
        width: 32px;
    }

    h1{
        font-family: 'Fira Sans', sans-serif;
        font-size: 30px;
    }

    p, 
    h2{
        font-family: 'Fira Sans', sans-serif;
        font-weight: normal;
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 0px;

        .link{
        color: white;
        text-decoration: none;
    }
    }

    .section{
    margin-top: 50px;
    }


}

.nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}



@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
</style>