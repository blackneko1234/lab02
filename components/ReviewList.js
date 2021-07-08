app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            require: true
        }
    },
    template:
        `<div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review,index) in reviews" :key="index">
                <b>{{ review.name }}<b> gave this <b>{{ review.rating }}</b> stars
                <br />
                "{{ review.review }}"
                <br />
                <i>Reccommended this product or not:</i> <b>"{{ review.question }}"</b>
                </li>
            </ul>
        </div>`
})