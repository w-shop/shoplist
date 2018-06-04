<template>

    <div class="lists__item">
        <div class="list">
            <list-box>
                <template slot="header">Produkty ({{ products.length }})</template>
                <div class="list__item" v-for="product in products">
                    <product :product="product" />
                </div>
            </list-box>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import Product from './Product';

    export default {
        components: {
            'product': Product
        },
        computed: {
            ...mapState(['products'])
        }
    }
</script>
