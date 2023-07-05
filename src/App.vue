<template>
  <div v-if="showBoxLogin&&!showFruit && !showGroup">
    <Header @login="login"   @choose="choose"  />
    <div class="Grouping">
      <h3 style="font-size: 22px;">دسته بندی ها</h3>
      <h3 v-for="group in groups" :key="group"> {{ group }} </h3>
    </div>
    <hr>
    <Banners />
    <SpecialOffer @OfferClicked="clicked" :fruits="fruits" />
    <groupingVue @clickOnGroup="clickedOnGroup" />
  </div>
  <div v-if="!showBoxLogin">
    <login-form @mainPage="LoadMain" />
  </div >
  <div v-if="showCooseCity">
    <chooseCity @hideCity="choose" />
    
  </div>

  <div v-if="showFruit">
      <IntroductionFruit @loadMainPage="LoadMain"  :fruit="fruitClicked" />
  </div>

  <div v-if="showGroup">
      <groupFilterVue @loadMainPage="LoadMain" @pruduct="clicked" :fruits="fruits" :groupName="groupName"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import LoginForm from './components/LoginForm.vue'
  import ChooseCity from './components/ChooseCity.vue'
  import Banners from './components/Banners.vue'
  import SpecialOffer from './components/SpecialOffer.vue'
  import IntroductionFruit from './components/IntroductionFruit.vue'
  import groupingVue from './components/grouping.vue'
  import groupFilterVue from './components/groupFilter.vue'
  export default {
    components : {Header,LoginForm,ChooseCity,Banners,SpecialOffer,IntroductionFruit,groupingVue,groupFilterVue},
    data(){
      return{
        showBoxLogin : true,
        showCooseCity : false,
        showFruit : false,
        showGroup : false,
        groups : ["اقلام تنظیم بازار","میوه و صیفی","اقلام خوراکی","اقلام غیر خوراکی"],
        groupName : String,
        fruitClicked : {name : String ,oldPrice : Number, price :Number, image : String , id:Number },
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
                    
                ]
        
      }
    },

    methods : {

      login(){
        this.showBoxLogin = !this.showBoxLogin
      },

      choose(){
        this.showCooseCity = !this.showCooseCity
      },

      LoadMain(){
        this.showBoxLogin = true
        this.showFruit = false
        this.showGroup = false
      },
      
      clicked(fruit){
        this.fruitClicked = fruit
        this.showFruit = true
        this.showGroup = false

      },

      clickedOnGroup(groupName){
        this.showGroup = !this.showGroup
        this.groupName = groupName
        console.log(this.groupName)
      }


    }
  }
  
  
</script>

<style scoped>

  .Grouping{
    direction: rtl;
    padding: 0px 30px;
    display: flex;
  }

  .Grouping h3{
    margin: 10px;
  }

</style>
