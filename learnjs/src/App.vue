<script setup lang="ts">
  const loger = () =>{
    console.log("done")
  }
</script>

<template>
  <div class="btn">

    <button >this is logo</button>
  </div>
  <div class="search">
    <input type="text" id="value">
  </div>
  <div class="btnsearch">
    <button @click="loger">search</button>
  </div>
  
    <button class="pruduct">first prudus</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.btn{
  position: absolute;
  top: 5%;
  right: 2%;
}

.search{
  position: absolute;
  top: 6%;
  right: 20%;
}
.btnsearch{
  position: absolute;
  top: 5%;
  right: 45%;
}
.pruduct{
  right: 2%;
  top: 15%;
  width: 500px;
  background-color: red;
}


</style>
