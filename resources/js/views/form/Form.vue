<template>
  <b-container>
    <b-form>
      <b-row align-h="center">
        <b-col> </b-col>
      </b-row>
      <b-tabs content-class="mt-3" pills>
        <b-tab title="Identificacion Usuario" active>
          <Usuario
            :value="form.usuario"
            @input="
              (nuevoUsuario) => {
                form.usuario = nuevoUsuario;
              }
            "
          />
        </b-tab>
        <b-tab title="Formacion Academica">
          <Academico
            :value="form.formacionAcademica"
            @input="
              (nuevaFormacionAcademica) => {
                form.formacionAcademica = nuevaFormacionAcademica;
              }
            "
          />
        </b-tab>
        <b-tab title="Situacion General">
          <General
            :value="form.situacionGeneral"
            @input="
              (situacionGeneral) => {
                form.situacionGeneral = situacionGeneral;
              }
            "
          />
        </b-tab>
        <b-tab title="Situacion Laboral">
          <Laboral
            :value="form.situacionLaboral"
            @input="
              (situacionLaboral) => {
                form.situacionLaboral = situacionLaboral;
              }
            "
          />
        </b-tab>
        <b-tab title="Programa de salud">
          <Salud
            :value="form.salud"
            @input="
              (nuevaSalud) => {
                form.salud = nuevaSalud;
              }
            "
          />
        </b-tab>
        <b-tab title="Informacion familiar">
          <Familia
            :value="form.familia"
            @input="
              (nuevaFamilia) => {
                form.familia = nuevaFamilia;
              }
            "
          />
        </b-tab>
        <b-tab title="Formacion requerida">
          <Formacion
            :value="form.formacionRequerida"
            @input="
              (nuevaFormacionRequerida) => {
                form.formacionRequerida = nuevaFormacionRequerida;
              }
            "
          />
        </b-tab>
        <b-tab title="Emprendimiento">
          <Emprendimiento
            :value="form.emprendimiento"
            @input="
              (nuevaEmprendimiento) => {
                form.emprendimiento = nuevaEmprendimiento;
              }
            "
          />
        </b-tab>
      </b-tabs>

      <b-button @click="saveForm" class="mt-3">Guardar</b-button>
    </b-form>
  </b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
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
    return {
      formId: this.$route.params.formId,
      form: {
        id: null,
        usuario: {
          nombre: null,
          nacimiento: null,
          genero: null,
          tipoDocumento: null,
          documento: null,
          fechaExpedicion: null,
          lugarExpedicion: null,
          libretaMilitar: null,
          distrito: null,
          anio: null,
          categoria: null,
          licencia: null,
          categoriaLicencia: null,
          tieneVehiculo: null,
          tipoVehiculo: null,
          estadoCivil: null,
          direccion: null,
          barrio: null,
          comuna: null,
          estrato: null,
          celular: null,
          email: null,
          segundaLengua: null,
          tarjetaProfesional: null,
          discapacidad: null,
          tipoDiscapacidad: null,
          personasCargo: null,
          totalCargo: null,
          parentesco: null,
          desplazado: null,
          rupd: null,
          beneficiario: null,
        },
        formacionAcademica: { formacion: null, otraFormacion: null },
        situacionGeneral: { situacionGeneral: null },
        situacionLaboral: { situacionLaboral: null },
        salud: {
          salud: null,
          eps: null,
          tipoEps: null,
          sisben: null,
          nivelSisben: null,
        },
        familia: {
          jefeHogar: null,
          otroJefeHogar: null,
          comparteHogar: null,
          familiares: [
            {
              id: 1,
              nombre: null,
              edad: null,
              estudio: null,
              parentesco: null,
              ocupacion: null,
              telefono: null,
            },
          ],
        },
        formacionRequerida: {
          formacionRequerida: null,
          otraFormacionRequerida: null,
        },
        emprendimiento: {
          idea: null,
          funcionando: null,
          tiempoFuncionamiento: null,
          venta: null,
          oportunidad: null,
          otroOportunidad: null,
          expectativa: null,
          otroExpectativa: null,
          nacimientoIdea: null,
          otroNacimientoIdea: null,
          formacion: null,
          experiencia: null,
          clientes: null,
          recursos: null,
          otroRecurso: null,
        },
        fecha: null,
      },
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    saveForm() {
      this.$store.state.tempForm.id = this.formularios.length + 1;
      this.$store.state.tempForm.fecha = new Date().toISOString().split("T")[0];
      this.setFormulario(this.$store.state.tempForm);
      this.resetForm();
      this.showToast("Formulario guardado", "success");
      this.$router.push({
        name: "form.index",
      });
    },
    ...mapActions(["setLoad", "setFormulario", "resetForm", "setAllForm"]),
  },

  mounted() {
    this.setAllForm(this.formId);
    this.setLoad(false);
  },
  computed: {
    ...mapState(["tempForm", "formularios"]),
  },
  watch: {
    form: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
};
</script>
