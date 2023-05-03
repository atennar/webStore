<script setup lang="ts">
  // document.getElementById("more_tomato").style.display = 'block';
  const printcosole =() =>{
    console.log('we will add codes for show pprice and other property for tomato');
    document.getElementById("title").innerHTML ="گوجه";
    document.getElementById("more_tomato").style.visibility = 'visible';
  }
</script>

<template>
  <img class="banner" src="./banner.png" alt="cant load">
  <div @click="printcosole" class="tomato" id="tomato">
    <img src="./tomato.jpg" alt="cant load">
    <h1 id="title">tomato</h1>
    <h2 >30.000 T</h2>
  </div>

  <div class="more_tomato" id="more_tomato">
    <img src="./tomato.jpg" alt="cant load">
    <h1>tomato</h1>
    <h2>description:</h2>
    <h6>The tomato fruit is globular or ovoid. Botanically, the fruit exhibits all of the common characteristics of berries; a simple fleshy fruit that encloses its seed in the pulp. The outer skin is a thin and fleshy tissue that comprises the remainder of the fruit wall as well as the placenta</h6>
    <h2>price : 30.000 T</h2>
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

.more_tomato{
  position: absolute;
  text-align: left;
  border: 5px dashed green;
  padding: 20px;
  left: 45%;
  background-color: aqua;
  visibility: hidden;
}

</style>
