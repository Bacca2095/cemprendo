<template>
  <b-card class="overflow-auto" style="height: 75vh">
    <b-row
      ><b-col class="text-center">
        <b><h4>1.Idea</h4></b></b-col
      ></b-row
    >
    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿Cual es su idea de negocio?">
          <b-form-textarea></b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿Su negocio se encuentra funcionando actualmente?">
          <b-form-radio name="salud" value="1">SI</b-form-radio>
          <b-form-radio name="salud" value="2">NO</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col sm="12" align-self="start">
        <b-form-group
          label="¿Que tiempo de funcionamiento tiene su unidad productiva?"
        >
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿Valor de sus ventas actuales?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row
      ><b-col class="text-center">
        <b><h4>2.Oportunidad de negocio</h4></b></b-col
      ></b-row
    >
    <b-row
      ><b-col class="text-center">
        <b><h4>3.Expectativa</h4></b></b-col
      ></b-row
    >
    <b-row
      ><b-col class="text-center">
        <b><h4>4.Nacimiento de la idea</h4></b></b-col
      ></b-row
    >
    <b-row
      ><b-col class="text-center">
        <b><h4>5.Formacion o experiencia</h4></b></b-col
      ></b-row
    >
    <b-row
      ><b-col class="text-center">
        <b><h4>6.Clientes</h4></b></b-col
      ></b-row
    >
    <b-row
      ><b-col class="text-center">
        <b><h4>7.Recursos</h4></b></b-col
      ></b-row
    >
  </b-card>
</template>

<script>
export default {};
</script>
