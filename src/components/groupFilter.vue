<template>
    <Header @LoadMainPage="mainPage"/>
    <body style="direction: rtl; width: 98%; position: relative; right: 1%; top: 20px; ">
        <div style="display: flex; width: 98%; justify-content: space-around; ">
            <hr style="width: 42%; height: 1px; background-color: black;" >
            <h2 style="width: 15%; position: relative; top: -20px;" align="center">{{ groupName }}</h2>
            <hr style="width: 42%; height: 1px; background-color: black;">

        </div>

        <div v-for="fruit in fruits" :key="fruit.id" class="panelOfProduct" >
        <!-- <h1>{{ fruit }}</h1> -->
        <div v-if="fruit.grouping === groupName" class="background" @click.self="clickedOnProduct(fruit)">
            <img :src="fruit.image" alt="can't load this image" style="width: 200px; border-radius: 5px;" @click="clickedOnProduct(fruit)">
            <h1 @click="clickedOnProduct(fruit)">{{ fruit.name }}</h1>
            <h2 @click="clickedOnProduct(fruit)">{{ fruit.price }}</h2>
            <button class="BTN">خرید</button>
        </div>
    </div>
    </body>
</template>

<script>
    import Header from './Header.vue'
    export default {
        components : {Header},
        props : ['fruits','groupName'],


        methods : {
            mainPage(){
                this.$emit('loadMainPage')
            },

            clickedOnProduct(fruit){
                this.$emit('pruduct',fruit)
                
            }
        }


    }
</script>

<style scoped>
    .panelOfProduct{
        display: inline-flex;
    }
    
    .background{
        text-align: center;
        /* background-color: aqua; */
        border-radius: 10px;
        width: 210px;
        margin: 8px;
        padding: 8px;
        box-shadow: 1px 1px 10px 1px lightgray;
    }

    .BTN{
        width: 80%;
        border: none;
        height: 32px;
        border-radius: 5px;
        background-color: lightseagreen;
    }

    .panelOfProduct :hover{
        scale: 105%;

        transition: 1s;

    }
</style>