import Vue from 'vue';

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
    el: '#app'
});
