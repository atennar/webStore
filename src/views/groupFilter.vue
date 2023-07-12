<template>
    <body style="direction: rtl; width: 98%; position: relative; right: 1%; top: 20px; ">
        <div style="display: flex; width: 98%; justify-content: space-around; ">
            <hr style="width: 42%; height: 1px; background-color: black;" >
            <h2 style="width: 15%; position: relative; top: -20px;" align="center">{{ groupName }}</h2>
            <hr style="width: 42%; height: 1px; background-color: black;">

        </div>

    <div v-for="fruit in fruits" :key="fruit.id" class="panelOfProduct" >
        <!-- <h1>{{ fruit }}</h1> -->
        <div v-if="fruit.grouping === 'نوشیدنی'" class="background" @click.self="clickedOnProduct(fruit)">
            <img :src="fruit.image" alt="can't load this image" style="width: 200px; border-radius: 5px;" @click="clickedOnProduct(fruit)">
            <h1 @click="clickedOnProduct(fruit)">{{ fruit.name }}</h1>
            <h2 @click="clickedOnProduct(fruit)">{{ fruit.price }}</h2>
            <button class="BTN">خرید</button>
        </div>
    </div>
    </body>
</template>

<script>
    export default {
        props : ['groupName'],
        data(){
            return{
                fruits : [
                    {name : 'پیاز' ,oldPrice : 20000, price :15000, image : '../images/onion.jpg', off:true, grouping:'میوه' , id:1},
                    {name : ' سیب زمینی' ,oldPrice : 25000, price :17000, image : '../images/potato.jpg',off:true,grouping:'میوه' , id:2},
                    {name : ' خیار' ,oldPrice : 18000, price :15000, image : '../images/cucumber.jpg',off:false,grouping:'میوه' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg',off:true,grouping:'میوه' , id:4},
                    {name : ' موز' ,oldPrice : 80000, price :68000, image : '../images/benana.jpg',off:false,grouping:'میوه' , id:5},
                    {name : ' کیوی' ,oldPrice : 45000, price :3000, image : '../images/kiwi.jpg',off:true,grouping:'میوه' , id:6},
                    {name : ' آناناس' ,oldPrice : 16000, price :12000, image : '../images/ananas.jpg',off:true,grouping:'fruit' , id:7},
                    {name : ' دوغ' ,oldPrice : 21000, price :19000, image : '../images/doogh.jpg',off:true,grouping:'نوشیدنی' , id:8},
                    {name : ' کوکاکولا' ,oldPrice : 25000, price :23000, image : '../images/cooca.jpg',off:false,grouping:'نوشیدنی' , id:9},
                    {name : ' انرژی زا' ,oldPrice : 45000, price :40000, image : '../images/energetic.jpg',off:true,grouping:'نوشیدنی' , id:10},
                    {name : ' فانتا' ,oldPrice : 24000, price :22000, image : '../images/fanta.jpg',off:true,grouping:'نوشیدنی' , id:11},
                    {name : ' اسپرایت' ,oldPrice : 22000, price :20000, image : '../images/Sprite.jpg',off:true,grouping:'نوشیدنی' , id:12},
                    {name : ' گلاب' ,oldPrice : 18000, price :15000, image : '../images/golab.jpg',off:false,grouping:'نوشیدنی' , id:13},
                    {name : ' پودر موسیر' ,oldPrice : 36000, price :36000, image : '../images/moosirPoodr.jpg',off:false,grouping:'ادویه' , id:14},
                    {name : ' زردچوبه' ,oldPrice : 29000, price :29000, image : '../images/zardChoobe.jpg',off:false,grouping:'ادویه' , id:15},
                    {name : ' پنیر پیتزا' ,oldPrice : 50000, price :50000, image : '../images/panirpitza.jpg',off:false,grouping:'پروتئین' , id:16},
                    {name : ' گوشت' ,oldPrice : 150000, price :150000, image : '../images/goosht.jpg',off:false,grouping:'پروتئین' , id:17},
                    {name : ' کالباس' ,oldPrice : 80000, price :10000, image : '../images/calbas.jpg',off:false,grouping:'پروتئین' , id:18},
                    {name : ' خیارشور' ,oldPrice : 14000, price :14000, image : '../images/khiarshoor.jpg',off:false,grouping:'کنسرو' , id:19},
                    {name : ' تن ماهی' ,oldPrice : 37000, price :37000, image : '../images/toneMahi.jpg',off:false,grouping:'کنسرو' , id:20},
                    {name : ' ترشی' ,oldPrice : 50000, price :50000, image : '../images/toroshi.jpg',off:false,grouping:'کنسرو' , id:21},
            ]
            }
        },

        methods : {
            
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