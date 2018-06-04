let products = [];

function save() {
    return new Promise(resolve => {
        window.localStorage.setItem('products', JSON.stringify(products));
        resolve();
    });
}

function findProduct(name) {
    const found = products.filter((product) => {
        return product.name === name;
    });

    if (!found.length) {
        return null;
    }

    return found[0];
}

export default {
    load() {
        return new Promise(resolve => {
            products = JSON.parse(window.localStorage.getItem('products') || '[]');
            // Simulating API, objects in API are not the same objects in store
            resolve(JSON.parse(JSON.stringify(products)));
        });
    },
    setProductList(product, list) {
        const apiProduct = findProduct(product.name);
        if (!apiProduct) {
            return Promise.reject(new Error('Product "' + name + '" not found.'));
        }

        apiProduct.list = list;

        return save();
    },
    addProduct(product) {
        let apiProduct = findProduct(product.name);

        if (apiProduct) {
            return Promise.reject(new Error('Product "' + product.name + '" already exists.'));
        }

        products.push(Object.assign({}, product));

        return save();
    },
    updateProduct(product, name) {
        if (!name) {
            return this.removeProduct(product).then(() => ({removed: true}));
        }

        const apiProduct = findProduct(product.name);
        if (!apiProduct) {
            return Promise.reject(new Error('Product "' + name + '" not found.'));
        }

        apiProduct.name = name;

        return save().then(() => ({removed: false}));
    },
    removeProduct(product) {
        const apiProduct = findProduct(product.name);

        if (!apiProduct) {
            return Promise.reject(new Error('Product "' + name + '" not found.'));
        }

        products.splice(products.indexOf(apiProduct), 1);

        return save();
    },
    create(name, list) {
        return {
            name: name,
            list: list || null
        }
    }
}
