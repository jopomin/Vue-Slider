var app = new Vue({
    el: "#root",
    data: {
        counter: 0,
        pics: [
            "img/sun1.jpg",
            "img/sun2.jpg",
            "img/sun3.jpg",
            "img/sun4.jpg",
            "img/sun5.jpg"
        ]
    },
    created: function () {
        setInterval(() => {
            this.nxPic();
        }, 3000);

    },
    methods: {
        prPic: function() {
            this.counter --;
            if (this.counter < 0) this.counter = this.pics.length-1;
        },
        nxPic: function() {
            this.counter ++;
            if (this.counter == this.pics.length) this.counter = 0;
        }
    }
});