const app = Vue.createApp({
    data(){
        return{
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
        }
    },
//this is method property that we can difine a function
    methods : {
        Titlechange(name){
            this.title = name
        },

        showmethod (){
            this.show = !this.show
        }
    }
})

app.mount('#app')