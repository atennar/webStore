<template>
    <div class="backgroand" @click.self="Hidemodal">
        <div class="modal" :class="{sale: theme === true}">
            <h1> {{ header }} </h1>
            <p> {{ text }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props : ['header' , 'text' , 'theme'],

    methods : {
        Hidemodal(){
            this.$emit('close');
        }
    }
}
</script>

<style>
    .backgroand{
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    .modal{
        position: relative;
        left: 40%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        padding: 20px;
        width: fit-content;
        margin: 128px 0px ;
    }

    .sale{
        background-color: crimson;
        font-style: italic;
    }
    .sale h1{
        font-style: italic;
        
    }
</style>