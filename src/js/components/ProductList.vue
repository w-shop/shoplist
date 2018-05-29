<template>
    <div class="lists__item">
        <div class="list">
            <list-box>
                <template slot="header">Produkty (3)</template>
                <div class="list__item" v-for="product in products">
                    <product :product="product" :in-list="product.list !== null"
                        @remove-from-list="removeFromList(product)"
                        @add-to-list="addToList(product)"
                        />
                </div>
            </list-box>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    import Product from './Product';

    export default {
        components: {
            'product': Product
        },
        computed: {
            ...mapState(['products'])
        },
        methods: {
            ...mapMutations(['addToList', 'removeFromList'])
        }
    }
</script>
