<template>
  <div style="margin-top:65px">
    <app-header></app-header>
    <div class="text text-center" v-if="isLoad">
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only text-center">Loading...</span>
      </div>
    </div>
    <vue-snotify></vue-snotify>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer.vue";

import { mapState, mapGetters } from "vuex";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  computed: {
    ...mapState({
      isLoad: state => state.isLoading
    })
  }
};
</script>
