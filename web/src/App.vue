<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handle">click</button>
</template>

<script>

export default ({
  name: 'App',
  data(){
    return{
      title : 'for your name'
    }
  },

  methods : {
    handle (){
      console.log('event')
      console.log(this.$refs.name)
      this.$refs.name.classList.add('mahid')
      this.$refs.name.value="value"
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
