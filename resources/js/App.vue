<template>
  <div>
    <div class="container-fluid"></div>
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <div class="content-wrapper mt-3">
        <div class="card">
          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>
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
  }
};
</script>
