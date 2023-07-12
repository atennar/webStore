<template>
    <nav>
        <Header @choose="ChooseCity"/>
        <Banner />
        <SpecialOffer/>
        <grouping/>
    </nav>
    <div class="city" v-if="showCity">
        <ChooseCity @hideCity="ChooseCity"/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Banner from '../components/Banners.vue'
    import ChooseCity from '../components/ChooseCity.vue'
    import SpecialOffer from '@/components/SpecialOffer.vue'
    import grouping from '@/components/grouping.vue'
export default {
    components :{Header,Banner,ChooseCity,SpecialOffer,grouping},

    data(){

        return{
            showCity:false
        }

    },
    methods:{
        ChooseCity(){
            this.showCity = !this.showCity
        }
    }
}
</script>

<style>

</style>