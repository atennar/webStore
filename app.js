const app = Vue.createApp({
    data(){
        return{
            X:0,
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
            names:[
                {name:'tomato',property:'it is good for your body',price:20000 , count:0 ,hasbuy:false},
                {name:'benana',property:'it is good for your body',price:30000 ,count:0 ,hasbuy:false},
                {name:'orange',property:'it is good for your body',price:40000 ,count:0 ,hasbuy:false},
                {name:'watermelone',property:'it is good for your body',price:50000 ,count:0 ,hasbuy:false}
            ]
        }
    },
//this is method property that we can difine a function
    methods : {
        Titlechange(name){
            this.title = name
        },

        showmethod (){
            this.show = !this.show
        },

        mousehandle() {
            console.log('this even done')
        },

        mouseevent(e){
            this.X = e.offsetX
        },

        buy(fruit) {
            fruit.count++
            fruit.hasbuy = true
            return fruit
        }


    }
})

app.mount('#app')