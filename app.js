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
        },

        mousehandle() {
            console.log('this even done')
        },

        mouseevent(e){
            console.log(e)
        }
    }
})

app.mount('#app')