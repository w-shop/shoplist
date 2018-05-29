import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {name: 'Kurczak', list: null},
            {name: 'Panini', list: null}
        ]
    },
    getters: {
        listProducts: (state) => {
            return state.products.filter(product => product.list === 'list');
        },
        basketProducts: (state) => {
            return state.products.filter(product => product.list === 'basket');
        }
    },
    mutations: {
        addToList(state, product) {
            product.list = 'list';
        },
        removeFromList(state, product) {
            product.list = null;
        },
        addToBasket(state, product) {
            product.list = 'basket';
        },
        removeFromBasket(state, product) {
            product.list = 'list';
        }
    }
})
