<template>
    <Header @LoadMainPage="mainPage"/>
    <div v-for="fruit in fruits" :key="fruit.id">
        
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        components : {Header},
        props : ['fruits'],


        methods : {
            mainPage(){
                this.$emit('loadMainPage')
            },
        }


    }
</script>

<style>

</style>