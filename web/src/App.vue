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
      title : 'for your name',
      names :['ali','mohammad']
    }
  },

  
  
});
</script>

<style>
h1{
  color: aqua;
  text-align: center;
}
</style>
