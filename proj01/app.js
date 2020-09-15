new Vue({
    el: '#my-app',
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
