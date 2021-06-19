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
    },
    {
        path: "/user",
        name: "user.index",
        component: () =>
            import(
                /* webpackChunkName: "user.index" */ "../views/user/Index.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Usuarios",
                    active: true
                }
            ]
        }
    },
    {
        path: "/user/create",
        name: "user.create",
        component: () =>
            import(
                /* webpackChunkName: "user.create" */ "../views/user/Form.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Usuarios",
                    to: { name: "user.index" }
                },
                {
                    text: "Crear",
                    active: true
                }
            ]
        }
    },
    {
        path: "/user/edit/:id",
        name: "user.edit",
        component: () =>
            import(
                /* webpackChunkName: "user.edit" */ "../views/user/Form.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Usuarios",
                    to: { name: "user.index" }
                },
                {
                    text: "Editar",
                    active: true
                }
            ]
        }
    },
    {
        path: "/form",
        name: "form.index",
        component: () =>
            import(
                /* webpackChunkName: "form.index" */ "../views/form/Index.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Formularios",
                    active: true
                }
            ]
        }
    },
    {
        path: "/form/create",
        name: "form.create",
        component: () =>
            import(
                /* webpackChunkName: "form.create" */ "../views/form/Form.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Formularios",
                    to: { name: "form.index" }
                },
                {
                    text: "Crear",
                    active: true
                }
            ]
        }
    },
    {
        path: "/form/edit/:id",
        name: "form.edit",
        component: () =>
            import(
                /* webpackChunkName: "form.edit" */ "../views/form/Form.vue"
            ),
        meta: {
            layout: AppLayout,
            auth: true,
            breadcrumb: [
                {
                    text: "Inicio",
                    to: { name: "home" }
                },
                {
                    text: "Formularios",
                    to: { name: "form.index" }
                },
                {
                    text: "Editar",
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
