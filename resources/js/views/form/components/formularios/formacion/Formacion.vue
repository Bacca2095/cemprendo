<template>
  <b-card class="overflow-auto" style="height: 65vh">
    <b-row>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Cual">
          <b-form-input
            v-model="value.formacionRequerida"
            type="text"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Otra">
          <b-form-input
            v-model="value.otraFormacionRequerida"
            type="text"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>
