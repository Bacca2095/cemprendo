<template>
  <b-card class="overflow-auto" style="height: 75vh">
    <b-row>
      <b-col sm="auto" align-self="start">
        <b-form-group>
          <b-form-radio name="salud" value="1"
            >Regimen contributivo</b-form-radio
          >
          <b-form-radio name="salud" value="2">Regimen subsidiado</b-form-radio>
          <b-form-radio name="salud" value="3">Ninguno</b-form-radio>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="EPS">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Tipo">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >
            <b-form-select-option value="1">Cotizante</b-form-select-option>
            <b-form-select-option value="2">Beneficiario</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Inscrito en sisben">
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
        <b-form-group label="Nivel">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>
