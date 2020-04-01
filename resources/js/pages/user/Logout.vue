<template>
  <div>
    <h1>You are logout</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.userLogout();
    this.$router.push({ name: "login" });
  },
  methods: {
    ...mapActions("login", ["userLogout"])
  }
};
</script>
