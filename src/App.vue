<template>
  <div v-if="showBoxLogin">
    <Header @login="login"   @choose="choose"  />
    <div class="Grouping">
      <h3 style="font-size: 22px;">دسته بندی ها</h3>
      <h3 v-for="group in groups" :key="group"> {{ group }} </h3>
    </div>
    <hr>
    <Banners />
    <SpecialOffer />
  </div>
  <div v-if="!showBoxLogin">
    <login-form @mainPage="LoadMain" />
  </div >
  <div v-if="showCooseCity">
    <chooseCity @hideCity="choose" />
    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import LoginForm from './components/LoginForm.vue'
  import ChooseCity from './components/ChooseCity.vue'
  import Banners from './components/Banners.vue'
  import SpecialOffer from './components/SpecialOffer.vue'
  export default {
    components : {Header,LoginForm,ChooseCity,Banners,SpecialOffer},
    data(){
      return{
        showBoxLogin : true,
        showCooseCity : false,
        groups : ["اقلام تنظیم بازار","میوه و صیفی","اقلام خوراکی","اقلام غیر خوراکی"]
      }
    },

    methods : {

      login(){
        this.showBoxLogin = !this.showBoxLogin
      },

      choose(){
        this.showCooseCity = !this.showCooseCity
      },

      LoadMain(){
        this.showBoxLogin = true
      }
      
    }
  }
  
  
</script>

<style scoped>

  .Grouping{
    direction: rtl;
    padding: 0px 30px;
    display: flex;
  }

  .Grouping h3{
    margin: 10px;
  }

</style>
