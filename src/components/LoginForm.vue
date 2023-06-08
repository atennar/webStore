<template >
    <MyHeader @LoadMainPage="LoadMain" />
    <h1 align="center">خوش امدید لطفا ثبت نام کنید</h1>
        <div class="loginform">
        <h2 align="right">اعضای فروشگاه </h2>
        <hr>
        <br>
        <form action="#">
            <input class="loginInput" type="text" required placeholder="شماره موبایل" style="text-align: center;">
            <br>
            <br>
            <input class="loginInput" type="password" required placeholder="رمز عبور" style="text-align: center;">
            <br>
            <br>
            <input class="btnForm" type="submit" value="ثبت نام" style="text-align: center;">
            <br>
            <br>
            <input class="btnForm" type="submit" value="ورود" style="text-align: center;">
            
        </form>
        </div>
</template>

<script>
    import MyHeader from './Header.vue'
    export default {
        components : {MyHeader},

        methods : {
            LoadMain(){
                this.$emit('mainPage')
            }
        }
    }
</script>

<style scoped>

    .loginform{
        width: 50%;
        /* border: 5px solid gray; */
        position: absolute;
        left: 25%;
        text-align: center;
        /* height: 25%; */
        padding: 15px;
        background-color: aliceblue;
        border-radius: 10px;
    }

    .loginInput{
        width: 80%;
        height: 30px;
        border-radius: 10px;
        border: 1px solid rgb(216, 213, 213 , 0.5);
    }

    .btnForm{
        border: none;
        border-radius: 5px;
        background-color: green;
        color: white;
        width: 80%;
        height: 30px;
    }


</style>