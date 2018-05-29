<template>
    <div class="product">
        <div class="product__wrapper">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__actions">
                <button class="ico-btn ico-btn--red product__action" v-if="product.list !== null" @click="removeFromList(product)">
                    <icon sprite-id="remove"/>
                </button>
                <button class="ico-btn product__action" v-if="product.list === null" @click="addToList(product)">
                    <icon sprite-id="add"/>
                </button>
                <button class="ico-btn product__action" @click="edit">
                    <icon sprite-id="edit"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: ['product'],
        methods: {
            edit() {
                // TODO
            },
            ...mapMutations(['addToList', 'removeFromList'])
        }
    }
</script>
