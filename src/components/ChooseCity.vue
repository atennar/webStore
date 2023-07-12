<template>
<div @click.self="HideCity" class="backList">
    <div class="cityBox">
        <button class="btnCyti" @click="HideCity" v-for="name in cyties" :key="name" > {{ name }} </button>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                cyties : ["یزد" , "قم" , "مشهد" , "بندر عباس" , "اصفهان" , "اهواز" ,"مازندران" ,"گیلان" ,]
            }
        },

        methods : {
            HideCity() {
                this.$emit('hideCity')
            }
        }
    }
 
</script>

<style>
    .btnCyti{
        background-color: rgb(248, 246, 246);
        border: 1px solid rgba(146, 145, 145, 0.5);
        width: 100px;
        height: 50px;
        border-radius: 5px;
        margin: 10px;
    }

    .backList{
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        background-color: rgba(117, 117, 117, 0.5);
        text-align: center;
    }

    .cityBox{
        position: absolute;
        top: 25%;
        left: 25%;
        width: 50%;
        /* height: 50%; */
        background-color: white;
        border-radius: 10px;
        padding: 30px;

        background-image: url('../../public/images/ChooseCity.jpg');
        background-size: cover;
    }

    .btnCyti:hover{
        background-color: rgb(3, 204, 3);
        transition: 1s;
    }
</style>