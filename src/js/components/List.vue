<template>
    <div class="lists__item">
        <div class="list">
            <list-box>
                <template slot="header">Lista ({{ listProducts.length }})</template>
                <div class="list__item" v-for="product in listProducts">
                    <product :product="product" @select="product => $store.commit('addToBasket', product)" :selectable="true" :selected="false" />
                </div>
            </list-box>
        </div>
        <div class="list">
            <list-box>
                <template slot="header">Koszyk ({{ basketProducts.length }})</template>
                <div class="list__item" v-for="product in basketProducts">
                    <product :product="product" @select="product => $store.commit('removeFromBasket', product)" :selectable="true" :selected="true" />
                </div>
            </list-box>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import Product from './Product';

    export default {
        components: {
            'product': Product
        },
        computed: {
            ...mapGetters(['listProducts', 'basketProducts'])
        }
    }
</script>
