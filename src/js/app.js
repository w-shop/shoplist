import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

import '../styles/main.scss';
import router from './router';
import store from './store';

import Icon from './components/Icon';
import ListBox from './components/ListBox';

Vue.component('icon', Icon);
Vue.component('list-box', ListBox);

new Vue({
    router,
    store,
    el: '#app',
    created() {
        this.$router.replace('/list');
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['listProducts', 'basketProducts']),
        totalListCount() {
            return this.listProducts.length + this.basketProducts.length;
        }
    }
});
