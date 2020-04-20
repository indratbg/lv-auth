<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="card" style="width:22rem">
          <div class="card-header">
            <i class="fa fa-key"></i> Login
          </div>
          <div class="card-body">
            <form @submit.prevent="login" method="post">
              <div class="form-group">
                <label for="email">E-Mail</label>
                <input
                  type="email"
                  class="form-control col-md-12"
                  name="email"
                  v-model="email"
                  autocomplete="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control col-md-12"
                  name="password"
                  v-model="password"
                  autocomplete="current-password"
                />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn btn-block btn-primary">Login</button>
                  </div>
                  <div class="col-6">
                    <button
                      class="btn btn-block btn-danger"
                      @click.prevent="
                                                loginProvider('google')
                                            "
                    >
                      Login with
                      <i class="fab fa-google" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <router-link
                  href="#"
                  class="btn btn-link"
                  :to="{ name: 'forgot.password' }"
                >Forgot password ?</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <vue-snotify></vue-snotify>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "indra.tbg@gmail.com",
      password: "secret"
    };
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: "user.dashboard" });
    }
  },
  computed: {
    ...mapState({
      errors: state => state.errors
    }),
    ...mapGetters(["loggedIn"])
  },
  methods: {
    ...mapActions("login", ["userLogin"]),
    async login() {
      await this.userLogin({
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.$router.push({
            name: "user.dashboard"
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    loginProvider(provider) {
      this.$store.commit("SET_LOADING", true, { root: true });
      var self = this;

      this.$auth
        .authenticate(provider)
        .then(response => {
          self.SocialLogin(provider, response);
        })
        .catch(err => {
          console.log({ err: err });
          this.$store.commit("SET_LOADING", false, { root: true });
        });
    },

    SocialLogin(provider, response) {
      this.$http
        .post("/sociallogin/" + provider, response)
        .then(response => {
          this.$store.commit("SET_TOKEN", response.data.access_token, {
            root: true
          });
          localStorage.setItem("token", response.data.access_token);
          this.$router.push({ name: "user.dashboard" });

          this.$store.commit("SET_LOADING", false, { root: true });
        })
        .catch(err => {
          console.log({ err: err });
          this.$store.commit("SET_ERRORS", err.response.data, { root: true });
          this.$store.commit("SET_LOADING", false, { root: true });
        });
    }
  }
};
</script>
