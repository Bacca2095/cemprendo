<template>
  <b-container class="background">
    <b-row>
      <b-col sm="12" class="text-center">
        <b-img
          class="mx-auto"
          src="/images/background.png"
          style="width: 60%"
        />
      </b-col>
    </b-row>
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
