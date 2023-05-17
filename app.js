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
                {name:'tomato',property:'it is good for your body',price:20000 ,image:'tomato.jpg'},
                {name:'benana',property:'it is good for your body',price:30000 ,image:'benana.jpg' },
                {name:'orange',property:'it is good for your body',price:40000 , image:'orange.jpg' },
                {name:'watermelone',property:'it is good for your body',price:50000 , image:'watermelone.jpg' }
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
       


    }
})

app.mount('#app')