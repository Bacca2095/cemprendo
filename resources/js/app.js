require("./bootstrap");

window.Vue = require("vue").default;
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import { i18n } from "./plugins/i18n";
import App from "./views/App.vue";
import Vue from "vue";
import SvgSprite from "./components/icon/SvgSprite.vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(BootstrapVue);

Vue.use(VueSweetalert2, {
    buttonsStyling: false,
    customClass: {
        confirmButton: "btn btn-primary mx-2",
        cancelButton: "btn btn-secondary mx-2",
        popup: "rounded"
    },
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar"
});

Vue.mixin({
    methods: {
        showToast(msg, type) {
            this.$swal({
                title: msg,
                toast: true,
                icon: type,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500
            });
        }
    }
});

Vue.component("svg-sprite", /* webpackChunkName: "svg-sprite" */ SvgSprite);
Vue.component("svg-icon", () =>
    import(/* webpackChunkName: "svg-icon" */ "./components/icon/SvgIcon.vue")
);
Vue.component("icon-container", () =>
    import(
        /* webpackChunkName: "icon-container" */ "./components/icon/IconContainer.vue"
    )
);
Vue.component("base-table", () =>
    import(
        /* webpackChunkName: "base-table" */ "./components/table/BaseTable.vue"
    )
);

const app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
