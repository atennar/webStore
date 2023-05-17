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
                {name:'tomato',property:'it is good for your body',price:20000 ,image:'tomato.jpg' ,isfav:false},
                {name:'benana',property:'it is good for your body',price:30000 ,image:'benana.jpg' ,isfav:true },
                {name:'orange',property:'it is good for your body',price:40000 , image:'orange.jpg' ,isfav:true },
                {name:'watermelone',property:'it is good for your body',price:50000 , image:'watermelone.jpg' ,isfav:false }
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
       


    }
})

app.mount('#app')