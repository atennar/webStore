<template>
  <h1>{{title}}</h1>
  <input type="text" ref="search">
  <button @click="search">search</button>
  <button @click="add">add</button>
</template>

<script>

export default ({
  name: 'App',
  data(){
    return{
      title : 'for your name',
      names :['ali','mohammad']
    }
  },

  methods : {
    search (){
      for(let name in this.names){
        if(this.$refs.search.value === this.names[name]){
          console.log('find')
        }
      }
    }
  }
});
</script>

<style>
h1{
  color: aqua;
  text-align: center;
}
</style>
