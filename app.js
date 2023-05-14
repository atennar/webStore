const app = Vue.createApp({
    data(){
        return{
            X:0,
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
            books:['ali','mohammad','reza','amir']
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