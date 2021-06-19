<template>
    <div>
        <b-nav
            vertical
            class="vertical d-none d-lg-block bg-primary text-center"
        >
            <b-nav-item
                class="my-2"
                v-b-tooltip.right.hover="{ variant: 'secondary' }"
                title="Inicio"
            >
                <router-link
                    class="text-decoration-none"
                    :to="{ name: 'home' }"
                >
                    <icon-container variant="light" size="70" class="mx-auto">
                        <svg-icon
                            variant="primary"
                            icon="home"
                            width="40"
                            height="40"
                        ></svg-icon>
                    </icon-container>
                </router-link>
            </b-nav-item>
            <b-nav-item
                class="my-2 "
                v-b-tooltip.right.hover="{ variant: 'secondary' }"
                title="Usuarios"
            >
                <router-link
                    class="text-decoration-none "
                    :to="{ name: 'user.index' }"
                >
                    <icon-container variant="light" size="50" class="mx-auto">
                        <svg-icon
                            variant="primary"
                            icon="person"
                            width="20"
                            height="20"
                        ></svg-icon>
                    </icon-container>
                </router-link>
            </b-nav-item>

            <b-nav-item
                class="my-2 "
                v-b-tooltip.right.hover="{ variant: 'secondary' }"
                title="Formularios"
            >
                <router-link
                    class="text-decoration-none "
                    :to="{ name: 'form.index' }"
                >
                    <icon-container variant="light" size="50" class="mx-auto">
                        <svg-icon
                            variant="primary"
                            icon="form"
                            width="20"
                            height="20"
                        ></svg-icon>
                    </icon-container>
                </router-link>
            </b-nav-item>

            <b-nav-item class="my-2 mt-2 position-absolute" style="top:80vh">
                <b-img src="/images/logo_white.png" width="80"></b-img>
            </b-nav-item>
        </b-nav>
        <b-navbar toggleable type="dark" variant="primary">
            <b-navbar-brand href="#">Cemprendo</b-navbar-brand>
            <b-navbar-toggle target="nav"> </b-navbar-toggle>
            <b-collapse id="nav" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{ name: 'home' }">
                        Inicio
                    </b-nav-item>
                    <b-nav-item :to="{ name: 'user.index' }"
                        >Usuarios
                    </b-nav-item>
                    <b-nav-item :to="{ name: 'form.index' }"
                        >Formularios
                    </b-nav-item>
                    <b-nav-item @click="onLogout">Cerrar sesión</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["logout"]),
        onLogout() {
            this.logout()
                .then(response => {
                    this.showToast(response.data.message, "success");
                    this.$router.push({ name: "login" });
                })
                .catch(err => {
                    this.showToast(err.response.data.message, "error");
                });
        }
    }
};
</script>

<style scoped>
.vertical {
    background: var(--primary);
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 7rem;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
}
</style>
