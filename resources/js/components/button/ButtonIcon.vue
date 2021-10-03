<template>
  <b-button
    v-bind="$attrs"
    v-on="$listeners"
    :variant="variant"
    v-b-tooltip.bottom.hover="{ variant: variant }"
    :title="title"
    size="sm"
    class="p-0 rounded-circle m-auto"
  >
    <svg-icon height="28" width="28" :icon="icon" />
  </b-button>
</template>
<script>
import { BButton } from "bootstrap-vue";
export default {
  components: { BButton },
  props: {
    icon: {
      type: String,
      default: "add",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {
      title: null,
      name: null,
    };
  },
  created() {
    switch (this.icon) {
      case "add":
        this.title = "Crear";
        break;
      case "edit":
        this.title = "Editar";
        break;
      case "remove":
        this.title = "Borrar";
        break;
      case "reload":
        this.title = "Recargar";
        break;
      default:
        break;
    }
  },
};
</script>
<style scoped>
.btn-sm {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
}
</style>
