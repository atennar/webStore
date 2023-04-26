<script setup lang="ts">
  
</script>

<template>
  <div class="btn">

    <button >this is logo</button>
  </div>
  <div class="search">
    <input type="text">
  </div>
  <div class="btnsearch">
    <button>search</button>
  </div>
  <div class="pruduct">
    <button>first prudus</button>
  </div>
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
  position: absolute;
  right: 2%;
  top: 15%;
}


</style>
