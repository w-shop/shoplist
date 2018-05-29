<template>
    <div class="product">
        <div class="product__wrapper">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__actions">
                <button class="ico-btn ico-btn--red product__action" v-if="inList" @click="$emit('remove-from-list')">
                    <icon sprite-id="remove"/>
                </button>
                <button class="ico-btn product__action" v-if="!inList" @click="$emit('add-to-list')">
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
    export default {
        props: ['product', 'inList'],
        methods: {
            edit() {
                // TODO
            }
        }
    }
</script>
