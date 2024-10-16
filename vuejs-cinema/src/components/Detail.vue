<template>
    <div id="detail" v-if="movie">
        <movie-item v-bind:movie="movie">
            <div class="movie-details">
                <p class="movie-genre"> {{ movie.Genre }}</p>
                <p class="movie-plot">{{ movie.Plot }}</p>
                <table>
                    <tr>
                        <td>Realse Date:</td>
                        <td>movie.Released</td>
                    </tr>
                    <tr>
                        <td>Runnig time:</td>
                        <td>movie.Runtine</td>
                    </tr>
                    <tr>
                        <td>Realse Data:</td>
                        <td>movie.Director</td>
                    </tr>
                    <tr>
                        <td>Cast:</td>
                        <td>movie.Actors</td>
                    </tr>
                </table>
            </div>
        </movie-item>
        <div class="home">
            <router-link v-bind:to="{ name: 'home' }">Back To </router-link>
        </div>
    </div>
</template>
<script>
import MovieItem from './MovieItem.vue';
export default {
    name: 'detail',
    props: ['movies'],
    computed: {
        movie () {
            let movie = this.movies.find(movie => movie.id === this.$route.params.id);
            return movie ? movie.movie : null;
        }
    },

    created () {
        console.log(this.$route.params.id);
    },
    components: {
        MovieItem
    }
}
</script>