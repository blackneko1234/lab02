app.component('product-details', {
    props: {
        detail: {
            type: Boolean,
            required: true
        }
    },
    template:
        `<p>Detail: {{detaill}}</p>`
    ,
    computed: {
        detaill() {
            if (this.detail) {
                return 'This is socks'
            } return 'Noooo it\'s not work'
        }
    }
}
)