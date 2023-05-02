<script setup lang="ts">
  const printcosole =() =>{
    console.log('we will add codes for show pprice and other property for tomato');
    document.getElementById("title").innerHTML ="گوجه";
    document.getElementById("tomato").style.display = 'none';
  }
</script>

<template>
  <img class="banner" src="./banner.png" alt="cant load">
  <div @click="printcosole" class="tomato" id="tomato">
    <img src="./tomato.jpg" alt="cant load">
    <h1 id="title">tomato</h1>
    <h2 >30.000 T</h2>
  </div>
</template>

<style scoped>
.banner{
  position: absolute;
  top: 5%;
  left: 25%;
}

.tomato{
  position: absolute;
  top: 50%;
  left: 5%;
  padding: 10px;
  border: 5px solid rgb(255, 147, 6);
  border-radius: 10px;
  
  
}

.tomato:hover{
  border-radius: 20px;
  scale: 110%;
  transition: 0.8s;
}

</style>
