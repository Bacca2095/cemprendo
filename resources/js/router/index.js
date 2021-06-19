import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import AppLayout from "../layouts/AppLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import NotFoundLayout from "../layouts/NotFoundLayout.vue";

Vue.use(VueRouter);

const routes = [
    {
        /** pagina de error 404 (Not Found). */
        path: "/404",
        name: "404",
        component: () =>
            import(/* webpackChunkName: "404" */ "../views/404.vue"),
        meta: { layout: NotFoundLayout }
    },
    {
        /** Captura todas las rutas que no existen y nos redirige a /404. */
        path: "*",
        redirect: "/404"
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
        meta: { layout: AuthLayout, logged: true }
    },
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" },
                    active: true
                }
            ]
        }
    }
];

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.user;

    if (
        to.name !== "login" &&
        !isAuthenticated &&
        to.matched.some(record => record.meta.auth)
    ) {
        next({ name: "login" });
    } else if (
        isAuthenticated &&
        to.matched.some(record => record.meta.logged)
    ) {
        next({ name: "home" });
    } else next();
});

export default router;
