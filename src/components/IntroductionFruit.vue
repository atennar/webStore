<template>
    <Header @LoadMainPage="mainPage" />
    <div class="introductionPage" >
        <img :src="fruit.image" alt="cant load" class="image">
        <h1 class="Title">{{ fruit.name }}</h1>
    </div>
    <!-- <h1>this is for test</h1> -->

</template>

<script>
    import Header from './Header.vue'
    export default {
        props : ['fruit'],
        components : {Header},

        methods : {
            mainPage(){
                this.$emit('loadMainPage')
            }
        }
    }
</script>

<style scoped>
    .introductionPage{
        display: inline-flex;
        direction: rtl;
        position: absolute;
        margin: 1%;
        width: 98%;
    }

    .image{
        position: relative;
        top: 64px;
        right: 64px;
        width: 384px;
    }

    .Title{
        position: relative;
        top: 64px;
        right : 512px
    }
</style>