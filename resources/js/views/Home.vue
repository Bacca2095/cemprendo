<template>
  <b-container class="background">
    <b-img src="/images/background.png" fluid />
  </b-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      page: 1,
      size: 50,
      totalRows: 0,
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    ...mapActions(["setLoad"]),
  },
  mounted() {
    this.setLoad(false);
  },
};
</script>

<style scoped>
</style>
