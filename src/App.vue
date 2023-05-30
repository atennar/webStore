<template>
  <input type="text" ref="name">
  <button @click="eventHandeling">Password mode</button>
</template>

<script>

  export default {
    data(){
      return{
        title : 'this is a sample test'
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
    }
  }
  
  
</script>

<style>
h1{
  color: aqua;
}
</style>
