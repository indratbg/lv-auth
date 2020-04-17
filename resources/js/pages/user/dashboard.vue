<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      auth: state => state.user.auth.name
    })
  }
};
</script>
