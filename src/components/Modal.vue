<template>
    <div class="backgroand">
        <div class="modal" :class="{sale: theme === true}">
            <h1> {{ header }} </h1>
            <p> {{ text }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props : ['header' , 'text' , 'theme']
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
        margin: 128px 0ipx ;
    }

    .sale{
        background-color: crimson;
        font-style: italic;
    }
</style>