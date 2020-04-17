<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLayout"]),
    layout() {
      return this.getLayout;
    }
  }
};
</script>
