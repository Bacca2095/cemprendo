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
          <b-col class="text-center"> <ButtonIcon icon="edit" /></b-col>
          <b-col class="text-center">
            <ButtonIcon variant="danger" icon="remove"
          /></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto">
        <base-table></base-table>
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
export default {
  components: { ButtonIcon },
  data() {
    return {
      page: 1,
      size: 50,
      totalRows: 0,
    };
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
