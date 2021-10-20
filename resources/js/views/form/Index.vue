<template>
  <b-container>
    <b-row align-self="center" class="mt-4">
      <b-col><h1>Formularios</h1></b-col>
      <b-col align-self="center" sm="auto">
        <b-form-input
          type="search"
          v-model="filter"
          placeholder="Buscar"
        ></b-form-input>
      </b-col>
      <b-col align-self="center" lg="auto" class="ml-auto text-center">
        <b-row align-h="center">
          <b-col class="text-center">
            <router-link :to="{ name: 'form.create' }">
              <ButtonIcon />
            </router-link>
          </b-col>
          <b-col class="text-center" v-if="showActions">
            <ButtonIcon icon="edit" @click="edit()"
          /></b-col>
          <b-col class="text-center" v-if="showActions">
            <ButtonIcon variant="danger" icon="remove" @click="deleteById()"
          /></b-col>
          <b-col class="text-center" v-if="showActions">
            <ButtonIcon icon="doc" @click="exportPDF"
          /></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto">
        <base-table
          :items="provider"
          :fields="fields"
          :busy="busy"
          ref="form"
          :filter="filter"
          @row-selected="onRowSelected"
          @row-dblclicked="onRowDblClicked"
        ></base-table>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-2">
      <b-col sm="auto" align-self="center" class="text-center my-1">
        <div class="mx-auto d-inline-flex">
          <h4 class="my-auto mx-1 text-primary">{{ totalRows }}</h4>
          <h5 class="my-auto mx-1 text-primary">Formularios</h5>
        </div>
      </b-col>
      <b-col
        sm="auto"
        align-self="center"
        class="text-center ml-0 ml-md-auto my-1"
      >
        <b-pagination
          size="sm"
          align="center"
          class="my-auto"
          :total-rows="totalRows"
          :per-page="size"
          v-model="page"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { jsPDF } from "jspdf";
import ButtonIcon from "../../components/button/ButtonIcon.vue";
export default {
  components: { ButtonIcon },
  data() {
    return {
      page: 1,
      size: 50,
      forms: [],
      totalRows: 0,
      items: [],
      fields: [
        { key: "usuario.nombre", label: "Nombre" },
        { key: "usuario.documento", label: "Documento" },
        { key: "emprendimiento.idea", label: "Emprendimiento" },
        { key: "fecha", label: "Fecha de solicitud" },
      ],
      form: null,
      showActions: false,
      busy: false,
      filter: "",
      filterOn: ["usuario.nombre", "usuario.documento", "emprendimiento.idea"],
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    ...mapActions(["setLoad", "deleteForm", "setAllForm"]),
    provider() {
      let data =
        this.filter.length > 0
          ? this.formularios.filter((form) => {
              if (
                form.emprendimiento.idea
                  ? form.emprendimiento.idea
                      .toLowerCase()
                      .includes(this.filter.toLowerCase())
                  : false || form.usuario.nombre
                  ? form.usuario.nombre
                      .toLowerCase()
                      .includes(this.filter.toLowerCase())
                  : false || form.usuario.documento
                  ? form.usuario.documento
                      .toLowerCase()
                      .includes(this.filter.toLowerCase())
                  : false
              ) {
                return form;
              }
            })
          : this.formularios;

      this.totalRows = data.length;
      return data;
    },

    onRowSelected(items) {
      if (items.length > 0) {
        this.form = items[0];
        this.showActions = true;
      } else {
        this.cliente = null;
        this.showActions = false;
      }
    },
    onRowDblClicked(item) {
      this.form = item;
      this.edit();
    },
    edit() {
      if (this.form) {
        this.$router.push({
          name: "form.edit",
          params: { formId: this.form.id },
        });
      }
    },
    deleteById() {
      if (this.form.id) {
        this.$swal({
          title: `¿Desea eliminar el formulario?`,
          icon: "question",
          showCancelButton: true,
        }).then((result) => {
          if (result.value) {
            this.deleteForm(this.form.id).finally(() => {
              this.showToast("Se elimino el formulario", "success");
            });
          }
        });
      }
    },
    exportPDF() {
      var doc = new jsPDF("p", "pt");
      doc.text("Formulario", 40, 40);
      let xAxis = 50,
        yAxis = 50;
      let nombre = "";

      this.formularios.map((form, index) => {
        if (form.id === this.form.id) {
          nombre = form.emprendimiento.idea;
          doc.text(nombre, 200, 40);
          doc.setFontSize(9);
          const keys = Object.keys(form);
          keys.map((key, index) => {
            if (
              (typeof form[key] === "object" ||
                typeof form[key] === "function") &&
              form[key] !== null
            ) {
              const keysNested = Object.keys(form[key]);
              keysNested.map((keyNested, indexNested) => {
                if (indexNested % 2 === 0 && index !== 0) {
                  doc.setFont(undefined, "bold");
                  doc.text(
                    this.toSentence(keyNested) + " :",
                    xAxis + 210,
                    yAxis
                  );
                  doc.setFont(undefined, "normal");
                  doc.text(form[key][keyNested] + "", xAxis + 310, yAxis);
                } else {
                  const y = (yAxis += 30);
                  doc.setFont(undefined, "bold");
                  doc.text(this.toSentence(keyNested) + " :", xAxis, y);
                  doc.setFont(undefined, "normal");
                  doc.text(form[key][keyNested] + "", xAxis + 120, y);
                }
              });
            } else {
              if (index % 2 === 0 && index !== 0) {
                doc.setFont(undefined, "bold");
                doc.text(this.toSentence(key) + " :", xAxis + 210, yAxis);
                doc.setFont(undefined, "normal");
                doc.text(form[key] + "", xAxis + 310, yAxis);
              } else {
                const y = (yAxis += 30);
                doc.setFont(undefined, "bold");
                doc.text(this.toSentence(key) + " :", xAxis, y);
                doc.setFont(undefined, "normal");
                doc.text(form[key] + "", xAxis + 120, y);
              }
            }
          });
        }
      });

      doc.save(`formulario-${nombre.toLowerCase().replace(" ", "-")}.pdf`);
    },
    toSentence(key) {
      const result = key.replace(/([A-Z])/g, " $1");
      const final = result.charAt(0).toUpperCase() + result.slice(1);
      return final;
    },
  },
  mounted() {
    this.setLoad(false);
  },
  computed: {
    ...mapState(["formularios"]),
  },
  watch: {
    formularios(val) {
      this.$refs.form.$refs.table.refresh();
    },
  },
};
</script>
