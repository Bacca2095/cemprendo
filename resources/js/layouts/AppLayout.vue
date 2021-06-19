<template>
    <div class="app-grid">
        <aside>
            <Sidebar />
        </aside>
        <b-overlay :show="load" class="height:100vh">
            <template #overlay>
                <div class="sk-flow spinner-size">
                    <div class="sk-flow-dot spinner-color"></div>
                    <div class="sk-flow-dot spinner-color"></div>
                    <div class="sk-flow-dot spinner-color"></div>
                </div>
            </template>
            <main>
                <b-container class="my-2">
                    <b-row>
                        <b-col align-self="center">
                            <b-breadcrumb
                                class="my-auto"
                                :items="breadcrumbList"
                            ></b-breadcrumb>
                        </b-col>
                        <b-col
                            align-self="center"
                            sm="auto"
                            class="ml-auto d-none d-lg-flex"
                        >
                            <Profile />
                        </b-col>
                    </b-row>
                </b-container>
                <slot />
            </main>
        </b-overlay>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Sidebar from "../components/Sidebar.vue";
import Profile from "../components/Profile.vue";
export default {
    components: { Sidebar, Profile },
    computed: {
        ...mapState(["load"])
    },
    data() {
        return {
            breadcrumbList: []
        };
    },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link)
                this.$router.push(this.breadcrumbList[pRouteTo].link);
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb;
        }
    },
    mounted() {
        this.updateList();
    },
    watch: {
        $route() {
            this.updateList();
        }
    }
};
</script>
<style scoped>
.app-grid {
    display: grid;
    grid-template-columns: 7rem 1fr;
    grid-template-rows: 100vh;
    gap: 0px 0px;
    grid-template-areas: ".";
}

@media (max-width: 991px) {
    .app-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
}
</style>
