const app = Vue.createApp({
    data(){
        return{
            link:"https://www.google.com",
            X:0,
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
            names:[
                {name:'tomato',property:'it is good for your body',price:20000 ,image:'tomato.jpg' ,isfav:false , id:0},
                {name:'benana',property:'it is good for your body',price:30000 ,image:'benana.jpg' ,isfav:true , id:1},
                {name:'orange',property:'it is good for your body',price:40000 , image:'orange.jpg' ,isfav:true ,id:2},
                {name:'watermelone',property:'it is good for your body',price:50000 , image:'watermelone.jpg' ,isfav:false , id:3 }
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
        addfav(name) {
            name.isfav = !name.isfav
            return{
                name
            }
        }


    }
})

app.mount('#app')