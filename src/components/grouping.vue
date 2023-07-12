<template>
    <div class="scrole">
        <div class="background" v-for="group in groups" :key="group" @click="clickOnGroup(group.name)">
            <router-link :to="{name: 'GrUop' , params : {id : group.name}}" style="text-decoration: none; color: black;">
                <div>
                <img :src='group.image' alt="cant load this " class="img">
                <h2>{{ group.name }}</h2>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            groups : [
            {name:'پروتئین',image:'../images/protien.png'},
            {name:'نوشیدنی',image:'../images/drink.png'},
            {name:'کنسرو',image:'../images/conserve.png'},
            {name:'شوینده',image:'../images/shooyandeh.png'},
            {name:'ادویه',image:'../images/advieh.png'},
            {name:'نون',image:'../images/noon.png'},
            {name:'تنقلات',image:'../images/tanagholat.png'},
            {name:'لبنیات',image:'../images/labaniat.png'},
            {name:'لوازم التحریر',image:'../images/lavazemT.png'},
        ]
        }
    },

    methods : {

        clickOnGroup(groupName){
            this.$emit('clickOnGroup',groupName)
        }
        
    }
}
</script>

<style scoped>
.scrole{
    padding: 10px;
    direction: rtl;
    /* background-color: #51ff00; */
    /* background-image: url('../../public/images/images.jpg'); */
    overflow: auto;
    white-space: nowrap;
    display: flex;
    justify-content: right;
    width: 97%;
    border-radius: 15px;
    /* border: 1px gray solid; */
    padding: 10px;
    margin: 16px 1%;
}

.scrole::-webkit-scrollbar{
    overflow: hidden;

}

.img{
    width: 164px;
}

.background{
    text-align: center;
    margin: 0 8px;
}

.background :hover{
    scale: 110%;
    transition: 0.8s;
}
</style>