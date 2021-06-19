<template>
    <b-container>
        <b-row align-h="center" align-v="center">
            <b-col sm="auto" class="text-center">
                <p class="h1">
                    404
                </p>
                <p class="h3">
                    Not Found
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
    computed: {},
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
