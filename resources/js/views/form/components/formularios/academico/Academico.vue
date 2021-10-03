<template>
  <b-card class="overflow-auto" style="height: 75vh">
    <b-row>
      <b-col sm="auto" align-self="start">
        <b-form-group>
          <b-form-radio name="estudio" value="1">Sin estudio</b-form-radio>
          <b-form-radio name="estudio" value="2">Primaria</b-form-radio>
          <b-form-radio name="estudio" value="3">Bachiller</b-form-radio>
          <b-form-radio name="estudio" value="4">Tecnologo</b-form-radio>
          <b-form-radio name="estudio" value="5">Tecnico</b-form-radio>
          <b-form-radio name="estudio" value="6">Universitario</b-form-radio>
          <b-form-radio name="estudio" value="7">Postgrado</b-form-radio>
          <b-form-radio name="estudio" value="8">Otro</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Cual?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {};
</script>
