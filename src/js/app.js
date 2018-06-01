import Vue from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex';

import '../styles/main.scss';
import router from './router';
import store from './store';

import Icon from './components/Icon';
import ListBox from './components/ListBox';

Vue.component('icon', Icon);
Vue.component('list-box', ListBox);

store.then((store) => {
    new Vue({
        router,
        store,
        el: '#app',
        data() {
            return {
                newProduct: null,
                addingProduct: false
            }
        },
        created() {
            this.$router.replace('/list');
        },
        computed: {
            ...mapState(['products', 'errorMessage']),
            ...mapGetters(['listProducts', 'basketProducts']),
            totalListCount() {
                return this.listProducts.length + this.basketProducts.length;
            }
        },
        methods: {
            ...mapActions({
                'saveProduct': 'addProduct'
            }),
            addProduct() {
                this.addingProduct = true;
                this.saveProduct(this.newProduct).then(() => {
                    this.newProduct = null;
                }).finally(() => {
                    this.addingProduct = false;
                });
            }
        }
    });
});

