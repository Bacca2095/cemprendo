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

      <b-button variant="primary" @click="save" v-if="!formId" class="mt-3"
        >Guardar</b-button
      >
      <b-button variant="primary" @click="edit" v-if="formId" class="mt-3"
        >Guardar cambios</b-button
      >
      <b-button class="mt-3" :to="{ name: 'form.index' }">Cancelar</b-button>
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
        id: "",
        usuario: {
          nombre: "",
          nacimiento: "",
          genero: "",
          tipoDocumento: "",
          documento: "",
          fechaExpedicion: "",
          lugarExpedicion: "",
          libretaMilitar: "",
          distrito: "",
          anio: "",
          categoria: "",
          licencia: "",
          categoriaLicencia: "",
          tieneVehiculo: "",
          tipoVehiculo: "",
          estadoCivil: "",
          direccion: "",
          barrio: "",
          comuna: "",
          estrato: "",
          celular: "",
          email: "",
          segundaLengua: "",
          tarjetaProfesional: "",
          discapacidad: "",
          tipoDiscapacidad: "",
          personasCargo: "",
          totalCargo: "",
          parentesco: "",
          desplazado: "",
          rupd: "",
          beneficiario: "",
        },
        formacionAcademica: { formacion: "", otraFormacion: "" },
        situacionGeneral: { situacionGeneral: "" },
        situacionLaboral: { situacionLaboral: "" },
        salud: {
          salud: "",
          eps: "",
          tipoEps: "",
          sisben: "",
          nivelSisben: "",
        },
        familia: {
          jefeHogar: "",
          otroJefeHogar: "",
          comparteHogar: "",
          familiares: [
            {
              id: 1,
              nombre: "",
              edad: "",
              estudio: "",
              parentesco: "",
              ocupacion: "",
              telefono: "",
            },
          ],
        },
        formacionRequerida: {
          formacionRequerida: "",
          otraFormacionRequerida: "",
        },
        emprendimiento: {
          idea: "",
          funcionando: "",
          tiempoFuncionamiento: "",
          venta: "",
          oportunidad: "",
          otroOportunidad: "",
          expectativa: "",
          otroExpectativa: "",
          nacimientoIdea: "",
          otroNacimientoIdea: "",
          formacion: "",
          experiencia: "",
          clientes: "",
          recursos: "",
          otroRecurso: "",
        },
        fecha: "",
      },
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    save() {
      this.form.id = this.formularios.length + 1;
      this.form.fecha = new Date().toISOString().split("T")[0];
      this.saveForm(this.form);
      this.showToast("Se ha guardado el formulario", "success");
      this.$router.push({
        name: "form.index",
      });
    },
    edit() {
      console.log(this.form);
      this.editForm(this.form);
      this.showToast("Se han guardado los cambios en el formulario", "success");
      this.$router.push({
        name: "form.index",
      });
    },
    ...mapActions(["setLoad", "saveForm", "editForm"]),
  },

  mounted() {
    if (this.formId) {
      this.formularios.map((form) => {
        if (this.formId === form.id) {
          this.form = form;
        }
      });
    }
    this.setLoad(false);
  },
  computed: {
    ...mapState(["formularios"]),
  },
};
</script>
