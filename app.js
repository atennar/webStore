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
                {name:'benana',property:'it is good for your body',price:30000 ,image:'benana.jpg' ,isfav:false , id:1},
                {name:'orange',property:'it is good for your body',price:40000 , image:'orange.jpg' ,isfav:false ,id:2},
                {name:'watermelone',property:'it is good for your body',price:50000 , image:'watermelone.jpg' ,isfav:false , id:3 }
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
        addfav(name) {
            name.isfav = !name.isfav
        }


    },

    computed : {
        filterBooks(){
            return this.names.filter(book => book.isfav === false)
        }
    }
})

app.mount('#app')