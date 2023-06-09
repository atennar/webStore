<template>
    <Header @LoadMainPage="mainPage" />
    <h1>name is {{ fruit.name }} </h1>
    <h1>oldPrice (befor off) is {{ fruit.oldPrice }} </h1>
    <h1>new Price  is {{ fruit.price }} </h1>
    <h1>Id is {{ fruit.id }} </h1>
    <h1>Image address is {{ fruit.image }} </h1>

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

<style>

</style>