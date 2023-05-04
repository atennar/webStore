const app = Vue.createApp({
    //data,function
    // template:"<h2>this is a test</h2>",
    data(){
        //an object return
        return{
            showBooks: true,
            title:"Golestan",
            author:"Saadi",
            age: 45
        }
    },
    methods:{
        changetitle(book){
            this.title = book;
        },
        changeShowBook(){
            this.showBooks = !this.showBooks
        },
        handleEvent(){
            console.log("event");
        }
    }

})
app.mount("#app")