<template>
  <div>
    <h1>Halaman Profile</h1>
    {{ user}}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: state => state.user.auth
    })
  }
};
</script>
