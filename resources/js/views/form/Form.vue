<template>
    <b-container>
        <b-row align-h="center">
            <b-col sm="auto"> </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    destroyed() {
        this.setLoad(true);
    },
    methods: {
        ...mapActions(["setLoad"])
    },
    mounted() {
        this.setLoad(false);
    }
};
</script>
