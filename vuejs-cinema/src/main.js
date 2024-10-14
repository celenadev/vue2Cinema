import './style.scss';
import genres from './util/genres';
import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: []
    },
    methods: {
        // 75. Procesamiento del evento check-filter en la instancia raíz
        checkFilter (category, title, checked) {
            if (checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if (index > -1) {
                    this[category].splice(index, 1);
                }
            }

        }
    },
    components: {
        // 77. Creación de lógica para el filtro de género
        'movie-list': {
            template: `<div id="movie-list">
            <div v-for="movie in filteredMovies" class="movie"> {{ movie.title }}</div>
            </div>`,
            data () {
                return {
                    movies: [
                        { title: 'Pulp Fiction', genre: genres.CRIME },
                        { title: 'Home Alone', genre: genres.COMEDY },
                        { title: 'Austin Powers', genre: genres.DRAMA }
                    ]
                };
            },
            // . 76. Agregar matrices de filtros a la lista de películas
            props: ['genre', 'time'],
            methods: {
                moviePassesGenreFilter (movie) {
                    if (!this.genre.length) {
                        return true;
                    } else {
                        return this.genre.find(genre => movie.genre === genre);
                    }
                }
            },
            computed: {
                filteredMovies () {
                    return this.movies.filter(this.moviePassesGenreFilter);
                }
            }
        },
        'movie-filter': {
            data () {
                return {
                    genres
                };
            },
            template: `<div id="movie-filter">
            <h2>Filter Results</h2>
            <div class="filter-group">
                <check-filter v-for="genre in genres" :key="genre" :title="genre" @check-filter="checkFilter"></check-filter>
            </div>
            </div>`,
            methods: {
                checkFilter (category, title, checked) {
                    // 74. Agregar una carga útil al evento de filtro de verificación
                    this.$emit('check-filter', category, title, checked);
                }
            },
            components: {
                'check-filter': {
                    data () {
                        return {
                            checked: false
                        };
                    },
                    props: ['title'],
                    computed: {
                        isActive () {
                            return this.checked ? 'active' : '';
                        }
                    },
                    template: `<div :class="['checked-filter', isActive]" @click="toggleCheck">
                                    <input type="checkbox" class="checkbox" v-model="checked">
                                    <span class="check-filter-title">{{ title }}</span>
                    </div>`,
                    methods: {
                        toggleCheck (event) {
                            if (event.target.type !== 'checkbox') {
                                this.checked = !this.checked;
                            }
                            this.$emit('check-filter', 'genre', this.title, this.checked);
                        }
                    }
                }
            }
        }
    }
});







