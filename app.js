const app = Vue.createApp({
    data(){
        return{
            X:0,
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
            names:[
                {name:'tomato',property:'it is good for your body',price:20000},
                {name:'benana',property:'it is good for your body',price:30000},
                {name:'orange',property:'it is good for your body',price:40000},
                {name:'watermelone',property:'it is good for your body',price:50000}
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
        }
    }
})

app.mount('#app')