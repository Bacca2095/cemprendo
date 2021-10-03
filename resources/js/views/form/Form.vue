<template>
  <b-container>
    <b-form>
      <b-row align-h="center">
        <b-col> </b-col>
      </b-row>
      <b-tabs content-class="mt-3" pills>
        <b-tab title="Identificacion Usuario" active>
          <Usuario />
        </b-tab>
        <b-tab title="Formacion Academica">
          <Academico />
        </b-tab>
        <b-tab title="Situacion General">
          <General />
        </b-tab>
        <b-tab title="Situacion Laboral">
          <Laboral />
        </b-tab>
        <b-tab title="Programa de salud">
          <Salud />
        </b-tab>
        <b-tab title="Informacion familiar"> <Familia /> </b-tab>
        <b-tab title="Formacion requerida">
          <Formacion />
        </b-tab>
        <b-tab title="Emprendimiento">
          <Emprendimiento />
        </b-tab>
      </b-tabs>
    </b-form>
  </b-container>
</template>
<script>
import { mapActions } from "vuex";
import Usuario from "./components/formularios/usuario/Usuario.vue";
import Academico from "./components/formularios/academico/Academico.vue";
import General from "./components/formularios/general/General.vue";
import Laboral from "./components/formularios/laboral/Laboral.vue";
import Salud from "./components/formularios/salud/Salud.vue";
import Formacion from "./components/formularios/formacion/Formacion.vue";
import Emprendimiento from "./components/formularios/emprendimiento/Emprendimiento.vue";
import Familia from "./components/formularios/familia/Familia.vue";
export default {
  components: {
    Usuario,
    Academico,
    General,
    Laboral,
    Salud,
    Formacion,
    Emprendimiento,
    Familia,
  },

  data() {
    return {};
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
