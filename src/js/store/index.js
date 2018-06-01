import Vue from 'vue';
import Vuex from 'vuex';
import ProductApi from '../api/product';

Vue.use(Vuex);

let errorMessageTimeout = null;
function timedErrorMessage(commit, message) {
    clearTimeout(errorMessageTimeout);
    commit('setError', message);
    errorMessageTimeout = setTimeout(() => {
        commit('setError', null);
    }, 3000);
}

export default ProductApi.load().then((products) => {
    return new Vuex.Store({
        state: {
            products: products,
            errorMessage: null
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
            setList(state, {product, list}) {
                product.list = list;
            },
            addProduct(state, product) {
                state.products.push(product);
            },
            setError(state, message) {
                state.errorMessage = message;
            }
        },
        actions: {
            addProduct({commit}, name) {
                const product = ProductApi.create(name, 'list');

                return ProductApi.addProduct(product).then(() => {
                    commit('addProduct', product);
                }).catch((reason) => {
                    timedErrorMessage(commit, reason.message);
                });
            },
            moveToList({commit}, product) {
                return ProductApi.setProductList(product, 'list').then(() => {
                    commit('setList', {product, list: 'list'});
                }).catch((reason) => {
                    timedErrorMessage(commit, reason.message);
                });
            },
            removeFromList({commit}, product) {
                return ProductApi.setProductList(product, null).then(() => {
                    commit('setList', {product, list: null});
                }).catch((reason) => {
                    timedErrorMessage(commit, reason.message);
                });
            },
            moveToBasket({commit}, product) {
                return ProductApi.setProductList(product, 'basket').then(() => {
                    commit('setList', {product, list: 'basket'});
                }).catch((reason) => {
                    timedErrorMessage(commit, reason.message);
                });
            }
        }
    })
});
