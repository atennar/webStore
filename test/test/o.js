const o = Vue.createApp({
    // template:'<h2>hello!</h2>',
    data(){
        return{
            url:"https://www.google.com",
            x: 0,
            y: 0,
            showName: true,
            persons: [
                {name: "najme",age: 10},
                {name: "maryam",age: 14},
                {name: "fateme",age: 12},
                {name: "zahra",age: 29},

            ]

        }
    },
    methods:{
        changeTitle(name){
            this.name = name
        },
        changeShowName(){
            this.showName = !this.showName
        },
        handleEvent(e){
            console.log(e)
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        }

    }
})//create component
o.mount("#o")//put component on this element