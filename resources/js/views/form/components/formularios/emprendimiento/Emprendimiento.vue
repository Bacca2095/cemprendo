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

    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group
          label="¿Porque considera que esta idea es una oportunidad de negocio?"
        >
          <b-form-radio name="op" value="1"
            >No existe este negocio</b-form-radio
          >
          <b-form-radio name="op" value="2"
            >Existe, pero no es suficiente</b-form-radio
          >

          <b-form-radio name="op" value="3">Experiencia adquirida</b-form-radio>
          <b-form-radio name="op" value="4">Otro</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="¿Cual?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row
      ><b-col class="text-center">
        <b><h4>3.Expectativa</h4></b></b-col
      ></b-row
    >

    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿Cual es su expectativa con ese negocio?">
          <b-form-radio name="ex" value="1">Subsistir</b-form-radio>
          <b-form-radio name="ex" value="2">Ser independiente</b-form-radio>

          <b-form-radio name="ex" value="3"
            >Tener otros ingresos/ aumentar ingresos</b-form-radio
          >
          <b-form-radio name="ex" value="4">Generar empleo</b-form-radio>
          <b-form-radio name="ex" value="5">Otro</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="¿Cual?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row
      ><b-col class="text-center">
        <b><h4>4.Nacimiento de la idea</h4></b></b-col
      ></b-row
    >
    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿De donde nacio esa idea de negocio?">
          <b-form-radio name="na" value="1">Iniciativa propia</b-form-radio>
          <b-form-radio name="na" value="2"
            >Iniciativa de un amigo o familiar</b-form-radio
          >

          <b-form-radio name="na" value="2"
            >Influencia del entorno cercano</b-form-radio
          >
          <b-form-radio name="na" value="2"
            >Influencia de medios de comunicacion</b-form-radio
          >
          <b-form-radio name="na" value="2"
            >Continuar con la linea familiar</b-form-radio
          >

          <b-form-radio name="na" value="2">Otro</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="¿Cual?">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row
      ><b-col class="text-center">
        <b><h4>5.Formacion o experiencia</h4></b></b-col
      ></b-row
    >

    <b-row>
      <b-col sm="6" align-self="start">
        <b-form-group label="Formacion">
          <b-form-radio name="fo" value="1">Ninguna o nula</b-form-radio>
          <b-form-radio name="fo" value="2"
            >Muy basica o elemental</b-form-radio
          >

          <b-form-radio name="fo" value="2">Media / Se defiende</b-form-radio>
          <b-form-radio name="fo" value="2">Profunda / Amplia</b-form-radio>
        </b-form-group>
      </b-col>
      <b-col sm="6" align-self="start">
        <b-form-group label="Experiencia">
          <b-form-radio name="fo" value="1">Ninguna o nula</b-form-radio>
          <b-form-radio name="fo" value="2"
            >Muy basica o elemental</b-form-radio
          >

          <b-form-radio name="fo" value="2">Media / Se defiende</b-form-radio>
          <b-form-radio name="fo" value="2">Profunda / Amplia</b-form-radio>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row
      ><b-col class="text-center">
        <b><h4>6.Clientes</h4></b></b-col
      ></b-row
    >

    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group
          label="¿Tiene claro quienes serian los clientes de su negocio?"
        >
          <b-form-radio name="fo" value="1"
            >No los puede describir con claridad</b-form-radio
          >
          <b-form-radio name="fo" value="2"
            >Tiene alguna idea basica de las caracteristicas de sus
            clientes</b-form-radio
          >

          <b-form-radio name="fo" value="2"
            >Tiene muy claro quienes serian sus clientes</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>
    <b-row
      ><b-col class="text-center">
        <b><h4>7.Recursos</h4></b></b-col
      ></b-row
    >
    <b-row>
      <b-col sm="12" align-self="start">
        <b-form-group label="¿Cuenta con algun recurso para su negocio?">
          <b-form-radio name="fo" value="1">Local</b-form-radio>
          <b-form-radio name="fo" value="2">Dinero</b-form-radio>

          <b-form-radio name="fo" value="2">Equipo</b-form-radio>

          <b-form-radio name="fo" value="2">Personal</b-form-radio>
          <b-form-radio name="fo" value="2">Materia prima</b-form-radio>

          <b-form-radio name="fo" value="2"
            >Conocimiento del negocio</b-form-radio
          >
        </b-form-group>
      </b-col>
      <b-col>
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
