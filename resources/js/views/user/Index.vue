<template>
  <b-container>
    <b-row class="mt-4">
      <b-col><h1>Usuarios</h1></b-col>
      <b-col lg="auto" class="ml-auto text-center">
        <b-row align-h="center">
          <b-col class="text-center">
            <router-link :to="{ name: 'user.create' }">
              <ButtonIcon />
            </router-link>
          </b-col>
          <b-col class="text-center" v-if="showActions">
            <ButtonIcon @click="edit" icon="edit"
          /></b-col>
          <b-col class="text-center" v-if="showActions">
            <ButtonIcon @click="deleteById" variant="danger" icon="remove"
          /></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto">
        <base-table
          :items="provider"
          :fields="fields"
          @row-selected="onRowSelected"
          @row-dblclicked="onRowDblClicked"
        ></base-table>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-2">
      <b-col sm="auto" align-self="center" class="text-center my-1">
        <div class="mx-auto d-inline-flex">
          <h4 class="my-auto mx-1 text-primary">{{ totalRows }}</h4>
          <h5 class="my-auto mx-1 text-primary">Usuarios</h5>
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
import { mapActions } from "vuex";
import ButtonIcon from "../../components/button/ButtonIcon.vue";
import { getAllUsers, deleteUser } from "../../api/user";

export default {
  components: { ButtonIcon },
  data() {
    return {
      page: 1,
      size: 50,
      totalRows: 0,
      fields: [
        { key: "name", label: "Usuario" },
        { key: "email", label: "Email" },
        { key: "status", label: "Estado" },
      ],
      user: null,
      showActions: false,
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    ...mapActions(["setLoad"]),

    provider() {
      return getAllUsers()
        .then((response) => {
          this.totalRows = response.data.content.length;
          return response.data.content;
        })
        .catch((err) => {
          return [];
        });
    },

    deleteById() {
      if (this.user.id) {
        this.$swal({
          title: `¿Desea eliminar el usuario?`,
          icon: "question",
          showCancelButton: true,
        }).then((result) => {
          if (result.value) {
            deleteUser(this.user.id)
              .then(() => {
                this.showToast("Se elimino el usuario", "success");
              })
              .catch((err) => {
                this.showToast(
                  "Ocurrio un error al eliminar el usuario",
                  "error"
                );
              });
          }
        });
      }
    },
    onRowSelected(items) {
      if (items.length > 0) {
        this.user = items[0];
        this.showActions = true;
      } else {
        this.user = null;
        this.showActions = false;
      }
    },
    edit() {
      if (this.user) {
        this.$router.push({
          name: "user.edit",
          params: { userId: this.user.id },
        });
      }
    },
    onRowDblClicked(item) {
      this.user = item;
      this.edit();
    },
  },
  mounted() {
    this.setLoad(false);
  },
};
</script>
