<template>
  <Modal class="test" @close="changeTheme" :header="headere" :text="text" :theme="theme"  v-if="theme"/>
  <div style="text-align: center;">
    <h1>this is for test</h1>
  <p>this buton for show Modal</p>
  <button @click="changeTheme">show Modal</button>
  </div>
</template>

<script>
  import Modal from './components/Modal.vue'
  export default {
    components : {Modal},
    data(){
      return{
        title : 'this is a sample test',
        headere : 'this is props for a test',
        text : 'this is detals for props',
        theme : true
      }
    },

    methods : {

      changeTheme(){
        this.theme = !this.theme
      }
    }
  }
  
  
</script>

<style scoped>

h1{
  font-style: italic;
}


</style>
