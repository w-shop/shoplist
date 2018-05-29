<template>
    <div class="lists__item">
        <div class="list">
            <div class="list__header"><h2 class="list__title">Lista (1)</h2></div>
            <div class="list__items">
                <div class="list__item">
                    <div class="product">
                        <div class="product__wrapper">
                            <button class="product__mark btn">
                                <icon sprite-id="checkbox-empty" />
                            </button>
                            <div class="product__name">
                                Pepsi
                            </div>
                            <div class="product__actions"><!---->
                                <button class="ico-btn ico-btn--red product__action">
                                    <icon sprite-id="remove" />
                                </button>
                                <button class="ico-btn product__action">
                                    <icon sprite-id="edit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list__header"><h2 class="list__title">Koszyk (2)</h2></div>
            <div class="list__items">
                <div class="list__item">
                    <div class="product">
                        <div class="product__wrapper">
                            <button class="product__mark btn"><!---->
                                <icon sprite-id="checkbox-checked" />
                            </button>
                            <div class="product__name">
                                Kurczak
                            </div>
                            <div class="product__actions"><!---->
                                <button class="ico-btn ico-btn--red product__action">
                                    <icon sprite-id="remove" />
                                </button>
                                <button class="ico-btn product__action">
                                    <icon sprite-id="edit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list__item">
                    <div class="product">
                        <div class="product__wrapper">
                            <button class="product__mark btn"><!---->
                                <icon sprite-id="checkbox-checked" />
                            </button>
                            <div class="product__name">
                                Truskawki
                            </div>
                            <div class="product__actions"><!---->
                                <button class="ico-btn ico-btn--red product__action">
                                    <icon sprite-id="remove" />
                                </button>
                                <button class="ico-btn product__action">
                                    <icon sprite-id="edit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
