<template>
  <b-card class="overflow-auto" style="height: 75vh">
    <b-row>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Nombre y apellidos">
          <b-form-input
            type="text"
            placeholder="Ingrese su nombre y apellidos"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Fecha de nacimiento">
          <b-form-datepicker
            id="example-datepicker"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Genero">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >
            <b-form-select-option value="M">Masculino</b-form-select-option>
            <b-form-select-option value="F">Femenino</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Tipo de identificacion">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="CC"
              >Cedula de ciudadania</b-form-select-option
            >
            <b-form-select-option value="CE"
              >Cedula de extranjeria</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Nro de documento">
          <b-form-input type="text" placeholder=""></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Fecha de expedicion">
          <b-form-datepicker
            id="example-datepicker"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Lugar de expedicion">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Libreta militar No.">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Distrito No.">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Año">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Categoria">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="CC">Primera</b-form-select-option>
            <b-form-select-option value="CE">Segunda</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Lic. de conduccion">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Categoria de licencia">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Tiene vehiculo propio?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="center">
        <b-form-group label="Tipo de vehiculo">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="carro">Carro</b-form-select-option>
            <b-form-select-option value="moto">Moto</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Estado civil">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="1">Soltero(a)</b-form-select-option>
            <b-form-select-option value="2">Casado(a)</b-form-select-option>
            <b-form-select-option value="3">Union Libre</b-form-select-option>
            <b-form-select-option value="2">Viudo(a)</b-form-select-option>
            <b-form-select-option value="2">Separado</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Nro de hijos">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Actualmente en embarazo">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Estado civil">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Direccion">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Barrio">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Comuna">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Estrato">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Celular">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Email">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Habla una segunda lengua?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Tiene tarjeta o licencia profesional?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Presenta algun tipo de discapacidad?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿De que tipo?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Tiene personas a cargo?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Cuantas">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Parentesco">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Victima de desplazamiento?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Se encuentra en inscrito en RUPD?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="¿Es beneficiario de algun programa?">
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >-- Seleccione una opcion --</b-form-select-option
            >

            <b-form-select-option value="SI">SI</b-form-select-option>
            <b-form-select-option value="NO">NO</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row></b-card
  >
</template>

<script>
export default {};
</script>
