<template>
  <div class="product" :class="{ large }">
    <img 
      :src="require(`../assets/${productImage}`)"
      height="310px"
      width="310px"
    >
    <div>
      <h2>{{character.title}}</h2>
      <p>{{character.description}}</p>
      <button>Oh, take my money!</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{character: Object, big: Boolean},
  data(){ 
    return {
      productImage: this.character.image,
      large: this.big
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

.product {
  width: 310px;
}

h2 {
  font-family: 'Fira Sans';
  font-weight: 700;
  font-size: 34px;
}

p {
  font-family: 'Fira Sans';
  font-size: 16
}

h2, p {
  color: white;
  margin: 1rem 0;
}

button {
  background: #E83F57;
  margin-top: 1rem;
  margin-bottom: 3rem;
  border-radius: 4px;
  border-style: none;
  font-family: 'Fira Sans';
  color: white;
  padding: 10px;
}

.large {
  background: white;
  color: #222222;
  width: 483px
}

.large img {
  width: 483px;
  height: 483px;
}

.large p, .large h2 {
  color: #222222;
}

.large > div {
  display: flex;
  flex-direction: column;
  padding: 1rem
}

.large > div > button {
  margin-bottom: 0;
  align-self: flex-start;
  padding: 15px;
  font-size: 14px;
}

</style>