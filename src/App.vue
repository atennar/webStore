<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  counter : 20
})
const increase1 = () =>{
  state.counter = state.counter +1 
}

const increase2 = () =>{
  state.counter = state.counter +2 
}

const increase3 = () =>{
  state.counter = state.counter +3 
}

const reset = () =>{
  state.counter = 20
}
</script>

<template>
  <!-- <button @click="increase" >increase</button>
  <h1 id="app">{{ state.counter }}</h1> -->
  <header id="headerStyle">
    <button @click="increase1" class="headerBtn">increase one  </button>
    <button @click="increase2" class="headerBtn">increase two</button>
    <button @click="increase3" class="headerBtn">increase three</button>
  </header>
  <div id="show">
    <p id="counter"> your number is : {{ state.counter }}</p>
  </div>

  <button @click="reset" class="restBtnCounter">reset counter</button>
</template>

<style scoped>
#headerStyle{
  /* background-color: aquamarine; */
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);

  padding: 1%;
  /* border: 2px solid orange; */
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
}

.headerBtn{
  background-color: lightseagreen;
  border: none;
  border-radius: 3px;
  margin: 0% 13%;
  scale: 150%;
  box-shadow: 1px 1px 5px black ;
}

#show{
  position: absolute;
  left: 40%;
  top: 40%;
  font-size: 50px;
  text-align: center;
}
.restBtnCounter{
  background-color: lightseagreen;
  border: none;
  border-radius: 3px;
  scale: 150%;
  box-shadow: 1px 1px 5px black ;
  position: absolute;
  top: 60%;
  left: 49%;
}
</style>
