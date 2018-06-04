<template>
    <div class="product">
        <div class="product__wrapper">
            <button class="product__mark btn" v-if="selectable" @click="$emit('select', product)">
                <icon :sprite-id="selected ? 'checkbox-checked' : 'checkbox-empty'" />
            </button>
            <div class="product__name">{{ product.name }}</div>
            <div class="product__actions">
                <button class="ico-btn ico-btn--red product__action" v-if="product.list !== null" @click="removeFromList(product).then()">
                    <icon sprite-id="remove"/>
                </button>
                <button class="ico-btn product__action" v-if="product.list === null" @click="moveToList(product)">
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
    import { mapActions } from 'vuex';

    export default {
        props: ['product', 'selectable', 'selected'],
        methods: {
            edit() {
                this.$store.commit('editProduct', this.product);
            },
            ...mapActions(['moveToList', 'removeFromList'])
        }
    }
</script>
