import Vue from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex';

import '../styles/main.scss';
import router from './router';
import store from './store';

import Icon from './components/Icon';
import ListBox from './components/ListBox';
import Modal from './components/Modal';
import EditProduct from './components/EditProduct';

Vue.component('icon', Icon);
Vue.component('list-box', ListBox);
Vue.component('modal', Modal);

store.then((store) => {
    new Vue({
        router,
        store,
        el: '#app',
        components: {
            'edit-product': EditProduct
        },
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
            ...mapState(['products', 'errorMessage', 'editedProduct']),
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

