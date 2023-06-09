<template>
    <head>
    </head>
    <div class="line">
        <hr  style="width: 40%; height: 0px; margin: 35px 15px;">
        <h2>شگفت انگیز ها </h2>
        <hr  style="width: 40%; height: 0px; margin: 35px 15px;">
    </div>
    <div class="scrole">
        <div class="banner">
            <h2>تخفیف های <br>شگفت انگیز</h2>
        </div>
        <div @click.self="clicked(fruit)" v-for="fruit in fruits" :key="fruit.id" class="product">
            <img @click.self="clicked(fruit)" style="width: 150px;"  :src='fruit.image' alt="cant load">
            <h3> {{ fruit.name }} </h3>
            <h3 style="direction: ltr; color: lightseagreen;">  <del style="color: red;"> تومان {{ fruit.oldPrice }} </del> &nbsp; {{ fruit.price }}تومان </h3>
            <button class="btnBuy">خرید</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fruits : [
                    {name : 'پیاز' ,oldPrice : 20000, price :15000, image : '../images/onion.jpg' , id:1},
                    {name : ' سیب زمینی' ,oldPrice : 25000, price :17000, image : '../images/potato.jpg' , id:2},
                    {name : ' خیار' ,oldPrice : 18000, price :15000, image : '../images/cucumber.jpg' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg' , id:3},
                    
                ]
                    
                
            }
        },

        methods : {
            clicked(fruit){
                // console.log(fruit.name)
                this.$emit('OfferClicked',fruit)
            }
        }
    }
</script>

<style>
.scrole{
    padding: 10px;
    direction: rtl;
    /* background-color: #51ff00; */
    background-image: url('../../public/images/images.jpg');
    overflow: auto;
    white-space: nowrap;
    display: flex;
    justify-content: right;
    width: 98%;
    border-radius: 15px;
    border: 1px gray dashed;
    padding: 10px;
}

.product{
    background-color: rgb(255, 255, 255);
    padding: 10px;
    margin: 10px; 
    border-radius: 5px;
    text-align: center;
    /* box-shadow: 5px 5px 5px 5px  rgb(0, 0, 0);  */
    width: 256px;
    
}

.product img {
    border-radius: 5px;
}

.banner{
    text-align: center;
    display: flex;
    align-items: center;
    /* background-color: aqua; */
    margin: 15px;

}

.scrole::-webkit-scrollbar{
    overflow: hidden;

}

.line{
    display: flex;
    /* background-color: aqua; */
    justify-content: center;
}

.btnBuy{
    background-color: rgb(80, 200, 120);
    border: none;
    width: 50%;
    border-radius: 5px;
    color: white;
}

.btnBuy:hover{
    scale: 105%;
    transition: 0.5s;
    background-color: rgb(80, 200, 120 ,0.7);
}

.product:hover{
    scale: 105%;
    transition: 0.5s;
    background-color: rgb(154, 153, 153 , 0.7);
}
</style>