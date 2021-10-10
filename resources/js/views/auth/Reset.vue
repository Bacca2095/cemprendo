<template>
  <b-container>
    <b-row align-h="center">
      <b-col sm="auto" md="6" lg="4">
        <b-form @submit.stop.prevent="onLogin">
          <b-card class="border-0 shadow">
            <b-row align-h="center" class="my-5">
              <b-col sm="auto" class="text-center">
                <b-img src="images/logo.png" alt="Logo" width="150"></b-img>
              </b-col>
            </b-row>
            <b-row align-h="center" class="my-3">
              <b-col class="text-center">
                <b-form-input
                  v-model="form.email"
                  size="sm"
                  class="text-center"
                  type="email"
                  placeholder="Correo electrónico"
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row align-h="center" class="my-4">
              <b-col class="text-center">
                <b-button type="submit" size="sm" variant="primary"
                  >Recuperar contraseña</b-button
                >
              </b-col>
            </b-row>

            <b-row align-h="center" class="my-4">
              <b-col class="text-center">
                <b-button to="/login" size="sm" variant="link">Volver</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    onLogin() {
      this.login(this.form)
        .then((response) => {
          this.showToast(response.data.message, "success");
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.showToast(err.response.data.message, "error");
        });
    },
  },
};
</script>
