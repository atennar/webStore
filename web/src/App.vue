<template>
  <Modal />
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

</style>
