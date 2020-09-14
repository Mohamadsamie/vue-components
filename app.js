new Vue({
    el: '#my-app1',
    data: {
        title: 'هر چی بنویسی اینجا هم نشون میده :)',
        link: 'https://google.com'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value
        },
        // غییر دادن متن همزمان با نوشتن
    }
})

new Vue({
    el: '#my-app2',
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