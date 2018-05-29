<template functional>
    <div class="list">
        <div class="list__header"><h2 class="list__title"><slot name="header" /></h2></div>
        <div class="list__items">
            <div class="list__item">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
