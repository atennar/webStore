<template>
    <div>
      <Header @choose="ChooseCity"/>
      <router-view/>
      <div class="city" v-if="showCity">
        <ChooseCity @hideCity="ChooseCity"/>
      </div>

    </div>
</template>
<script>
  import Header from './components/Header.vue';
  import ChooseCity from './components/ChooseCity.vue';
  export default{
    components: {Header,ChooseCity},
      data(){

      return{
        showCity:false
      }


      },

      methods:{
        ChooseCity(){
            this.showCity = !this.showCity
        }
    }
  }

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
