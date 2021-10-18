<template>
  <b-container>
    <b-row align-self="center" class="mt-4">
      <b-col><h1>Formularios</h1></b-col>
      <b-col align-self="center" sm="auto">
        <b-form-input type="search" placeholder="Buscar"></b-form-input>
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
            <ButtonIcon icon="doc"
          /></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto">
        <base-table
          :items="items"
          :fields="fields"
          ref="form"
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
import ButtonIcon from "../../components/button/ButtonIcon.vue";
export default {
  components: { ButtonIcon },
  data() {
    return {
      page: 1,
      size: 50,
      totalRows: 0,
      items: [],
      fields: [
        { key: "nombre", label: "Nombre" },
        { key: "documento", label: "Documento" },
        { key: "idea", label: "Emprendimiento" },
        { key: "fecha", label: "Fecha de solicitud" },
      ],
      form: null,
      showActions: false,
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    ...mapActions(["setLoad", "deleteForm", "setAllForm"]),
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
      this.deleteForm(this.form.id);
      this.$refs.form.$refs.table.refresh();
    },
  },
  mounted() {
    this.setLoad(false);
    this.items.push(...this.formularios);
    this.totalRows = this.items.length;
  },
  computed: {
    ...mapState(["formularios"]),
  },
};
</script>
