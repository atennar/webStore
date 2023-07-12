<template>
<div class="backgraund">
    <img @click="LoadMainPage" class="logo" src="../../public/images/logo.png" alt="cant load logo">
    <button @click="ChooseCity" class="chooseCity">انتخاب شهر</button>
    <input  class="inputSearch" type="text" placeholder="جستو و جو در فوشگاه">
    <router-link to="/Login"><button class="Login">ورود و ثبت نام</button></router-link>
</div>
</template>

<script >
  export default{

    methods : {
        login(){
            this.$emit('login')
        },

        ChooseCity(){
            this.$emit('choose')
        },

        LoadMainPage(){
            this.$emit('LoadMainPage')
        }
    }
  }
  
  
</script>

<style >

.backgraund{
    text-align: right;
    direction: rtl;
    display: flex;
    margin: 10px;
    padding: 10px;
    background-color: rgb(232, 236, 236);
    border-radius: 15px;
    width: 97%;
}

    .logo{
    width: 128px;
    margin: 10px;
    }
    .chooseCity{
        background-color: rgb(61, 250, 61);
        border: none;
        border-radius: 10px;
        height: 48px;
        width: 128px;
        position: relative;
        top: 10px;
    }

    .inputSearch{
        height: 32px;
        width: 512px;
        position: relative;
        top: 16px;
        right: 64px;
        border: 2px solid gray;
        border-radius: 10px;
        direction: rtl;
        text-align: center;
    }

    .loginSignIn{
        position: relative;
        right: 35%;
        height: 48px;
        width: 128px;
        top: 10px;
        background-color: rgb(61, 250, 61);
        border: none;
        border-radius: 10px;
    }

    .Login{
        background-color:  rgb(61, 250, 61);
        border: none;
        border-radius: 10px;
        height: 48px;
        width: 128px;
        position: relative;
        top: 10px;
        right: 512px;
    }
    
</style>