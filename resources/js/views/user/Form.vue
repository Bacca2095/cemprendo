<template>
  <b-container>
    <b-row align-h="center">
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Nombre">
          <b-form-input
            type="text"
            v-model="form.name"
            placeholder="Ingrese el nombre"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Email">
          <b-form-input
            v-model="form.email"
            type="email"
            placeholder="Email"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start">
        <b-form-group label="Contraseña">
          <b-form-input
            v-model="form.password"
            type="text"
            placeholder="Contraseña"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="auto" md="6" lg="4" align-self="start" class="mr-auto">
        <b-form-group label="Estado">
          <b-form-select v-model="form.status" class="mb-3">
            <b-form-select-option value="activo">Activo</b-form-select-option>
            <b-form-select-option value="inactivo"
              >Inactivo</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-button variant="primary" @click="save" v-if="!userId" class="mt-3"
      >Guardar</b-button
    >
    <b-button variant="primary" @click="edit" v-if="userId" class="mt-3"
      >Guardar cambios</b-button
    >
    <b-button class="mt-3" :to="{ name: 'user.index' }">Cancelar</b-button>
  </b-container>
</template>
<script>
import { mapActions } from "vuex";
import { getUser, storeUser, updateUser } from "../../api/user";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        status: "activo",
        email: "",
      },
      userId: this.$route.params.userId,
    };
  },
  destroyed() {
    this.setLoad(true);
  },
  methods: {
    ...mapActions(["setLoad"]),
    save() {
      storeUser(this.form)
        .then((result) => {
          this.showToast("Se guardo el usuario", "success");
          this.back();
        })
        .catch((err) => {
          this.showToast("Ocurrio un error al guardar el usuario", "error");
        });
    },
    edit() {
      updateUser(this.userId, this.form)
        .then((result) => {
          this.showToast("Se edito el usuario", "success");
          this.back();
        })
        .catch((err) => {
          this.showToast("Ocurrio un error al editar el usuario", "error");
        });
    },
    back() {
      this.$router.push({
        name: "user.index",
      });
    },
  },
  mounted() {
    if (this.userId)
      getUser(this.userId).then(({ data }) => {
        this.form.name = data.content.name;
        this.form.password = data.content.password;
        this.form.status = data.content.status;
        this.form.email = data.content.email;
      });
    this.setLoad(false);
  },
};
</script>
