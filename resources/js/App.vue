<template>
  <div>
    <div class="container-fluid"></div>
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <div class="content-wrapper mt-3">
        <div class="text text-center" v-if="isLoad">
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only text-center">Loading...</span>
          </div>
        </div>
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
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
