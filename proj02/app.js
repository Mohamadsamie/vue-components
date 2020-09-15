new Vue({
    el: '#my-app',
    data: {
        message: 'پیام اولیه :)',
    },
    methods: {
        sayHello: function(){
            this.message = "سلام دوست من :)"
            return this.message
        }
    }
})