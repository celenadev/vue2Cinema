import './style.scss';
import Vue from 'vue';

//80. Entendiendo la API
import VueResorce from 'vue-resource';
Vue.use(VueResorce);
// 80. Entendiendo la API

//Biblioteca externa de  hora en tiempo real
import moment from 'moment-timezone'
moment.tz.setDefault("UTC")
//Para hacer uso desde caulquier parate del proyecto
Object.defineProperty(Vue.prototype, '$moment', { get () { return this.$root.moment } })
//Biblioteca externa de  hora en tiempo real

// 95. Uso de un bus de eventos global en el proyecto
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get () { return this.$root.bus } })// this.$root.bus

import routes from './util/router'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Router
const router = new VueRouter({ routes })
//Router
new
    Vue({
        el: '#app',
        data: {
            genre: [],
            time: [],
            // Obtención de datos de la api
            movies: [],
            moment,
            day: moment(),
            bus
        },
        methods: {

        },
        created () {
            // Obtención de datos de la api
            this.$http.get('/api').then(response => {
                this.movies = response.data;
            });
            this.$bus.$on('check-filter', (title, category, checked) => {
                if (checked) {
                    this[category].push(title);
                } else {
                    let index = this[category].indexOf(title);
                    if (index > -1) {
                        this[category].splice(index, 1);
                    }
                }
            });
            this.$bus.$on('set-day', (dayEnviado) => {
                this.day = dayEnviado;
            });
        },
        router
    });







