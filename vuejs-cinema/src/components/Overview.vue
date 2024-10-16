<template>
    <div id="overview">
        <day-select v-bind:selected="day"></day-select>
        <div id="main">
            <!-- 76. Agregar matrices de filtros a la lista de películas -->
            <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies" v-bind:day="day"></movie-list>
            <!-- 74. Agregar una carga útil al evento de filtro de verificación -->
            <movie-filter></movie-filter>
        </div>
    </div>
</template>

<script>
import MovieList from './MovieList.vue'
import MovieFilter from './MovieFilter.vue'
import DaySelect from './DaySelect.vue';

export default {
    props: ['genre', 'time', 'movies', 'day'],
    name: 'OverView',
    components: {
        // 77. Creación de lógica para el filtro de género
        MovieList,
        MovieFilter,
        DaySelect
    },
}
</script>