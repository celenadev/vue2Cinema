<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <h3>BY TIME OF DAY</h3>
        <div class="filter-group">
            <check-filter v-for="(time, index) in times" :key="index" category="time"
                v-bind:title="time"></check-filter>
        </div>
        <!-- V-ON E LO MISMO QUE @ -->
        <h2>BY GENRES</h2>
        <div class="filter-group">
            <check-filter v-for="(genre, index) in genres" :key="index" category="genre"
                v-bind:title="genre"></check-filter>
        </div>
    </div>
</template>

<script>
import genres from '../util/genres';
// VER EN UNTIL TIMES.JS SE  IMPORTA
import times from '../util/times';
import checkFilter from './CheckFilter.vue'
export default {
    name: 'MovieFilter',
    data () {
        return {
            genres,
            times
        };
    },
    components: {
        checkFilter
    }
}

</script>