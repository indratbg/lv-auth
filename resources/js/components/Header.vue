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
            <router-link class="nav-link" :to="{ name: 'products.list' }">
              <i class="fa fa-cart-plus"></i> Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'news.list' }">
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

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" :to="{ name: 'login' }">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!isLogin" class="nav-link" :to="{ name: 'register' }">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLogin">
            <router-link
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-pre
            >
              Welcome
              <span class="caret"></span>
            </router-link>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <router-link class="nav-link" :to="{name:'user.dashboard'}">Dashboard</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="nav-link" :to="{name:'user.account.profile'}">Account</router-link>
              <router-link class="nav-link" :to="{name:'logout'}">Logout</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedIn"]),
    isLogin() {
      let authUser = this.loggedIn;
      if (authUser) {
        this.getUserDetail().catch(error => {
          this.$store.dispatch("login/userLogout");
          this.$router.push({ name: "login" });
        });
      }
      return authUser;
    }
  },
  methods: {
    ...mapActions("user", ["getUserDetail"])
  }
};
</script>
