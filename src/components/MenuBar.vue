<template>
	<div class="modal">
    <div class="modal-content">
    <div class="icons">
      <span class="link">
        <img 
          class="close"
          src="../assets/close.png"
          alt="close icon"
          @click="$emit('close')"
        >
      </span>
    </div>

      <div class="nav section">
      <h2>Products</h2>
      <h2>About Us</h2>
      <h2>Contact</h2>
    </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .modal {
  position: fixed;
  z-index: 1;
  right: 15;
  top: 0;
  width: 30%; 
  height: 70%; 
  overflow: auto;
}
.modal-content {
  background-color: #d35f5f;
  margin-top: 80px; 
  margin-left: 28px;
  padding: 20px;
  width: 40%;
  color: white;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.close{
  width: 20px;
}

.close:hover {
  cursor: pointer;
}

.icons{
  display: flex;
}
link{
  align-self: flex-start;
}
</style>