export default {
    methods: {
        /* Useful for some specific cases where methods are obtained as string */
        callMethodByName(name, params = null) {
            if (params) {
                this[name](...params);
            } else {
                this[name]();
            }
        },
        /* Returns the complete path to an image. Can be used as the src property of an img tag */
        requireImage(path) {
            let src = "";
            try {
                src = require("@/assets/" + path);
            } catch (err) {
                console.log(`Image not able to load - ${path}`);
            }
            return src;
        },
        /* Creates a deep copy of an object. */
        deepCopy(object) {
            //-- Does not work if the object is or contains classes.
            return JSON.parse(JSON.stringify(object));
        },
    },
};
