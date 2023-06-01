<template>
  <div v-if="showBoxLogin">
    <Header @login="login" @choose="choose"  />
  </div>
  <div v-if="!showBoxLogin">
    <login-form />
  </div >
  <div v-if="showCooseCity">
    <chooseCity @hideCity="choose" />
    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import LoginForm from './components/LoginForm.vue'
  import ChooseCity from './components/ChooseCity.vue'
  export default {
    components : {Header,LoginForm,ChooseCity},
    data(){
      return{
        showBoxLogin : true,
        showCooseCity : false
      }
    },

    methods : {

      login(){
        this.showBoxLogin = !this.showBoxLogin
      },

      choose(){
        this.showCooseCity = !this.showCooseCity
      }
    }
  }
  
  
</script>

<style scoped>

h1{
  font-style: italic;
}


</style>
