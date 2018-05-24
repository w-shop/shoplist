const idRegex = /#(.+)$/;
const sprites = {};

function importAll(r) {
    r.keys().forEach(name => {
        const path = r(name).default.toString(),
            id = idRegex.exec(path)[1];

        sprites[id] = path;
    });
}

importAll(require.context('../images/svg/sprite/', true, /\.svg$/));

export default {
    get(id) {
        if (!sprites.hasOwnProperty(id)) {
            throw new Error("Sprite '" + id + "' does not exist.");
        }

        return sprites[id];
    },
    all() {
        return Object.assign({}, sprites);
    }
}
