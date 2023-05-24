<template>
  <ul >
    <li v-for="name in 11" :key="name"><Modal /></li>
  </ul>
</template>

<script>
import Modal from './components/Modal.vue'
export default ({
  name: 'App',
  components : {Modal},
  data(){
    return{
      names : ['ali','reza','mohammad' , 'ahmad' , ]
    }
  },

  
  
});
</script>

<style>
li{
  display: inline-block;
}
</style>
