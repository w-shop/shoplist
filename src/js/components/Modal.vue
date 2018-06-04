<template>
    <div :class="modalClass">
        <div class="modal__window">
            <div class="modal__header">
                <slot name="title"></slot>
                <a href="#close" class="modal__close" @click.prevent="close"><span>close</span></a>
            </div>
            <div class="modal__body"><slot></slot></div>
            <div class="modal__footer"><slot name="footer"></slot></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['open'],
        computed: {
            modalClass() {
                const classes = ['modal'];
                if (this.open) {
                    classes.push('modal--open');
                }
                return classes;
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>
