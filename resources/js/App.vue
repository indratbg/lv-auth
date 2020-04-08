<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="text text-center" v-if="isLoad">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
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
