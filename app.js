const app = Vue.createApp({
    data(){
        return{
            X:0,
            show :true,
            title : "cell phone",
            price : 45,
            country : 'iran',
            names:[
                {name:'ali',family:'baghery',age:13},
                {name:'reza',family:'zare',age:13},
                {name:'mohammad',family:'fallah',age:13},
                {name:'amir',family:'nejaty',age:13}
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