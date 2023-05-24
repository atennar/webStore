<template>
  <ul>
    <li v-for="x in counter" :key="x">
      <Modal :title="titles[x-1]" :prices="prices[x-1]"/>
    </li>
  </ul>
    
  
</template>

<script>
import Modal from './components/Modal.vue'
export default ({
  name: 'App',
  components : {Modal},
  data(){
    return{
      counter:3,
      titles : ['benana','orange','watermelone'],
      prices : [25000,30000,45000]

    }
  },

  
  
});
</script>

<style>
li{
  display: inline-block;
}
</style>
