<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Lv-Auth</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">
              <i class="fa fa-home" aria-hidden="true"></i>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'news' }">
              <i class="fa fa-newspaper"></i> News
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contact' }">
              <i class="fa fa-phone" aria-hidden="true"></i>
              Contact Us
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav mt-2 mt-lg-0 pull-right">
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" :to="{ name: 'register' }">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" :to="{ name: 'login' }">Login</router-link>
            <router-link v-if="isLogin" class="nav-link" :to="{name:'logout'}">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedIn"]),
    isLogin() {
      return this.loggedIn;
    }
  }
};
</script>
