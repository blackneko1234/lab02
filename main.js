const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCartAdd(id) {
            this.cart.push(id)
        },
        updateCartRemove(id) {
            var Target = this.cart.indexOf(id)
            this.cart.splice(Target, 1)
        }
    }
})