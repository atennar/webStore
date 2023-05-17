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
                {name:'tomato',property:'it is good for your body',price:20000 ,image:'tomato.jpg' ,isfav:false , del:false},
                {name:'benana',property:'it is good for your body',price:30000 ,image:'benana.jpg' ,isfav:false , del:false},
                {name:'orange',property:'it is good for your body',price:40000 , image:'orange.jpg' ,isfav:false ,del:false},
                {name:'watermelone',property:'it is good for your body',price:50000 , image:'watermelone.jpg' ,isfav:false , del:false }
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
        addfav(name) {
            name.isfav = !name.isfav
        },

        addtrush(name){
            name.del = !name.del
            return name
        },

    },

    computed : {
        filterBooks(){
            return this.names.filter(name => name.del === false)
        }
    }
})

app.mount('#app')