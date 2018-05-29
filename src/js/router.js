import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import List from './components/List';
import ProductList from './components/ProductList';

const routes = [
    {path: '/list', component: List },
    {path: '/products', component: ProductList}
];

export default new VueRouter({
    routes,
    linkActiveClass: 'tabs__tab--active',
    linkExactActiveClass: 'tabs__tab--exact-active'
});
