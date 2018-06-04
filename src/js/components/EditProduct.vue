<template>
    <modal :open="!!product" @close="close">
        <h2 slot="title">Edit {{ product.name }}</h2>
        <div class="form-control">
            <input v-model="name" class="form-control" />
        </div>
        <div slot="footer" v-if="!saving">
            <a href="#save" @click.prevent="save">Save</a>
            <a href="#cancel" @click.prevent="close">Cancel</a>
        </div>
        <div slot="footer" v-else>Saving...</div>
    </modal>
</template>

<script>
    export default {
        props: ['product'],
        data() {
            return {
                name: this.product.name,
                saving: false
            }
        },
        methods: {
            save() {
                this.saving = true;
                this.$store.dispatch('updateProduct', {
                    product: this.product,
                    name: this.name
                }).then(() => {
                    this.close();
                }).finally(() => this.saving = false);
            },
            close() {
                this.$store.commit('editProduct', null);
            }
        }
    }
</script>
