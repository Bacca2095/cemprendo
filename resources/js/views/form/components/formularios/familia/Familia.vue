<template>
  <b-card class="overflow-auto" style="height: 75vh">
    <b-row>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Vive con alguien mas?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >
            <b-form-select-option value="1">SI</b-form-select-option>
            <b-form-select-option value="2">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Quien es el jefe del hogar?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >
            <b-form-select-option value="1">Usted</b-form-select-option>
            <b-form-select-option value="2">Padre</b-form-select-option>
            <b-form-select-option value="3">Madre</b-form-select-option>
            <b-form-select-option value="4">Hermano</b-form-select-option>
            <b-form-select-option value="5"
              >Pareja o conyuge</b-form-select-option
            >
            <b-form-select-option value="6">Abuelo(a)</b-form-select-option>
            <b-form-select-option value="7">Tio(a)</b-form-select-option>
            <b-form-select-option value="8">Primos</b-form-select-option>
            <b-form-select-option value="8"
              >Otros parientes</b-form-select-option
            >
            <b-form-select-option value="8">Otro</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Cual?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row v-for="familiar in familiares" :key="familiar.id">
      <b-col sm="12" class="text-center">
        <b> Familiar {{ familiar.id }}</b></b-col
      >
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Nombres y apellidos">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Edad">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Escolaridad">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Parentesco">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Ocupacion">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Telefono">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center" align-self="center">
        <b-button @click="addFamiliar()">Agregar familiar</b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      familiares: [{ id: 1 }],
    };
  },
  methods: {
    addFamiliar() {
      this.familiares.push({ id: this.familiares.length + 1 });
    },
  },
};
</script>
