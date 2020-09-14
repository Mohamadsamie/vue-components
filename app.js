new Vue({
    el: '#my-app',
    data: {
        title: 'هر چی بنویسی اینجا هم نشون میده :)'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value
        }
    }
})