import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: false,
            minifyTheme: (css) => {
                return process.env.NODE_ENV === "production"
                    ? css.replace(/[\r\n|\r|\n]/g, "")
                    : css;
            },
        },
        themes: {
            light: {
                primary: "#00386C",
                secondary: "#00AEEF",
                accent: "#00AEEF",
                anchor: "#00AEEF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
        },
    },
    icons: {
        iconfont: "mdi",
    },
});
