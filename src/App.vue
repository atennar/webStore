<template>
  <Modal @click="changeTheme" :header="headere" :text="text" :theme="theme" />
  <h1>this is for test</h1>
  
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
        theme : false
      }
    },

    methods : {
      eventHandeling(){
        console.log('this is for testing methods');
        console.log(this.$refs.name);
        console.log(this.$refs.name.type);
        this.$refs.name.type= 'password'
        this.$refs.name.classList.add('test');
      },

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
