<template>
  <b-card class="overflow-auto" style="height: 65vh">
    <b-row>
      <b-col sm="auto" align-self="start">
        <b-form-group>
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="1"
            >Empleado</b-form-radio
          >
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="2"
            >Desempleado</b-form-radio
          >
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="3"
            >Independiente</b-form-radio
          >
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="4"
            >Vendedor informal</b-form-radio
          >
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="5"
            >Mototrabajador</b-form-radio
          >
          <b-form-radio
            v-model="value.situacionLaboral"
            name="trabajo"
            value="6"
            >Otro</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
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
